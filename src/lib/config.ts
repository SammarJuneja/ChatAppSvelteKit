require("dotenv");

export const config: any = {
  mongo_uri: process.env.MONGO_URI,
  jwtAccess: {
    secret: process.env.ACCESS_SECRET,
    expiresIn: "1h",
  },
  jwtRefresh: {
    secret: process.env.REFRESH_TOKEN,
    expiresin: "30d",
  },
  hashing: {
    saltRounds: 10,
  },
};
