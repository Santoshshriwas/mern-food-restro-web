import mongoose from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect("mongodb+srv://SantoshShriwas:Santosh$9589@cluster0.4kkkm9b.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}