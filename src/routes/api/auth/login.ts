import type { RequestHandler } from '@sveltejs/kit';
import { signAccessToken, signRefreshToken } from '$lib/jwt';
import mongoose from 'mongoose';
import User from '$lib/modals/user';

export const POST: RequestHandler = async ({ request }) => {
    const { email, password } = await request.json();

    if (!email && !password) {
        return {
            "status": 400,
            "error": "You didn\'t filled email or password"
        }
    }

    const user = User.findOne({
        "email": email
    });

    if (!user) {
        return {
            "status": 404,
            "error": "Username with that email was not found"
        }
    }
}