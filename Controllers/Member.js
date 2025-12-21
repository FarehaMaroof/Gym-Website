const { equal } = require('assert');
const Member=require('../Modals/Member')
const Membership=require('../Modals/Membership')

exports.getAllMember=async(req,res)=>{
   try{
    const {skip,limit}=req.query;
    const members=await Member.find({gym:req.gym._id});
    const totalMember=members.length;

    const limitedMembers=await Member.find({
        gym:req.gym._id
    }).sort({createdAt:-1}).skip(skip).limit(limit);
    res.status(200).json({
        message:members.length?"fetched members successfully ":"No other member registered yet",
        members:limitedMembers,
        totalMembers:totalMember
    })

   } catch(err){
    console.log(err);
    res.status(500).json({
        error:"Server error"
    })

   }
}


function addMonthsToDate(months,joiningDate){
    //Get Current year ,month and day
    let today=joiningDate;
    const currentYear=today.getFullYear();
    const currentMonth=today.getMonth();
    const currentDay=today.getDate();
  //Calculate the new month and year
  const futureMonth=currentMonth + months;
  const futureYear=currentYear + Math.floor(futureMonth / 12);

  //calculate the correct future month(module for month)
  const adjustedMonth=futureMonth%12;

  //set the date to the first of the future month
  const futureDate=new Date(futureYear,adjustedMonth,1);

  //Get the last day of future month
  const lastDayOfFutureMonth=new Date(futureYear,adjustedMonth + 1,0).getDate();

  //adjust the day if current day exceeds the number of days in new month
  const adjustedDay=Math.min(currentDay,lastDayOfFutureMonth);

  //set the fnal adjusted day
  futureDate.setDate(adjustedDay);

  return futureDate;
}







// exports.registerMember=async(req,res)=>{
//     try{
//         const {name,mobileNo,address,membership,profilePic,joiningDate}=req.body;
//         const member=await Member.findOne({gym:req.gym._id,mobileNo});
//         if(member){
//             return res.status(409).json({
//                 error:'Already registered with this Mobile no'
//             })
//         }

//        const memberShip = await Membership.findOne({
//     _id: membership,
//     gym: req.gym._id
// });
// const membershipMonth=memberShip.months;
// if(memberShip){
//    let jngDate=new Date(joiningDate);
//    const nextBillDate=addMonthsToDate(membershipMonth,jngDate);
//    let newmember=new Member({name,mobileNo,address,membership,gym:req.gym._id,profilePic,nextBillDate});
//    await newmember.save();
//    res.status(200).json({message:"Member Registered Successfully",newmember});

// }else{
//     return res.status(409).json({error:"No such Membership are there"})
// }
//  }catch(err){
//         console.log(err);
//     res.status(500).json({
//         error:"Server error"

//     });
// }

// };

