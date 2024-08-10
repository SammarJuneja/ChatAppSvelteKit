import { type RequestHandler, json } from "@sveltejs/kit";
import { signAccessToken, signRefreshToken } from "../../stores/store";
import User from "$lib/modals/user";
import bcrypt from "bcrypt";

export const POST: RequestHandler = async ({ request }) => {
    const { email, password } = await request.json();

    if (!email && !password) {
        return json({
            "status": 400,
            "error": "You didn\'t fill email and password"
        });
    }

    const user: any = User.findOne({
        "email": email
    });

    if (!user) {
        return json({
            "status": 404,
            "error": "Username with that email was not found"
        });
    }

    const decodedPass = await bcrypt.compare(password, user.password);

    if (!decodedPass) {
        return json({
            "status": 500,
            "error": "You entered wrong password"
        });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    
    return json({
        "status": 200,
        "message": "You are logged in successfully",
        "accessToken": accessToken,
        "refreshToken": refreshToken
    });
}