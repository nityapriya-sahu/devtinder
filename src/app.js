const express = require("express");
const connectDB = require("./config/database"); //Import this file which is database
const app = express();
const User = require("./models/user"); //import the user schema

app.use(express.json()); //==> this line is very important, it's a Middleware provide by Express, which read the json data when call an API, and send it to req.body

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
