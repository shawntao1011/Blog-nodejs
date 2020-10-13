const {Article}=require('../../model/article');

module.exports=async (req,res)=>{
    req.app.locals.currentlink='article';

    let articles=await Article.find({});

    //res.send(articles);

    res.render('admin/article',{
        articles:articles
    });
}