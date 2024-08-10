import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { config } from "../../config";

const JWT_ACCESS_TOKEN = config.jwtAccess.secret as string;
const JWT_REFRESH_TOKEN = config.jwtRefresh.secret as string;

export const signAccessToken = (payload: object, expiresIn: string | number = "15m") => {
    return jwt.sign(payload, JWT_ACCESS_TOKEN, { expiresIn });
}

export const signRefreshToken = (payload: object, expiresIn: string | number = "7d") => {
    return jwt.sign(payload, JWT_REFRESH_TOKEN, { expiresIn });
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, JWT_ACCESS_TOKEN);
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, JWT_REFRESH_TOKEN);
}

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo_uri);
        console.log("MongoDb is connected");
    } catch (error) {
        console.error(error);
    }
}