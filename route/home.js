const express=require('express');

const home=express.Router();

// second router
home.get('/',(req,res)=>{
    res.send('welcome to home');
});

module.exports=home;