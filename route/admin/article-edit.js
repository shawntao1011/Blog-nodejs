const {Article}=require('../../model/article');

module.exports=async (req,res)=>{
    req.app.locals.currentlink='article';

    const {id}=req.query;

    let article=await Article.findOne({_id:id});

    res.render('admin/article-edit',{
        article:article
    });
}