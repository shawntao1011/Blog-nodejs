
const {Article}=require('../../model/article');

const {Comment}=require('../../model/comment');

module.exports=async(req,res)=>{

    const id=req.query.id;

    let article= await Article.findOne({_id:id});

    let comments=await Comment.find({aid:id});

    res.render('home/article.art',{
        article:article,
        comments:comments
    });
}