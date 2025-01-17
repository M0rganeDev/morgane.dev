import { handler } from './handler.js';
import express from 'express';

const app = express();

app.use('/uploads', express.static('/app/uploads'));
app.use(handler);

app.listen(3000, () => {
	console.log('http://0.0.0.0:3000');
});
