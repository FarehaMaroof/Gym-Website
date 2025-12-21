const express=require("express");
const router=express.Router();
const MemberController=require('../Controllers/Member')
const auth=require('../Auth/Auth')

router.get('/all-member',auth,MemberController.getAllMember);
router.post('/register-member',auth,MemberController.registerMember)
router.get('/searched-members',auth,MemberController.searchMember)
router.get('/within-3-days-expiring',auth,MemberController.expiringWithin3Days);
router.get('/within-4-7-expiring',auth,MemberController.expiringWithin4to7Days);
router.get('/expired-members',auth,MemberController.expiredMember);
router.get('/inactive-members',auth,MemberController.inActiveMember);


router.get('/get-member/:id',auth,MemberController.getMemberDetails)
router.post('/change-status/:id',auth,MemberController.changeStatus)
router.put('/update-member-plan/:id',auth,MemberController.updateMemberPlan)

module.exports=router;