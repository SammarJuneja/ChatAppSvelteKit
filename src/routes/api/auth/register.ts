import type { RequestHandler } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

type RequestBody = {
  email: string;
  password: string;
};

// export const post: RequestHandler<RequestBody> = async ({ request }) => {
//   const { email, password } = await request.json();
//   const hashedPassword = bcrypt.hashSync(password, 10);

//   const user = await prisma.user.create({
//     data: {
//       email,
//       password: hashedPassword
//     }
//   });

//   return {
//     status: 201,
//     body: { user }
//   };
// };

