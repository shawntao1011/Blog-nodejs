const bcrypt =require('bcryptjs');




async function run(){
    // the number is compexity
    const salt =await bcrypt.genSalt(10);
    console.log(salt);
}

run();