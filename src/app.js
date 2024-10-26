const express = require("express");

const app = express();

// for incoming request
//Here in namaste dev use 'use' keyword instead of get but when i use it is not showing proper response
app.get("/", (req, res) => {
  res.send("Hello from ther server!");
});

app.get("/dashboard", (req, res) => {
  res.send("This is Dashboard page!");
});
app.get("/test", (req, res) => {
  res.send("This is Test page!");
});

app.listen("7000", () => console.log("Listening on port 7000... "));
