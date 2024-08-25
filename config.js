import { config as dotenvConfig } from "dotenv";
dotenvConfig();

export const config = {
  mongo_uri: process.env.MONGO_URI,
  logo: process.env.LOGO_LINK,
  jwtAccess: {
    secret: process.env.JWT_ACCESS_SECRET,
    expiresIn: "15m",
  },
  jwtRefresh: {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: "7d",
  },
  hashing: {
    saltRounds: 10,
  },
};