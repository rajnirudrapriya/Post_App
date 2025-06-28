const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const { connectDb } = require('./config/db');

const postRouter = require('./Router/postRouter');
const userRouter = require('./Router/userRouter');

let PORT = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/postRoute', postRouter);
app.use('/userRoute', userRouter);

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
