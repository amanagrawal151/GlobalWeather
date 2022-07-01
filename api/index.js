const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const path = require('path'); 
// const postRoute = require("./routes/posts");
var cors = require('cors')
const PORT = process.env.PORT || 8800
app.use(cors()) // Use this after the variable declaration
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);

// app.get('/',(req,res) => {
//   res.send('APP is running') ;
// })

//server production asssets 
// if(process.env.NODE_ENV === "production") 
// {
//     app.use(express.static(path.join("../build")))
//     app.get("*" , (req,res) => {res.sendFile(path.resolve(__dirname,'../','build','index.html'))}) ;
// }

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
// .catch((error) => console.log(`${error} did not connect`));

// app.listen(PORT, () => {
//   console.log("Backend server is running! on " ,{PORT}); 

// });