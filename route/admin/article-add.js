const formidable=require('formidable');

const path=require('path');

const {Article}=require('../../model/article');

module.exports=(req,res)=>{
    //create formidable object
    const form=new formidable.IncomingForm();

    //upload to which route
    form.uploadDir=path.join(__dirname,'../','../','public','uploads');

    //save the file type
    form.keepExtensions=true;
    //resolve the table
    form.parse(req,async(err,fields,files)=>{
        //err error object
        //fields normal attr
        //files binary data
        //res.send(files);
        
        await Article.create({
            title:fields.title,
            author:fields.author,
            publishDate:fields.publishDate,
            cover:files.cover.path.split('public')[1],
            content:fields.content
        });

        res.redirect('/admin/article');
    });

}