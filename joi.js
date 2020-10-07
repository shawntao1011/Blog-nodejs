const Joi=require('joi');

const schema=Joi.object({
    username:Joi.string().min(2).max(5)

});

async function run(){
    try{
        await schema.validate({username:'ab'});
    }catch(e){
        console.log(e);
        return;
    }
    console.log('validate pass');

}

run();