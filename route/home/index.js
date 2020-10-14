const {Article}=require('../../model/article');

const pager=require('mongoose-sex-page');
module.exports=async(req,res)=>{
    const page=req.query.page;
    
    let result=await pager(Article).page(page).size(4).display(3).find().populate('User').exec();

    res.render('home/default.art',{
        result:result
    });
}