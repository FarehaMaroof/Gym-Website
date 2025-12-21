import React,{useEffect,useState} from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import MemberCard from "../../Components/MemberCard/MemberCard";
import {getMonthlyJoined,threeDayExpire,fourToSevenDaysExpire,expired,inActive} from './Data'


const GeneralUser = () => {

const [header,setHeader]=useState("");
const [data,setData]=useState([]);



useEffect(()=>{
 const func=sessionStorage.getItem('func');
  functionCall(func)
},[])
const functionCall=async(func)=>{
  switch(func){
    case "monthlyJoined":
    setHeader("Monthly joined Members");
    var datas=await getMonthlyJoined();
    setData(datas.members);
    break;

     case "threeDaysExpired":
    setHeader("Expiring in 3 days");
     var datas=await threeDayExpire();
    setData(datas.members);
    break;

     case "fourToSevenDaysExpire":
    setHeader("Expiring in 4 to 7 days");
      var datas= await fourToSevenDaysExpire();
      setData(datas.members);
    break;

    case "expired":
        setHeader("Expired Members")
        var datas=await expired();
        setData(datas.members);
        break;

    case "inactiveMembers":
    setHeader("Members inactive");
    var datas=await inActive();
    setData(datas.members);
    break;

  }
}
  return (
    <div className="text-black p-5 w-3/4 flex-col">
      <div className="border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3">
        <Link
          to={"/dashboard"}
          className="border-2 pl-3 pr-3mpt-1 pb-1 rounded-2xl cursor-pointer  hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black"
        >
          <div className="flex justify-center items-center gap-2 p-2">
            <IoMdArrowRoundBack /> Back to dashboard
          </div>
        </Link>
      </div>
      <div className="mt-5 text-xl text-slate-900">
        {header}
      </div>
      <div className="bg-slate-100 p-5 mt-5 rounded-lg grid grid-cols-1 gap-2 md:grid-cols-3 overflow-x-auto h-[80%]">
       {
        data.map((item,index)=>{
          return(
            <MemberCard key={index} item={item}/>
          )
        })
       }
      </div>
    </div>
  );
};

export default GeneralUser;
