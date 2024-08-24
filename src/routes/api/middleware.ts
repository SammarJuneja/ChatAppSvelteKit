import jwt from "jsonwebtoken";
import { config } from "../../../config";
import User from "$lib/modals/user";

const authMiddleware = async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ "error": "Authentication header is missing" });
    }

    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ "error": "Authentication token is missing" });
    }

    try {
        jwt.verify(token, config.jwtAccess, async (err: any, tok: any) => {
            if (err) {
                return res.status(401).json({ "error": "Invalid or expired token" });
            }

            const { userId } = tok;

            const userExist = await User.findById(userId);

            if (!userExist) {
                return res.status(404).json({ "error": "User not found" });
            }

            req.userId = userId;
            next();
        });
    } catch (error) {
        res.status(500).json({ "error": "Internal server error" });
        console.log(error)
    }
}

module.exports = authMiddleware;