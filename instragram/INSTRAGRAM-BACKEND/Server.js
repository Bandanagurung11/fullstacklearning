import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cloudinary from "cloudinary"; // to upload image before uploading to the
import multer from "multer"; //middlewae package to handling form data
const upload = multer({ dest: "uploads/" });

import bcrypt from "bcrypt" //its hash/ bcrypt the plane password and decode it
//example 12345 ---->$akc

// var jwt = require('jsonwebtoken'); traditional way of importing

import jwt from "jsonwebtoken";


cloudinary.config({
  cloud_name: "dgx5rqttr",
  api_key: "599453627429327",
  api_secret: "97T6zfYbp13IQKhUcVLA1VUJ6p0",
});

//verify token
const verifyToken =(req, res, next)=>{
  const token = req.headers["authorization"];
  if(!token){
    return res.status(401).json({message: "No token provided"});
  }
  jwt.verify(token, "!@E#@fvcnwevw$@$", (err,decoded)=>{
  if(err){
    return res.status(403).json({message: "Failed to authenticate token"});
  }
  console.log(decoded, "decoded");
  //req.useId =decoded.userId;
  })
}

// 1. server setup
const app = express();

// 2. middleware configuration
app.use(cors());
app.use(express.json()); // data aauney janey chai json fromat means object format ma hos vanerw from database

//  3. database configuration
try {
  mongoose.connect(
    "mongodb+srv://bandanagrg881:SYZcb3feqTEzieR6@cluster0.6vvvc.mongodb.net/instragram?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("mongodb connected successfully");
} catch (error) {
  console.log("mongodb connection fail");
}
// 4. schema configuration, {items in the table}
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  comments: [
    {
      commentMessage: { type: String, required: true },
    },
  ],
});

//user schema creating
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  profilePicture: { type: String, required: true },
});

// 5. model configuration (table)

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

// User route

app.get("/", async (req, res) => {
  return res.send("server is running");
});

app.post("/users",verifyToken, async (req, res) => {
  try {
    //check if username is already taken
    const yesUserExit = await User.findOne({username:req.body.username});
    console.log(yesUserExit);
    if(yesUserExit){
      return res.status(409).json({message: "user already exist"});
    }
    // console.log(req.body);
  //bcrypt the plane password before saving to the database
  const saltRounds =10;
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
  console.log(hashPassword, "hashpassword")
    const newUser = await new User({...req.body, password:hashPassword}).save();
    
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});


app.post("/users/login", async (req, res) => {
  try {

    //check if username exist or not
    const yesUserNameExit = await User.findOne({username:req.body.username});
    if(!yesUserNameExit){
      return res.status(404).json({message: "user does not exit"})
    }

    //compare user password if user exist
    const passwordMatch = await bcrypt.compare(req.body.password, yesUserNameExit.password )  //1244 and !@241dc
    if(!passwordMatch){
      return res.status(401).json({message: "password doesn't match"});
    }

    //generate token
    // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    const jwtToken = jwt.sign({username:req.body.username}, "!@E#@fvcnwevw$@$", {expiresIn: '24hr'});
    return res.status(200).json({
      message: "login successful",
      jwtToken: jwtToken,
      user : yesUserNameExit
    });
    
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    return res.status(200).json(singleUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    if (!singleUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // If user exist then update the user
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    if (!singleUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // If user exist then delete the user
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

// listen to the server, port define for path
app.listen(4000, () => {
  console.log("server is running on port 4000");
});

// 6. Route configuration
app.get("/Posts", async (req, res) => {
  try {
    const allPost = await Post.find();
    console.log(allPost); //for developer to debug
    return res.status(200).json(allPost); //for frontend use to display post
  } catch (error) {
    console.log(error); // for developer to debug
    return res.status(5000).json({
      message: "error",
    }); //for frontend user ti display message
  }
});

//create route
app.post("/Posts", upload.single("image"), async (req, res) => {
  try {
    console.log(req);
    console.log(req.body, "bandana");

    //upload image to couldinary before saving to database
    const response = await cloudinary.uploader.upload(req.file.path);
      console.log(response, response.secure_url, "response"); // couldinary will give secure-url after uploading there
    const newPost = await new Post({...req.body, image: response.secure_url}).save();
    return res.status(201).json(newPost); //201 status code for creating something
  } catch (error) {
    console.log("something went wrong in posts blog", error);
    return res.status(500).json({
      message: "something went wrong",
      error: error,
    }); //  500 means internal server error
  }
});

// Get on by id
app.get("/Posts/:id", async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    return res.status(200).json(singlePost);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error,
    });
  }
});

// we use put and patch for update
// put is used to update all the fields of the object and it create the object if it does not exist
//patch is used to update some fields of the object and it does not create the object if it does not exist

//update one by id
app.patch("/Posts/:id", async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    if (!singlePost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    // if post exist the update the post

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error,
    });
  }
});

// delete by id
app.delete("/Posts/:id", async (req, res) => {
  try {
    const singlePost = await Post.findById(req.params.id);
    if (!singlePost) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    // if post exist the delete the post

    const deletesPost = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletesPost);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error,
    });
  }
});
