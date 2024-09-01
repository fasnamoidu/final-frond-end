const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://fasnavazhikkadavu:fasnamm@cluster0.lsthmaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });