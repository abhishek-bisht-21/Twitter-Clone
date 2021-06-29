const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require('passport')

// To get the signup form
router.use("/register", (req, res) => {
  res.render("auth/signup");
});


// Registering the user
router.post("/register", async (req, res) => {
  const user = {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
  };

//   Inbuilt function in passport-local-mongoose
// Automatically registers the user for us, on basis of username and pass
  const newUser = await User.register(user, req.body.password);

  res.status(200).send(newUser);
  

});


// To get the login Page
router.get('/login', (req,res) =>{
	res.render('auth/login');
});


// Login the user

router.post('/login', passport.authenticate('local',
    {
        failureRedirect: '/login',
    }), (req, res) => {
        res.render('home');
});
    

// Logout

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})


module.exports = router;
