const express = require('express');
const router = express.Router();


router.get('/register',(req,res)=>{
	res.render('auth/signup');
});









module.exports = router;