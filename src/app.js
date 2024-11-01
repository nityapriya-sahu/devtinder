const express = require("express");
const connectDB = require("./config/database"); //Import this file which is database
const app = express();
const User = require("./models/user"); //import the user schema

app.post("/signup", async (req, res) => {
  // Creating a new instance of the user model
  const user = new User({
    firstName: "Chintu",
    lastName: "Sahu",
    emailId: "chintu@gmail.com",
    password: "chintu@123",
    age: 26,
  });

  try {
    await user.save();
    res.send("User added successfully!");
  } catch (error) {
    res.status(400).send("getting error = " + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connect to Database successfully.");
    app.listen("6666", () => {
      console.log("Listening on port 6666");
    });
  })
  .catch((err) => {
    console.error("Database not connected !!");
  });

// The right way to call the server is first connect to database after that call the server
//SO for this export connectDB  and import it to app.js file
