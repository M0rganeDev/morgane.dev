import { isLogged } from '$lib/auth';
import { error } from '@sveltejs/kit';

export async function load({ cookies, params, fetch }) {
	if (!isLogged(cookies.get("token"))) {
		error(403, 'you are not allowed to access this resource you gremlin !')
	}

	const call = await fetch("/api/blog/fetch?postid=" + params.slug);
	const source = await call.text()

	return {
		token: cookies.get("token"),
		slug: params.slug,
		status: call.status,
		content: source
	}
}