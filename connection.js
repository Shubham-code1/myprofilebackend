const mongoose = require("mongoose") ;

const Local_str = process.env.LOCAL_STRING;
const Remote_str = process.env.REMOTE_STRING;


module.exports = mongoose.connect(Local_str,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Database connection established");
})
.catch((err)=>{
    console.log(err);
});




