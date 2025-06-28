const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./config/db');
const postRouter = require('./Router/postRouter');
const userRouter = require('./Router/userRouter');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routers
app.use('/postRoute', postRouter);
app.use('/userRoute', userRouter);

// Home route
app.get('/', (req, res) => {
    res.send('Hello from Express on Render!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
