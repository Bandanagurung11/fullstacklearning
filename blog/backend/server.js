import express from "express";
// extracting express module form express package;
import mongoose from "mongoose";
//helps interact with database
import cors from "cors";
// middleware, cross origin resources sharing, allow only specified domain request to pass to the database

const app = express();
// assigning express to the app so the app is server here
app.use(express.json());
// data get and send in object format only
app.use(cors());

try {
  mongoose.connect(
    "mongodb+srv://bandanagrg881:7uzN7sR8bHgl532A@cluster0.k7ba2.mongodb.net/blog-db?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("database connected successfully")
} catch (error) {
  console.log("something went wrong while connecting to the database", error);
}

// ? vanda agadhi chai database ko name
 app.listen(5000, ()=>{
    console.log("server is running on port 5000");
 })

const userSchema = new mongoose.Schema({
    fullName : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    profilePicture : {type:String, required:true},
});
//defining user table fields

const User=mongoose.model("users", userSchema);
// crreating user table using model method

// user routes (CRUD)--> create read update delete

app.post("/users", async(req, res)=>{
    try {
        const emailExist = await User.findOne({email:req.body.email});
        if(emailExist){
            // console.log("this user eamail already exist")
            return res.status(409).json({message: `user already exist with this ${req.body.email}`});
        }
      const newUser = await User(req.body).save();
      console.log(newUser, "this is new user");
      return res.status(201).json({message: "user created sucessfully", user: newUser})  
    } catch (error) {
        console.log("something went wrong", error);
        return res.status(500).json({message: "internal server, error"});
    }
})



