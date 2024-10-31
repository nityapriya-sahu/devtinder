const express = require("express");

const app = express();

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user!");
//     res.send("Response!!!");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route user 1!");
//     res.send("Response 1!!!"); // it shows error  "Cannot set headers after they are sent to the client"
//   }
// );

//====================================================

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user!");
//     // res.send("Response!!!");
//     next();
//   },
//   (req, res) => {
//     console.log("Handling the route user 1!");
//     res.send("Response 1!!!");
//   } //here in this code output is response1!!!
// );

//===================================================

// Here the output will be 'Response 3!!!', and we can also group it using [].. it gives same output. It's optional
// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user!");
//     // res.send("Response!!!");
//     next();
//   },
//   [
//     (req, res, next) => {
//       console.log("Handling the route user 1!");
//       //   res.send("Response 1!!!");
//       next();
//     },
//     (req, res, next) => {
//       console.log("Handling the route user 2!");
//       //   res.send("Response 2!!!");
//       next();
//     },
//   ],
//   (req, res) => {
//     console.log("Handling the route user 3!");
//     res.send("Response 3!!!");
//   }
// );

//============================================================

//What happen if we write next() first then send response

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("Handling the route user!");
//     next();
//     res.send("Response!!!");
//   },
//   (req, res) => {
//     console.log("Handling the route user 1!");
//     res.send("Response 1!!!");
//   }
//   //It gives the output 'Response 1!!!' and also show warning error "Cannot set headers after they are sent to the client"
// );

//-------------- OR OR OR OR OR OR OR OR OR ------------------------

//We can do it like this also.

app.get("/user", (req, res, next) => {
  //   res.send("response route handler 1");
  console.log("response route handler 1");
  next();
});
app.get("/user", (req, res) => {
  console.log("response route handler 2");
  res.send("response route handler 2");
});

app.listen("9090", () => console.log("Listen on port 9090..."));
