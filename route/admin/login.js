const {User}=require('../../model/user');
const bcrypt=require('bcryptjs');


module.exports=async (req,res)=>{
    //receive req arg
    const {email,password}=req.body;
    if (email.trim().length==0 || password.trim().length==0){
        return res.status(400).render('admin/error',{msg:"password or email wrong"});
        
    }

    let user=await User.findOne({email});

    if (user){

        let isValid=await bcrypt.compare(password,user.password);
        if (isValid){
            //login succeeded
            req.session.username=user.username;

            req.app.locals.userInfo=user;
            //redirect to user list 
            res.redirect('/admin/user');
        }else{
            res.status(400).render('admin/error',{msg:'password or email incorrect'});
        }
    }else{
        res.status(400).render('admin/error',{msg:'password or email incorrect'});
        
    }
}
