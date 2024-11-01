<!-- EP - 03 -->
<!--
- Create a Repository
- Initialize the repository                                         = npm init
- node-modules, package.json, package-lock.json
- Install Express                                                   = npm i express
- create a server                                                   = in app.js file
- Listen to port 7000                                               = -do-
- Write request handlers for /dashboard, /test                      = -do-
- Install nodemon and update scripts inside package.json            = "start": "node src/app.js", "dev": "nodemon src/app.js"
- What are dependencies
- What is the use of "-g" while npm install                         = npm i -g nodemon
- Difference between caret and tilde (^ vs ~)
-->

<!-- EP - 04 -->
<!--
- initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, / , hello/2, /xyz
- Order of the routes matter a lot

- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on Postman

//app1.js
- Explore routing and use of ?, + , (), * in the routes
- Use of regex in routes /a/ , /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes
-->

<!-- EP - 05 -->
<!--
- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3], rH4, rh5);


- What is a Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error Handling using app.use("/", (err, req, res, next) = {});
-->

<!-- EP - 06 -->
<!--
- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 6666


- Create a userSchema & user Model


- Create POST /signup API to add data to database
- Push some documents using API calls from postman
- Error Handling using try , catch
 -->
