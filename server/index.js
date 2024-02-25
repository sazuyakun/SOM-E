import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

const port = 5173;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', async (req, res) => {
    res.send('Hello from SOM-E');
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`Server has started on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}
startServer();