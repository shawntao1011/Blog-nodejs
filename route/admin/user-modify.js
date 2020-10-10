const {User}=require('../../model/user');
const bcrypt=require('bcryptjs');

module.exports=async (req,res,next)=>{

    const {username,email,role,status,password}=req.body;

    const id=req.query.id;

    let user=await User.findOne({_id:id});

    let isValid=await bcrypt.compare(req.body.password,user.password);

    if (isValid){
        await User.updateOne({_id:id},{
            username:username,
            email:email,
            role:role,
            status:status
        });
        
        //redirect after update
        res.redirect('/admin/user');
    }else{
        let obj={path:'/admin/user-edit',message:'fail to change password since enter is wrong',id:id};
    
        next(JSON.stringify(obj));
    }
}