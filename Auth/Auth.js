const Gym=require('../Modals/Gym');
const jwt=require('jsonwebtoken');
console.log("Auth middleware reached");
const auth=async(req,res,next)=>{
    try{
        const token=req.cookies.cookie_token;
        if(!token){
            return res.status(401).json({
                error:"no token ,authorization denied"
            });
        }
        const decode=jwt.verify(token,process.env.JWT_SecretKey)
         
         req.gym=await Gym.findById(decode.gym_id).select('-password');
        
         next();
    }
    catch(err){
       
       return res.status(401).json({
            error:'Token is not valid'
        })
    }
}
module.exports=auth