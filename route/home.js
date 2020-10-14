const express=require('express');

const home=express.Router();


// blog index
home.get('/', require('./home/index'));

// blog view 
home.get('/article', require('./home/article'));

// blog comment
home.post('/comment', require('./home/comment'));

module.exports=home;