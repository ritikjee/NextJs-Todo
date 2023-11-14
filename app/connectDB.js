const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('Already connected.');
            return;
        }
        const conn = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;