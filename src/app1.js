const express = require("express");

const app = express();

//Advance thing about Routing handlers

//Here 'b' is optional, in route /ac or /abc will work same
// app.get("/ab?c", (req, res) => {
//   res.send({
//     fname: "Chintesh",
//     lname: "Sahu",
//   });
// });

//Here a & c always should be in first and last , then we write between them it will work(e.g-> abbbbbbbbbbbbbbbbbbc)
app.get("/ab+c", (req, res) => {
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

//Here ab & cd always should be in first and last , then whatever we write between them it will work(e.g-> abCHINTUcd)
app.get("/ab*cd", (req, res) => {
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

//We can group it also, here bc is optional(e.g-> /abcd will work, but /acd will not work)
app.get("/a(bc)?d", (req, res) => {
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

//REGEX
//If in path any 'a' is there then route will work(e.g-> /a will work, but /cd will not work, /car will work)
app.get(/a/, (req, res) => {
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

//It means in path if 'fly' is there in last then it will work (e.g-> /fly will work, /butterfly will work, /butterflyies will not work)
app.get(/.*fly$/, (req, res) => {
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

//To read the id or query from url
app.get("/user", (req, res) => {
  //We can get it through req
  console.log(req.query); //call an api (e.g-> http://localhost:7777/user?userid=101) output will show on terminal ({ userid: '101' })
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

// If api url like (http://localhost:7777/user/707), then we can get this id using(/:userId)
//':' means it's a dynamic route, we can add multiple like thi(/user/:userId/:name/:password)
app.get("/user/:userId", (req, res) => {
  //We can get it through req.params
  console.log(req.params); //call an api (e.g-> http://localhost:7777/user/707) output will show on terminal ({ userid: '707' })
  res.send({
    fname: "Chintesh",
    lname: "Sahu",
  });
});

app.listen("7777", () => {
  console.log("Listening on port 7777!!");
});
