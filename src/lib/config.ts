export const config = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
  },
  hashing: {
    saltRounds: 10,
  },
};
