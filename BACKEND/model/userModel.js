const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true,"NAME IS REQUIRED"],
        trim:true,
        maxlength:[25,"NAME MUST BE 25 CHARACTER LONG"]
    },
    email:{
        type:String,
        required:[true,"EMAIL REQUIRED"],
        unique:true
    }
})

module.exports= mongoose.model("User",userSchema)