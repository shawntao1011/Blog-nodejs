const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        maxlength:20,
        minlength:4,
        required:[true,'title is required'],
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'author is required']
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    cover:{
        type:String,
        default:null
    },
    content:
    {
        type:String
    }
});

const Article=mongoose.model('Article');

module.exports={
    Article:Article
}