require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

exports.connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('✅ Database connected');
    } catch (err) {
        console.error('❌ Failed to connect to DB:', err.message);
        process.exit(1);
    }
};
