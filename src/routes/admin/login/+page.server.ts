import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { dev } from '$app/environment';
import process from 'node:process';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const password = formData.get('password');

		if (password == (dev ? 'test' : process.env.ADMIN_PASSWORD)) {
			cookies.set(
				'token', (dev ? 'test' : process.env.ADMIN_PASSWORD),
				{
					path: '/',
					maxAge: 60 * 60 * 24 * 30,
					secure: true,
					httpOnly: false, // <-- if you want to read it in the browser
				},
			);
			redirect(302, '/admin');
		}
		return fail(400, { error: 'Invalid login or password' });
	},
}