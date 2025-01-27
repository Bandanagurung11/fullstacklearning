import express from "express";
import mongoose from "mongoose";
import cors from "cors";

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
  username: { type: String, required: true },
  profilePicture: { type: String, required: true },
});

// 5. model configuration (table)

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

// User route

app.post("/users", async (req, res) => {
  try {
    const newUser = await new User(req.body).save();
    return res.status(201).json(newUser);
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
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
app.post("/Posts", async (req, res) => {
  try {
    const newPost = await new Post(req.body).save();
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

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
  
      const deletesPost = await Post.findByIdAndDelete(
        req.params.id,
        
      );
      return res.status(200).json(deletesPost);
    } catch (error) {
      return res.status(500).json({
        message: "something went wrong",
        error: error,
      });
    }
  });
  