require("dotenv");

export const config: any = {
  mongo_uri: process.env.MONGO_URI,
  jwtoken: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
  },
  hashing: {
    saltRounds: 10,
  },
};
