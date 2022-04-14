const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {name:{type:String,uppercase:true,required:true},
    email:{type:String,lowercase:true},
    password:{type:String, required:true},
    cratedDate:{type:Date, default:Date.now()}

    }

)

module.exports=User=mongoose.model("user",userSchema)