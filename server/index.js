import express from "express";
// import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./db/db.js";
import route from "./routes/userRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({
    path: './env'
})
app.use('/api',route)
// database connection and serverstart
const PORT = process.env.PORT || 7000
connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running at :${PORT}`);
    })
})
.catch((error)=>{
    console.log(`MongoDB connection faild :${error}`);
})
   
// end