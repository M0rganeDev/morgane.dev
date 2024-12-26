import fs from 'fs';
import path from 'path';
import { dev } from '$app/environment';

const SECRET_TOKEN = dev ? "test" : process.env.SECRET_TOKEN_API;

export async function POST({ request }) {
	// Get the environment variable (SECRET_TOKEN)

	// Parse the JSON body from the request
	const { token, title, content } = await request.json();
	console.log()
	// Validate the token
	if (token !== SECRET_TOKEN) {
		return new Response ("Invalid token !", { status: 403 });
	}

	// Sanitize the title for filename (replace spaces with hyphens)
	const sanitizedTitle = title.replace(/\s+/g, '-');

	let _path = (dev ? "" : "/") + "app/blogs"
	// Set the file path (Assume the file will be saved under a 'markdown' directory)
	const filePath = path.join(_path, `${sanitizedTitle}.md`);

	// Ensure the directory exists
	if (!fs.existsSync(_path)) {
		fs.mkdirSync(_path);
	}

	// Write the content to the file
	try {
		fs.writeFileSync(filePath, content);
		return new Response ("Ok", { status: 200 });
	} catch (error) {
		console.error('Error writing file:', error);
		return new Response ("Error writing file", { status: 500 });
	}
}