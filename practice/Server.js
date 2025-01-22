//1. import necessary modules
import express from "express"
import mongoose from "mongoose"
import cors from "cors"


//2. making the app
const app = express();

//3. middlewar --> every request will pass through this
app.use(express.json());
app.use(cors())
// sabai domain bata request linx

const PORT =4000;



//4.connecting to the mongodb database using mongoose package
try {
    mongoose.connect("mongodb+srv://bandanagrg881:7opLS2TM4V1uZGVV@cluster0.3wm41.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 ");
    console.log("MOngodb connected successfully");
} catch (error) {
    console.log("Coundn't connect to the database.");
    
}
// frontend -> backend(Server/API)->database

// Define Schema
const StudendSchema= new mongoose.Schema({
    name : { type:String, required:true},
    age :{type: String, required:true},
    address :{type: String, required:false},
});
// defining model, table for students
const StudentTable=mongoose.model("StudentTable", StudendSchema);
//Define students route
app.get("/students", async (req, res)=>{
    try {
        const response = await StudentTable.find()
        return res.status(200).json(response)
        
    } catch (error) {
        console.log("Something went wrong while fetching data from students database");
        
    }

})

// test request to the server
app.get("/test", (req, res)=>{
    res.status(200).json({
        message: "Server is working",
    });
});


// run the Server
app.listen(PORT, ()=>{
    console.log("Server is Running");
});