//1. import necessary modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//2. making the app
const app = express();

//3. middlewar --> every request will pass through this
app.use(express.json());
app.use(cors());
// sabai domain bata request linx

const PORT = 4000;

//4.connecting to the mongodb database using mongoose package
try {
  mongoose.connect(
    "mongodb+srv://bandanagrg881:7opLS2TM4V1uZGVV@cluster0.3wm41.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 "
  );
  console.log("MOngodb connected successfully");
} catch (error) {
  console.log("Coundn't connect to the database.");
}
// frontend -> backend(Server/API)->database

// Define Schema
const StudendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  address: { type: String, required: false },
});
// defining model, table for students
const StudentTable = mongoose.model("StudentTable", StudendSchema);
//Define students route
app.get("/Students", async (req, res) => {
  try {
    const response = await StudentTable.find();
    console.log(response);
    return res.status(200).json({
      message : "all data fetch successfully",
      data : response,
    });
    
  } catch (error) {
    console.log(
      "Something went wrong while fetching data from students database", error
    );
  }
});

//create student route
app.post("/Students", async (req, res) => {
  try {
    console.log(req.body);
    const newStudent = await new StudentTable(req.body).save();
    console.log(newStudent);
    return res.status(200).json({
      message: "student create successfully",
      data : newStudent,
    });
    
  } catch (error) {
    console.log("Something went wrong",error);
  }
});


// student delete by body
// app.delete("/Students", async(req, res)=>{
//     try {
//       const deletedStudent = await StudentTable.findByIdAndDelete({_id:req.body.id})  
//       console.log("deleted student is:")
//       console.log(deletedStudent);
// res.status(200).json({
//   message: "student deleted sucessfully",
//   data : deletedStudent,
//     })
//    }
//     catch (error) {
//         console.log("something went wrong, error");
        
//     }

// });



// Delete by params

app.delete("/Students/:id", async(req, res)=>{
  try {
    const deletedStudent = await StudentTable.findByIdAndDelete({_id:req.params.id})  
    console.log("deleted student is:")
    console.log(deletedStudent);
    res.status(200).json({
      message: "student deleted sucessfully",
      data : deletedStudent,
    })
  } catch (error) {
      console.log("something went wrong, error");
      
  }

});



// get student by id
app.get("/Students/:id", async(req, res)=>{
  try {
    const student = await StudentTable.findById({_id : req.params.id});
    console.log("fetched student by id is:");
    console.log(student);
    return res.status(200).json(student);
  } catch (error) {
    
    console.log("something went wrong", error)
    
  }
})


// update student by id
app.put("/Students/:id", async (req, res)=>{
  try {
    const updateStudent = await StudentTable.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true});
    return res.status(200).json({
      message : "student updated successfully",
      data : updateStudent,
    });
  } catch (error) {
    console.log("something went wrong", error);
    
  }
})






// test request to the server
app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Server is working",
  });
});

// run the Server
app.listen(PORT, () => {
  console.log("Server is Running");
});
