const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/blog',{
     useUnifiedTopology: true, useNewUrlParser: true} )
    .then(()=>console.log('Database connected'))
    .catch(()=>console.log('failed to connect database'))
    