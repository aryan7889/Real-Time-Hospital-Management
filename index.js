const hhtp = require("https");
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const { Server } = require("http");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/hospitalSystem")
.then(()=>{
    console.log("MongoDb Connected")
})
.catch(err=>{
    console.log(err);
});

app.use(express.json());
app.use(express.static(path.json(__dirname,"public")));

app.use("/api/auth",authRoutes);
app.get("/",(req,res)=>{
    res.sendFile(path.json(__dirname,"public","index.html"));

})


Server.listen(2000,()=>{
    console.log("Server started at local host 2000");
})