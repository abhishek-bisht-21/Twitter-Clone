const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const session = require('express-session');

// For Mongoose
mongoose
  .connect("mongodb://localhost:27017/twitter-clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

  // Middlewares For ViewEngine and Public Folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,'/public')));

// Express_Session
app.use(session({ 		//Usuage
  secret: 'weneedabettersecret',
  resave: false,
  saveUninitialized: true,
  
}));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
