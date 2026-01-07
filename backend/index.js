import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookmodel.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    
    return res.status(200).send('Hello, World!');
});



mongoose
    .connect(mongoDBURL )
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));