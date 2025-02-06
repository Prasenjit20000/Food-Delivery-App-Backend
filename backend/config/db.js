import mongoose from "mongoose";

export const  connectDB = async () =>{
    const connectionString=process.env.DB_CONNECTION_STRING;
    await mongoose.connect(connectionString).then(()=>console.log("DB Connected"));
}
