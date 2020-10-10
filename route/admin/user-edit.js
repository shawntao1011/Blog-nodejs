const {User}=require('../../model/user');

module.exports=async (req,res)=>{

    //get id attr in url
    const {message,id}=req.query;

    //if id exist then it's edit operation else is new operation
    if (id){
        let user=await User.findOne({_id:id});
        res.render('admin/user-edit',{
            message:message,
            user:user,
            link:'/admin/user-modify?id='+id,
            button:'edit'
        });
    }else{
        res.render('admin/user-edit',{
            message:message,
            link:'/admin/user-edit',
            button:'add'
        });
    }


   
}