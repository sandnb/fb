const express = require("express");

const router = express.Router();

const UserModal = require("../Models/userModel");

router.post('/signup',UserModal.signup);

router.all('/*',(req,res)=>{
    console.log(req.method,req.path);
    res.status(404);
    res.send("Invalid api endpoint")
})

module.exports = router;