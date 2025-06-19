const express = require('express');
const app = express();
const { connectDb } = require('./config/db')
const postRoute = require('./Router/postRouter')
const userRoute = require('./Router/userRouter')
let PORT = process.env.PORT;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/postRoute', postRoute)
app.use('/userRoute', userRoute)

app.get('/', (req, res) => {
    res.send('Hello Express');
})

app.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
})