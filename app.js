
// import the express framework
const express=require('express');
const path=require('path');


//import body-parser
const bodyparser=require('body-parser');

const session=require('express-session');

//create server
const app=express();


//import database js
require('./model/connect');

//handle post
app.use(bodyparser.urlencoded({extended:false}));

app.use(session({
    'secret':'my-key',
    saveUninitialized:false,
    cookie:{
        maxAge:24*60*60*1000
    }
}));


//set express module location
app.set('views',path.join(__dirname,'views'));
//set file stype
app.set('view engine','art');

//set render enginee
app.engine('art',require('express-art-template'));

// static resouce
app.use(express.static(path.join(__dirname,'public')));


//import router
const home=require('./route/home');
const admin=require('./route/admin');


//login block
app.use('/admin',require('./middleware/loginGuard'));


//match router
app.use('/home',home);
app.use('/admin',admin);


//error handler
app.use((error,req,res,next)=>{
    const result=JSON.parse(error);

    let params=[];
    for (let attr in result){
        if (attr!='path'){
            params.push(attr+ '='+result[attr]);
        }
    }

    res.redirect(`${result.path}?${params.join('&')}`);
})

//listen port
app.listen(3000);

console.log('server statrted please visit localhost:3000');
