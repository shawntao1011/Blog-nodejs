const {Article}=require('../../model/article');


module.exports=async (req,res,next)=>{

    const {cover,title,author,publishDate,content}=req.body;
    
    const id=req.query.id;
    await Article.updateOne({_id:id},{
        cover:cover,
        title:title,
        author:author,
        publishDate:publishDate,
        content:content
    });
        
        //redirect after update
    res.redirect('/admin/article');
}