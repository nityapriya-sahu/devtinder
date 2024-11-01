const mongoose = require("mongoose");

//Whenever connect to db it's a async function which return a promise
//Always add DB name in last of the url
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sahunityapriya1998:nNkeHed84AOUITbQ@cluster0.y1s9o.mongodb.net/devtinder"
  );
};

module.exports = connectDB;
