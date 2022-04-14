const express=require('express')
const router=express.Router()




const {registerRules,loginRules,validation}=require('../middleware/authValidator')
const isAuth=require('../middleware/passport')
const controllers =require('../controllers/user')
//cust register  
router.post("/register",controllers.register)

//login 
router.post('/signin',controllers.login)

//current
{/*router.get('/current',isAuth(),controllers.current)
*/}
// router.get('/current',isAuth(),(req,res)=>{
//     res.send({user:req.user})
//    })


module.exports=router