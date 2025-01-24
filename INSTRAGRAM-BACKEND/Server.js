import express from "express"
import mongoose from "mongoose"
import cors from "cors"


// 1. server setup
const app = express();

// 2. middleware configuration
app.use(cors());
app.use(express.json()); // data aauney janey chai json fromat means object format ma hos vanerw from database

//  3. database configuration
try {
    mongoose.connect("mongodb+srv://bandanagrg881:SYZcb3feqTEzieR6@cluster0.6vvvc.mongodb.net/instragram?retryWrites=true&w=majority&appName=Cluster0");
    console.log("mongodb connected successfully");
    
} catch (error) {
    console.log("mongodb connection fail");
    
}
// 4. schema configuration, {items in the table}
const postSchema = new mongoose.Schema({
    title: {type:String, required: true},
    image: {type : String, required:true},
    likeCount: {type: Number, default:0},
    comments :[
        {
            commentMessage :{type:String, required:true},
        },
    ],
});

// 5. model configuration (table)

const Post = mongoose.model("Post", postSchema);

// listen to the server, port define for path
app.listen(4000, ()=>{
    console.log("server is running on port 4000");
})

// 6. Route configuration
app.get("/Posts", async(req, res)=>{
    try {
       const allPost = await Post.find();
       console.log(allPost); //for developer to debug
       return res.status(200).json(allPost); //for frontend use to display post
    } catch (error) {
        console.log(error) // for developer to debug
        return res.status(5000).json({
            message : "error"
        }); //for frontend user ti display message
        
    }

})