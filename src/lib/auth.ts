import jwt from 'jsonwebtoken';
const { jwt: config } = require('./config');
const { secret, expiresIn } = config;

export function generateToken(user: { id: number }) {
  return jwt.sign({ id: user.id }, secret, { expiresIn });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
}