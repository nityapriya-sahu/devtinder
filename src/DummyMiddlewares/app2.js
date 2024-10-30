const express = require("express");

const app = express();

// (1)
// app.get("/admin/getAllData", (req, res) => {
//   //Logic of checking if the request is authorized
//   const token = "xyzvfvf";
//   const isAdminAuthorized = token === "xyz";
//   if (isAdminAuthorized) {
//     res.send("All Data Sent!");
//   } else {
//     res.status(401).send("Unauthorized Request!");
//   }
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted User!");
// });

//===================================================

// (2) - OR

//Handle Auth Middleware  for all GET, POST, ..... requests
//This Middleware only call for /admin

// app.use("/admin", (req, res, next) => {
//   console.log("Admin auth is getting checked!!");
//   const token = "xyzaa";
//   const isAdminAuthorized = token === "xyz";

//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized Request!");
//   } else {
//     next();
//   }
// });

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data Sent!");
// });

// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted User!");
// });

//===================================================

// (3) - OR
// The best way to handle Middleware is to add middleware in separate file(auth.js) add call it on app.js (always prefer)

const { adminAuth, userAuth } = require("./auth"); //Call this 'adminAuth' from auth.js file

//Handle Auth Middleware  for all GET, POST, ..... requests
app.use("/admin", adminAuth); //To call the adminAuth always use "use" keyword      //1st way

//The "userAuth" is for the 2nd way to call that middleware
//2nd way
app.get("/user", userAuth, (req, res) => {
  res.send("User data sent!");
});

//---

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted User!");
});

app.listen("3333", () => {
  console.log("Listening on port 3333!!!");
});
