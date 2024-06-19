import type { RequestHandler } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { generateToken } from '$lib/auth';
import bcrypt from 'bcrypt';

export const post: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = generateToken(user);
    return {
      status: 200,
      body: { token }
    };
  }

  return {
    status: 401,
    body: { error: 'Invalid email or password' }
  };
};