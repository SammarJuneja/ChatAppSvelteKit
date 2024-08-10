require("dotenv");

export const config: any = {
  mongo_uri: process.env.MONGO_URI,
  jwtAccess: {
    secret: process.env.ACCESS_SECRET,
    expiresIn: "15m",
  },
  jwtRefresh: {
    secret: process.env.REFRESH_TOKEN,
    expiresin: "7d",
  },
  hashing: {
    saltRounds: 10,
  },
};
