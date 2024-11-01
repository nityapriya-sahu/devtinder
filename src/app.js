const express = require("express");
const connectDB = require("./config/database"); //Import this file which is database
const app = express();
const User = require("./models/user"); //import the user schema

app.use(express.json()); //==> this line is very important, it's a Middleware provide by Express, which read the json data when call an API, and send it to req.body

//POST API for signup
app.post("/signup", async (req, res) => {
  console.log(req.body);

  // Creating a new instance of the user model
  //   const user = new User({
  //     firstName: "Chintu",
  //     lastName: "Sahu",
  //     emailId: "chintu@gmail.com",
  //     password: "chintu@123",
  //     age: 26,
  //   });
  //   try {
  //     await user.save();
  //     res.send("User added successfully!");
  //   } catch (error) {
  //     res.status(400).send("getting error = " + error.message);
  //   }

  //=============================================
  //Lets create dynamic API to receivce data from end user

  const user = new User(req.body); //that simple

  //then handle error
  try {
    await user.save();
    res.send("User added successfully!");
  } catch (err) {
    res.status(400).send("getting error = " + err.message);
  }
});

//Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  //Using Find()
  //   try {
  //     const users = await User.find({ emailId: userEmail });

  //     if (users.length === 0) {
  //       res.status(404).send("Users not Found!");
  //     } else {
  //       res.send(users);
  //     }
  //   } catch (err) {
  //     res.status(400).send("Something went wrong!");
  //   }
  //--------------------------------------------

  //Using FindOne()
  try {
    const user = await User.findOne({ emailId: req.body.emailId });
    if (!user) {
      res.status(404).send("User Not found!");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

//Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({}); //If empty filter then it gets all the documents from the collection & send to you.
    res.send(users);
  } catch (error) {
    res.status(400).send("Something wemt Wrong!");
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
