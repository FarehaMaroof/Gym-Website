const express=require("express");
const router=express.Router();
const MembershipController=require('../Controllers/Membership')
const auth=require('../Auth/Auth');


router.post('/add-membership',auth,MembershipController.addMembership)
router.get('/get-membership',auth,MembershipController.getMembership)

module.exports=router;