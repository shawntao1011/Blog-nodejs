const Joi=require('joi');

const {User,validate_user}=require('../../model/user');

const bcrypt=require('bcryptjs');

module.exports= async (req,res,next)=>{
   
    
    try{
        await validate_user(req.body);
    }catch(e){
        //res.redirect(`/admin/user-edit?message=${e.message}`);
        //redirect to the edit page
        //res.redirect(`/admin/user-edit?message=${e.message}`);
        
        //json.stringfy
        
        return next(JSON.stringify({path:'/admin/user-edit',message:e.message}))
    }

    // check the user is exist or not
    let user=await User.findOne({email:req.body.email});
    if (user){
        return next(JSON.stringify({path:'/admin/user-edit',message:'email address occupied'}))
    }
    
    //gen slat

    const salt=await bcrypt.genSalt(10);

    const password=await bcrypt.hash(req.body.password,salt);

    req.body.password=password;

    //res.send(req.body);

    //add user info to database
    await User.create(req.body);

    res.redirect('/admin/user');
}

