const {User}=require('../../model/user');

module.exports=async (req,res)=>{

    req.app.locals.currentlink='user';

    //current page
    let page=req.query.page || 1;

    //calculate the total page
    const pagesize=10;

    // find total data num
    let count =await User.countDocuments({});

    //total page
    let total =Math.ceil(count/pagesize);
    
    let start=(page-1)*pagesize;

    //get user data from database
    let users=await User.find({}).limit(pagesize).skip(start);

    //res.send(users);
    res.render('admin/user',{
        users:users,
        page:page,
        total:total
    });
};