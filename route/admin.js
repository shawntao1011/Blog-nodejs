const express=require('express');

const admin=express.Router();

//import the database constuct info
const {User}=require('../model/user');

const bcrypt=require('bcryptjs');


// second router
admin.get('/login',require('./admin/loginPage'));

//login function
admin.post('/login', require('./admin/login'));

//admin/user
admin.get('/user',require('./admin/userPage'));

//admin/logout
admin.get('/logout',require('./admin/logout'));

//admin/user-edit
admin.get('/user-edit',require('./admin/user-edit'));

admin.post('/user-edit',require('./admin/user-edit-fn'));

admin.post('/user-modify',require('./admin/user-modify'));

//delete user route
admin.get('/delete',require('./admin/user-delete'));

//blog doc rout
//doc list route
admin.get('/article',require('./admin/article'));

//doc edit route
admin.get('/article-edit',require('./admin/article-edit'));

//article add route
admin.post('/article-add',require('./admin/article-add'));

//realize logout
admin.post('/logout',require('./admin/logout'));

module.exports=admin;