import { handler } from './handler.js';
import express from 'express';

const app = express();

app.use(express.static('uploads'));
app.use(handler);

app.listen(3000, () => {
	console.log('http://0.0.0.0:3000');
});
