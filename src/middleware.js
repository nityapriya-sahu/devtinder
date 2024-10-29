const express = require("express");

const app = express();

//GET /user => middleware chain => request handler

// app.use('/user', (req,res)=>{
//     //   res.send("Handling / route ");
// next();
// })   //Middleware
app.get(
  "/user",
  (req, res, next) => {
    //   res.send("response route handler 1");
    console.log("Handling /user route ");
    next();
  },
  (req, res, next) => {
    console.log("1st Route Handler!");
    next();
  },
  (req, res, next) => {
    console.log("2nd Route Handler!");
    next();
  },
  (req, res, next) => {
    console.log("Response Route Handler!");
    res.send("response route handler 1");
    next();
  }
);

//Line no. 13 - 25 called Middleware, and 26 - 30 that function we called Route Handler
app.listen("8080", () => console.log("Listen on port 8080..."));