exports.registerMember = async (req, res) => {
  try {
    const { name, mobileNo, address, membership, profilePic, joiningDate } = req.body;

    const memberShip = await Membership.findOne({ _id: membership, gym: req.gym._id });

    const months = memberShip.months;

    const jngDate = new Date(joiningDate);
    const nextBillDate = addMonthsToDate(months, jngDate);

    const newMember = new Member({
      name,
      mobileNo,
      address,
      membership,
      gym: req.gym._id,
      profilePic,
      joiningDate: jngDate,
      lastPayment: jngDate,      // FIX 2
      nextBillDate
    });

    await newMember.save();

    res.json({ message: "Member Registered Successfully", newmember: newMember });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};


exports.searchMember=async(req,res)=>{
    try{
        const {searchTerm}=req.query;
        const member=await Member.find({gym:req.gym._id,
            $or:[{name:{$regex:'^'+searchTerm,$options:'i'}},
                {mobileNo:{$regex:'^'+searchTerm,$options:'i'}}
            ]
        });
        console.log("Gym from token:", req.gym._id);
console.log("Search Term:", searchTerm);
        res.status(200).json({
            message:member.length?"fetched Members successfully":"no such members yet",
            members:member,
            totalMembers:member.length
        })

    }catch(err){
        console.log(err);
    res.status(500).json({ error: "Server error" });
    }
}


exports.monthlyMember=async(req,res)=>{
    try{
        const now=new Date();
        //get first day of the current month
        const startOfMonth=new Date(now.getFullYear(),now.getMonth(),1);
        //get last day of current month
        const endOfMonth=new Date(now.getFullYear(),now.getMonth()+1,0,23,59,59,909);
         const member=await Member.find({gym:req.gym._id,
            createdAt:{
                $gte:startOfMonth,//greater than or equal to the first day of the month
                $lte:endOfMonth //less than or equal to the last day of the month
            }
         }).sort({createdAt:-1})

         res.status(200).json({ 
            message: member.length?"Fetched Member successfully":"no such member registered",
            members:member,
            totalMembers:member.length
        });

    }catch(err){
         console.log(err);
    res.status(500).json({ error: "Server error" });
    

    }
}


exports.expiringWithin3Days=async(req,res)=>{
    try{
        const today=new Date();
        const nextThreeDays=new Date();
        nextThreeDays.setDate(today.getDate()+3);
        
        const member=await Member.find({gym:req.gym._id,
            nextBillDate:{
                $gte:today,// greater than or equal to today
                $lte:nextThreeDays //less than or equal to 3 days from today
            }
        });
        res.status(200).json({
            message: member.length?"Fetched Member successfully":"no such member is expiring within 3 days",
            members:member,
            totalMembers:member.length
        })

    }catch(err){
         console.log(err);
    res.status(500).json({ error: "Server error" });
    }
}

exports.expiringWithin4to7Days=async(req,res)=>{
    try{
        const today=new Date();
        const next4Days=new Date();
        next4Days.setDate(today.getDate()+4);
        
        const next7Days=new Date();
        next7Days.setDate(today.getDate()+7);
        const member= await Member.find({gym:req.gym._id,
            nextBillDate:{
                $gte:next4Days,// greater than or equal to 4days
                $lte:next7Days //less than or equal to 7 days from today
            }
        });
        res.status(200).json({
            message: member.length?"Fetched Member successfully":"no such member is expiring within 4-7 days",
            members:member,
            totalMembers:member.length
        })

    }catch(err){
         console.log(err);
    res.status(500).json({ error: "Server error" });
    }
}


exports.expiredMember=async(req,res)=>{
    try{
        const today=new Date();
        
        const member= await Member.find({gym:req.gym._id,status:"Active",
            nextBillDate:{
                $lt:today 
            }
        });
        res.status(200).json({
            message: member.length?"Fetched Member successfully":"no such memberhas been expired",
            members:member,
            totalMembers:member.length
        })

    }catch(err){
         console.log(err);
    res.status(500).json({ error: "Server error" });
    }
}

exports.inActiveMember=async(req,res)=>{
    try{
        
        
        const member= await Member.find({gym:req.gym._id,status:"Pending"
        });
        res.status(200).json({
            message: member.length?"Fetched Member successfully":"no such memberhas pending",
            members:member,
            totalMembers:member.length
        })

    }catch(err){
         console.log(err);
    res.status(500).json({ error: "Server error" });
    }
}

exports.getMemberDetails=async(req,res)=>{
    try{
       const {id}=req.params;
       const member=await Member.findOne({_id:id,gym:req.gym._id});
       if(!member){
        return res.status(400).json({
            error:"no such member",

        })
       }
       res.status(200).json({
        message:"Membeer data fetched",
        member:member
       })
    }
    catch(err){
 console.log(err);
    res.status(500).json({ error: "Server error" });
    }
}


exports.changeStatus=async(req,res)=>{
    try{
       const {id}=req.params;
        const {status}=req.body;
       const member=await Member.findOne({_id:id,gym:req.gym._id}); 
        if(!member){
        return res.status(400).json({
            error:"no such member",

        })
    }
    member.status= status;
    await member.save();
    res.status(200).json({
        message:"status changed",
       
       })

    }
    catch(err){
 console.log(err);
    res.status(500).json({ error: "Server error" });
    }

}




exports.updateMemberPlan = async (req, res) => {
    try {
        const { id } = req.params;              // Member ID
        const { membership } = req.body;        // Membership ID

        // 1. Validate membership
        const memberShip = await Membership.findOne({
            _id: membership,
            gym: req.gym._id
        });

        if (!memberShip) {
            return res.status(400).json({ error: "No such membership" });
        }

        // 2. Find the member
        const member = await Member.findOne({
            _id: id,
            gym: req.gym._id
        });

        if (!member) {
            return res.status(409).json({ error: "No such member" });
        }

        // 3. Calculate next bill date
        const today = new Date();
        const months = memberShip.months;
        const nextBillDate = addMonthsToDate(months, today);

        // 4. Update fields
        member.membership = membership;
        member.lastPayment = today;
        member.nextBillDate = nextBillDate;

        await member.save();

        res.status(200).json({
            message: "Member renewed successfully",
            member
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
};
