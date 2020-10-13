const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Tao:sun961011@cluster0.jbolp.mongodb.net/blog_atlas?retryWrites=true&w=majority',{
     useUnifiedTopology: true, useNewUrlParser: true} )
    .then(()=>console.log('Database connected'))
    .catch(()=>console.log('failed to connect database'))
    