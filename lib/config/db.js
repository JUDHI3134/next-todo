import mongoose from "mongoose"


export const connectDB = async() => {
   await mongoose.connect('mongodb+srv://judhistirbehera532:9090161171@cluster0.v7g6idn.mongodb.net/todo')
   console.log("Database connected");
}