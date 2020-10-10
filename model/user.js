const bcrypt=require('bcryptjs');

const mongoose=require('mongoose');

const Joi=require('joi');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        unique:true   
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        requied:true
    },
    status:{
        type:Number,
        default:0
    }
})

const User=mongoose.model('User',userSchema);

async function createUser(){
    const salt=await bcrypt.genSalt(10);
    const pass=await bcrypt.hash('123456',salt);

    await User.create({
        username:'tao',
        email:'tsun33@fordham.edu',
        password:pass,
        role:'admin',
        state:0
    })
}

//createUser();

const validate_user= user=>{
    const schema=Joi.object({
        username:Joi.string().min(2).max(12).required(),
        email:Joi.string().email().required(),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        role:Joi.string().valid('normal','admin').required(),
        status:Joi.number().valid(0,1).required()

    });

    return schema.validate(user);
}

module.exports={
    User,
    validate_user
}