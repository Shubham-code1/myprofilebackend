const mongoose = require("mongoose") ;

const Local_str = process.env.LOCAL_STRING;
const Remote_str = process.env.REMOTE_STRING;


module.exports = mongoose.connect(Remote_str)
.then(()=>{
    console.log("Database connection established");
})
.catch((err)=>{
    console.log(err);
});




