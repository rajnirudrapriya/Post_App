const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load variables from .env

const app = express();
const { connectDb } = require('./config/db');
const postRouter = require('./Router/postRouter');
const userRouter = require('./Router/userRouter');


let PORT = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/postRoute', postRoute);
app.use('/userRoute', userRoute);

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
});
