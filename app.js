const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');

mongoose.connect("mongodb://localhost:27017/twitter-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex:true
})
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));


app.get("/", (req, res) => {
  res.render("home");
});



app.listen(3000, () => {
  console.log("Server running at port 3000");
});
