const http = require("https");
const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const app = express();
const server = http.createServer(app)

mongoose.connect("mongodb://127.0.0.1:27017/hospitalSystem")
.then(()=>{
    console.log("MongoDb Connected")
})
.catch(err=>{
    console.log(err);
});

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.use("/api/auth",authRoutes);
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));

})


app.listen(2000,()=>{
    console.log("Server started at local host 2000");
})