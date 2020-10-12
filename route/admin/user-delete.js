const {User}=require('../../model/user');

module.exports=async (req,res)=>{
    //get the user id

    await User.findOneAndDelete({_id:req.query.id});

    res.redirect('/admin/user');
}