import mongoose from 'mongoose'
const URL = process.env.MONGOURL
const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(URL);
        console.log(`MongoDB connected !! Host name: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`);
    }
}
export default connectDB;