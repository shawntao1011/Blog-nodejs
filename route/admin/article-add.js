const formidable=require('formidable');

const path=require('path');

module.exports=(req,res)=>{
    //create formidable object
    const form=new formidable.IncomingForm();

    //upload to which route
    form.uploadDir=path.join(__dirname,'../','../','public','uploads');

    //save the file type
    form.keepExtensions=true;
    //resolve the table
    form.parse(req,(err,fields,files)=>{
        //err error object
        //fields normal attr
        //files binary data
        res.send(files);
        
    });

}