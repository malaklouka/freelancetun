const mongoose=require('mongoose')


const offreSchema= new mongoose.Schema({
  
 
    offrename:{
        type:String,
    },
    image:{
      type: Array,
        },
    description:{
        type:String,
    },
    adresse:{
      type:String,
    },
  

    price:{
        type:Number,
    },
    
    expirationDate:{
       type: String,

    },
    from:{
      type:String
    },
    payment:{
      type:String
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
 
    createDate:{
        type:String,
        default:Date.now()
    },


})

module.exports=Offre=mongoose.model("offre",offreSchema)