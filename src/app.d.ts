// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user?: {
				_id: string;
				username: string;
				avatar: string;
				email: string;
				password: string;
				tokenVersion: number;
				createdAt: Date;
				friends: string[];
				groups: string[];
				bio: string;
				isVerified: boolean;
				verificationToken: string | null;
			};
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
