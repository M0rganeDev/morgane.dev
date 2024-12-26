import 'dotenv/config';
import { dev } from '$app/environment';

export function isLogged(token : string | undefined) : boolean
{
	if (token == null)
		return false;
	if (dev)
		return token == "test";

	return token == process.env.ADMIN_PASSWORD;
}