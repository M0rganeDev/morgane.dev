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

        const randomFilename = `${generateRandomFilename()}`;
        
        // Set the upload path to the "img" folder (relative to the Docker container's file system)
        const uploadPath = path.resolve('/app/static/uploads', randomFilename);  // Update to the img folder

        // Ensure the img directory exists in case it's not created yet
        if (!fs.existsSync('/app/static/uploads')) {
            fs.mkdirSync('/app/static/uploads', { recursive: true });
        }

        fs.writeFileSync(uploadPath, imageBuffer);

        // Return the accessible URL (adjust path to match your desired folder structure)
        return new Response(`https://morgane.dev/uploads/${randomFilename}`);
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500
        });
    }
}
