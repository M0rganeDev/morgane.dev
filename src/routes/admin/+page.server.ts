import { isLogged } from '$lib/auth';
import { error } from '@sveltejs/kit';

export async function load({ cookies }) {
	if (!isLogged(cookies.get("token"))) {
		error(403, 'you are not allowed to access this resource you gremlin !')
	}
}