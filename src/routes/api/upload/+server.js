import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';
import 'dotenv/config';

const SECRET_TOKEN = process.env.SECRET_TOKEN;

function canIHasRandomNamePlz(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result + ".png";
}

export async function POST({ request }) {
    try {
        const formData = await request.formData();

        const token = formData.get('token');
        if (!token || token !== SECRET_TOKEN) {
            return new Response(JSON.stringify({ error: 'Invalid token' }), {
                status: 401
            });
        }

        const image = formData.get('image');
        if (!image || !(image instanceof File)) {
            return new Response(JSON.stringify({ error: 'No image provided' }), {
                status: 400
            });
        }

        const buffer = await image.arrayBuffer();
        const imageBuffer = Buffer.from(buffer);

        const randomFilename = `${canIHasRandomNamePlz()}`;
        
		// this shit took some trial and error to get right
		const rawPath = '/app/uploads'
        const uploadPath = path.resolve(rawPath, randomFilename);

		// the dir should always exist but you never know.
        if (!fs.existsSync(rawPath)) {
            fs.mkdirSync(rawPath, { recursive: true });
        }

        fs.writeFileSync(uploadPath, imageBuffer);

		// my script is dumb and cant parse json, return the raw domain and all
        return new Response(`https://morgane.dev/uploads/${randomFilename}`);
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500
        });
    }
}
