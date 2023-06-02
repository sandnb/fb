const express = require("express");

const router = express.Router();

const UserModel = require("../Models/userModel");

router.post('/signup',UserModel.signup);

router.post('/login',UserModel.login);


router.all('/*',(req,res)=>{
    console.log(req.method,req.path);
    res.status(404);
    res.send("Invalid api endpoint")
})

module.exports = router;