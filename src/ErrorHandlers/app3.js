const express = require("express");

const app = express();

// (1)
// app.get("/getUserData", (req, res) => {
//   //Logic of DB call & get user data

//   throw new Error("VGHGggjbh");
//   res.send("User data sent!");

//   //   if you are handle the error like this, then the error message is not good for user experience
// });

// //So always use like it.
// app.use("/", (err, req, res, next) => {
//   // To handle the error pass the 'err' as an argument is first in the funcxtion
//   if (err) {
//     res.status(500).send("Something went wrong!");
//   }
// });

// ===========
// (2) - always prefer to handle the error

app.get("/getUserData", (req, res) => {
  //Always write code (both logic or error) inside try catch block
  try {
    //Logic of DB call & get user data

    throw new Error("VGHGggjbh");
    res.send("User data sent!");
  } catch (err) {
    res.status(500).send("Some error ! contact to support team");
  }
});

//Always write it in below to handle all the unexpected error
app.use("/", (err, req, res, next) => {
  // To handle the error pass the 'err' as an argument is first in the funcxtion
  if (err) {
    //Log your error
    res.status(500).send("Something went wrong!");
  }
});

app.listen("4444", () => {
  console.log("Listening on port 3333!!!");
});
