import express from "express";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

try {
  mongoose.connect(
    "mongodb+srv://bandanagrg881:hxLjLp8RcB2mlY8D@cluster0.y8pwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("mongodb connected successfully");
} catch (error) {
  console.log("mongodb connection fail");
}

const feedSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
});

const Feeds = mongoose.model("Feeds", feedSchema);


app.get("/feeds", async (req, res) => {
    try {
      const allFeeds = await Feeds.find();
      return res.status(200).json(allFeeds);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  });

  app.get("/feeds/:id", async (req, res) => {
    try {
      const singleFeed = await Feeds.findById(req.params.id);
      return res.status(200).json(singleFeed);
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    }
  });

  app.patch("/feeds/:id", async (req, res) => {
    try {
      const singleFeed = await Feeds.findById(req.params.id);
      if (!singleFeed) {
        return res.status(404).json({
          message: "feed not found",
        });
      }
      // If user exist then update the user
      const updateFeed = await Feeds.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.status(200).json(updateFeed);
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    }
  });


  app.delete("/feeds/:id", async (req, res) => {
    try {
      const singleFeed = await Feeds.findById(req.params.id);
      if (!singleFeed) {
        return res.status(404).json({
          message: "Feeds not found",
        });
      }
  
      // If user exist then delete the user
      const deletedFeed = await Feeds.findByIdAndDelete(req.params.id);
      return res.status(200).json(deletedFeed);
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    }
  });

  app.post("/feeds", async (req, res) => {
    try {
      const newFeed = await new Feeds(req.body).save();
      return res.status(201).json(newFeed); //201 status code for creating something
    } catch (error) {
      console.log("something went wrong in posts blog", error);
      return res.status(500).json({
        message: "something went wrong",
        error: error,
      }); //  500 means internal server error
    }
  });



  app.listen(4000, () => {
    console.log("server is running on port 4000");
  });
