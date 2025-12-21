import React,{useState,useEffect} from "react";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'



const AddMembers = () => {
  const [inputField,setInputField]=useState({name:"",mobileNo:"",address:"",membership:"",profilePic:"https://img.icons8.com/m_rounded/1200/person-male.jpg",joiningDate:""})
  const [selectedOption,setSelectedOption]=useState("");
  const handleOnChange=(event,name)=>{
   setInputField({...inputField,[name]:event.target.value})
  }
  const [membershipList,setMembershipList]=useState([]);

     const uploadImage=async(event)=>{
      const files=event.target.files;
      const data=new FormData();
      data.append('file',files[0]);
      // dhcprz3q3
      data.append('upload_preset','gym-management');
      try{
        const response=await axios.post("https://api.cloudinary.com/v1_1/dhcprz3q3/image/upload",data);
        console.log(response);
        const imageUrl=response.data.url;
        setInputField({...inputField,['profilePic']:imageUrl})
      }catch(err){
        console.log(err)
      }
   }

   const fetchMembership=async()=>{
     await axios.get('http://localhost:4000/plans/get-membership',{withCredentials:true}).then((response)=>{
    setMembershipList(response.data.membership)
    if(response.data.membership.length===0){
      return toast.error("no any membership added yet",{
        className:'text-lg'
      })
    }else{
     let a=response.data.membership[0]._id;
     setSelectedOption(a);
     setInputField({...inputField,membership:a});
    }
    

   
  }).catch(err=>{
      console.log(err);
      toast.error("something went wrong");
     })
   }

  useEffect(()=>{
    console.log(inputField)
    fetchMembership()

  },[])
  const handleOnChangeSelect=(event)=>{
    let value=event.target.value;
    setSelectedOption(value);
    setInputField({...inputField,membership:value});
  }

  const handleRegisterButton=async()=>{
    await axios.post('http://localhost:4000/members/register-member',inputField,{withCredentials:true}).then((res)=>{
      toast.success("Added Successfully");
     setTimeout(()=>{
     window.location.reload();
     },2000)
    }).catch(err=>{
        console.log(err);toast.error("something went wrong");
      })
  }

  return (
    <div className="text-black">
      <div className="grid gap-5 grid-cols-2 text-lg">
        <input
          type="text"
          value={inputField.name}
          onChange={(event)=>{handleOnChange(event,"name")}}
          placeholder="Name of the joinee"
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <input
          type="text"
          value={inputField.mobileNo}
          onChange={(event)=>{handleOnChange(event,"mobileNo")}}
          placeholder="Mobile no"
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <input
          type="text"
                    value={inputField.address}
                    onChange={(event)=>{handleOnChange(event,"address")}}
          placeholder="Enter Addresse"
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <input
                  value={inputField.joiningDate}
                  onChange={(event)=>{handleOnChange(event,"joiningDate")}}
          type="date"
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <select value={selectedOption} onChange={handleOnChangeSelect} className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12 placeholder:text-gray-300">
          {
            membershipList.map((item,index)=>{
              return(
                <option key={index} value={item._id}>{item.months}Months Membership</option>
              )
            })
          }
        </select>
        <input type="file" 
        onChange={(e)=>{uploadImage(e)}} className="bg-gray-400" />
        <div className="w-1/4">
          <img
            src={inputField.profilePic}
            className="w-full h-full rounded-full "
          />
        </div>

        <div className="p-3 border-2 w-28 text-lg h-14 text-center bg-slate-900 text-white rounded-xl cursor-pointer hover: bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black "
        onClick={()=>handleRegisterButton()}>
         Register
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddMembers;
