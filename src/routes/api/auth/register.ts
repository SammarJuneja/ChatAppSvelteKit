import User from '$lib/modals/user';
import { type RequestHandler, json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export const POST: RequestHandler = async ({ request }) => {
  const { username, email, password } = await request.json();
  const emailRegex: any = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  const passRegex: any = "^(?=.*[a-zA-Z])(?=.*\d).{8}$"

  if (!username || !email || !password) {
    return json({
      "status": 500,
      "error": "Please fill all the details"
    });
  }

  if (!emailRegex.test(email) || !passRegex.test(password)) {
    return json({
      "status": 500,
      "error": "Your email or password is wrong, your password should contain one number and one special letter"
    });
  }

  const userEmailCheck = await User.findOne({
    email,
  });

  const userNameCheck = await User.findOne({
    username,
  });

  if (userEmailCheck) {
    return json({
      "status": 500,
      "error": "User with that email already exists"
    });
  }

  if (userNameCheck) {
    return json({
      "status": 500,
      "error": "Account with that username already exists"
    });
  }
  
  const hashedPassword = bcrypt.hashSync(password, 10);

  await User.create({
      username,
      email,
      password: hashedPassword
  });

  return json({
    "status": 200,
    "message": `Your account is successfully created by username ${username}`
  });
};

