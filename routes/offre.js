const express=require('express')
const offreRouter=express.Router()
const Offre =require('../models/offre')

//get all 
offreRouter.get('/',async(req,res)=>{
try {
 
    const offres= await Offre.find()
    res.send({offres,msg:"all the offres "})
} catch (error) {
    console.log(error)
    res.status(401).send({msg:"error while getting all offres"})
}
})
offreRouter.delete('/:id',async(req,res)=>{
  const { id } = req.params
    try {
        const result = await Bag.findByIdAndRemove(id)
        result.deletedCount ? 
        res.send({  msg:'successfully deleted'}) :  res.send({  msg:'bag  is already deleted :) '})
    } catch (error) {
        res.status(400).send('sorry ,bag is not  deleted :(')
    }
})


//get offr by id
offreRouter.get('/:id',async(req,res)=>{
  try {
    
    const { id } = req.params
    const oneOffre= await Offre.findById(id)
      res.send({oneOffre,msg:"OFRRE successfully "})
  } catch (error) {
      console.log(error)
      res.status(401).send({msg:"error while getting one offre"})
  }
  })
//add new offr
offreRouter.post('/offres',async(req,res)=>{
const offre=req.body

 const {offrename,description,adresse,price,
expirationDate,image,payment,from}=req.body
 
  const newOffre = new Offre({ offrename,description,adresse,price,
    expirationDate,image,payment,from
  })

  try {
        
        await newOffre.save()
        res.status(201).send({ message: 'New offre Created', offre: newOffre })
      
    } catch (error) {
      console.log(error)
        res.status(401).send({msg:"cant post offre"})

    }
})

  //update bag
  offreRouter.put("/:id", async(req,res)=>{

    try {
      const updatedoffre= await Offre.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      console.log(updatedoffre);
      if (updatedoffre.modifiedCount) {
        return res.send({ msg: "offre updated with success :) ",updatedoffre });
      }
      res.status(400).send({ msg: "oops! theres no modification.." });
    } catch (error) {
      res.status(400).send({ msg: "sorry we cannot modify this offre " });
    }  
  })






module.exports=offreRouter
  