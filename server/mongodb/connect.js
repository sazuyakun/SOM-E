import mongoose, { mongo } from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => {
            console.log('Failed to connect to MongoDB');
            console.log(err);
        })
}
export default connectDB;