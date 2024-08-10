import { type RequestHandler, json } from "@sveltejs/kit";
import { verifyRefreshToken } from "../stores/store";
import User from "$lib/modals/user";

export const authentication: RequestHandler = async (event) => {
    const authHeader = event.request.headers.get("authorization");

    if (!authHeader) {
        return json({
            "status": 401,
            "message": "Authentication header is missing"
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return json({
            "status": 401,
            "message": "Authentication token is missing"
        });
    }
    
    const verifiedToken = verifyRefreshToken(token) as App.Locals["user"];

    if (!verifiedToken) {
        return json({
            "status": 401,
            "message": "Token is invalid"
        });
    } else {
        event.locals.user = verifiedToken;
    }

    return json({
        "status": 200
    });
}

export const GET: RequestHandler = async (event) => {
    const authResponse = await authentication(event);

    if (authResponse) {
        return authResponse;
    }

    const user = event.locals.user;

    const data = await User.findOne({
        _id: user?._id
    });

    return json({
        "status": 200,
        "data": data
    });
};