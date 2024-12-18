import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';
import 'dotenv/config';

const SECRET_TOKEN = process.env.SECRET_TOKEN;

// Function to generate a random 10-character string (lowercase letters and numbers)
function generateRandomFilename(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
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

        const extension = path.extname(image.name).toLowerCase();

        const randomFilename = `${generateRandomFilename()}${extension}`;
        const uploadPath = path.resolve('static/uploads', randomFilename);
        fs.writeFileSync(uploadPath, imageBuffer);

        return json({ url: `https://morgane.dev/uploads/${randomFilename}` });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500
        });
    }
}
