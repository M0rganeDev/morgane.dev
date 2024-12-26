import fs from 'fs';
import path from 'path';
import { type RequestHandler } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const GET: RequestHandler = async ({ url }) => {

    if (url.searchParams.get('postid') === null)
        return new Response('Parameter postid is missing', { status: 400 });

    const filename = url.searchParams.get("postid");
    const filePath = path.resolve((dev ? "" : "/") + 'app/blogs', `${filename}.md`);

	console.log(filePath)
    // protect from directory traversal attack by not returning the file if
    // it's not in the right directory
	if (!dev) {
		if (!filePath.includes("/app/blogs")) {
			console.log(`Some smart-ass tried to access a file outside of /app/blogs : ${filePath}`);
			return new Response('No.', { status: 403 })
		}
	}
    if (fs.existsSync(filePath)) {
		const fileContent = fs.readFileSync(filePath, 'utf-8');
            return new Response(fileContent, {
				status: 200,
				headers: {
					'Content-Type': 'text/markdown'
				}
			});
	}
    else
		return new Response('Cant find article', { status: 404 });
};
