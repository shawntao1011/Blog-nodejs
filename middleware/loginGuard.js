const guard=(req,res,next)=>{
    //whether req is login page
    //if login then push 
    //else redirect to login
    if (req.url != '/login' && !req.session.username){
        res.redirect('/admin/login');
    }else{
        //allow to continue
        next();
    }
}

module.exports=guard;