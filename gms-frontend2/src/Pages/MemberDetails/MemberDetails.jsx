import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Switch from "react-switch";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const MemberDetails = () => {
  const [status, setStatus] = useState("Pending");
  const navigate = useNavigate();
  const [renew, setRenew] = useState(false);
  const {id}=useParams();
  const [data,setData]=useState(null);
  const [membership,setMembership]=useState([]);
  const [planMember,setPlanMember]=useState("");
  const handleSwitchBtn = async() => {
    let statuss = status === "Active" ? "Pending" : "Active";
     await axios.post(`http://localhost:4000/members/change-status/${id}`,{status:statuss},{withCredentials:true}).then((response)=>{
      toast.success("Status Change");
     }).catch(err=>{
      console.log(err);
      toast.error("something went wrong")
     })
    setStatus(statuss);
   
  };

   useEffect(()=>{
     fetchData();
     fetchMembership();
  },[])

  const fetchMembership=async()=>{
    axios.get('http://localhost:4000/plans/get-membership',{withCredentials:true}).then((response)=>{
      setMembership(response.data.membership);
      setPlanMember(response.data.membership[0]._id);
    }).catch(err=>{
      console.log(err);
      toast.error("something went wrong");
    })
  }
 const fetchData=async()=>{
   await axios.get(`http://localhost:4000/members/get-member/${id}`,{withCredentials:true}).then((response)=>{
    console.log(response);
    setData(response.data.member);
    setStatus(response.data.member.status)
    toast.success(response.data.message)

   }).catch(err=>{
    console.log(err);
    toast.error("something went wrong");
   })
 }

 const isDateInPast=(inputDate)=>{
  if (!inputDate) return false;  // prevent invalid date
  const today=new Date();//get the current date
  const givenDate=new Date(inputDate);//convert the input to a date object

  return givenDate<today;//check if the given date is before today
 };


 const handleOnChangeSelect=(event)=>{
  let value=event.target.value;
  setPlanMember(value);

 }

 const handleRenewSaveBtn=async()=>{
   await axios.put(`http://localhost:4000/members/update-member-plan/${id}`,{membership:planMember},{withCredentials:true}).then((response)=>{
   setData(response.data.member);
   toast.success(response.data.message);
   }).catch(err=>{
    console.log(err);
    toast.error("something went wrong");
   })
 }

  return (
    <div className="w-3/4 text-black p-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-2 cursor-pointer border-2 w-fit text-xl font-sans text-white p-2 rounded-xl bg-slate-900"
      >
        <IoMdArrowRoundBack /> Go Back
      </div>
      <div className="mt-10 p-2 ">
        <div className="w-[100%] h-fit flex items-center">
          <div className="w-1/3 mx-auto">
            <img
              src={data?.profilePic}
              alt=""
            />
          </div>
          <div className="w-2/3 mt-5 text-xl p-5">
            <div className="mt-1 mb-2 text-3xl font-bold">Receipt</div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Name :{data?.name}
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Mobile: {data?.mobileNo}
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Address: {data?.address}
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Joined :{data?.createdAt.slice(0,10).split('-').reverse().join('-')}
            </div>
            <div className="mt-1 mb-2 text-2xl font-semibold">
              Next Bill :{data?.nextBillDate.slice(0,10).split('-').reverse().join('-')}
             
            </div>
            <div className=" mt-1 mb-2 text-2xl flex gap-4 font-bold">
              Status :
              <Switch
                onColor="#6366F1"
                checked={status === "Active"}
                onChange={() => {
                  handleSwitchBtn();
                }}
              />{" "}
            </div>
          {
            isDateInPast(data?.nextBillDate) && 
              <div
              onClick={() => {
                setRenew((prev) => !prev);
              }}
              className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center ${
                renew && status === "Active"
                  ? "bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black"
                  : null
              } w-full md:w-1/2 cursor-pointer hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black`}
            >
              Renew
            </div>

          }
            {renew && status === "Active" ? (
              <div className="rounded-lg p-3 mt-5 mb-5 h-fit bg-slate-50 md:w-[60%]">
                <div className="w-full">
                  <div className="my-5">
                    <div>Membership</div>
                    <select value={planMember} onChange={handleOnChangeSelect} className="w-full border-2 p-2 rounded-lg">
                      {
                        membership.map((item,index)=>{
                          return(
                           <option key={item._id} value={item._id}>{item.months} Months Membership</option>

                          )
                        })
                      }
                    </select>
                    <div onClick={()=>{handleRenewSaveBtn()}}
                      className={`mt-2 rounded-lg p-3 border-2  border-slate-900 text-center w-1/2 mx-auto cursor-pointer hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black `}
                    >
                      Save
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default MemberDetails;
