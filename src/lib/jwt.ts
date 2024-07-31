import jwt from "jsonwebtoken";

const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_SECRET as string;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_SECRET as string;

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