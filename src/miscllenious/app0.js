const express = require("express");

const app = express();

//Chapter -03

// for incoming request
// app.use("/dashboard", (req, res) => {
//   res.send("This is Dashboard page!");
// });
// //This will match all the http method API calls to /test
// app.use("/test", (req, res) => {
//   res.send("This is Test page!");
// });
// app.use("/", (req, res) => {
//   res.send("Hello from ther server!");
// });

// ===========================================================

// Chapter - 04

// if i add app.use in top then every method or api call will go only through it, never got chance get, post, put, delete
// app.use("/user", (req, res) => res.send("HAHAHAHAHAHA!!"));

//This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Nitya", lastName: "Sahu" });
});

app.post("/user", (req, res) => {
  //Saving data to DB
  res.send("Data successfully saved to Database!");
});

app.delete("/user", (req, res) => {
  res.send("Delete DAta!");
});

//This will match all the http method API calls to /test
app.use("/test", (req, res) => {
  res.send("This is Test page!");
});

app.listen("7000", () => console.log("Listening on port 7000... "));
