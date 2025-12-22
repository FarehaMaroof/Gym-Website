import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {toast,ToastContainer} from 'react-toastify'

const AddMembership = ({handleClose}) => {
  const [inputField,setInputField]=useState({months:"",price:""})
  const[membership,setMembership]=useState([])
  const handleOnChange =(event,name)=>{
    setInputField({...inputField,[name]:event.target.value})
  }
const API = import.meta.env.VITE_API_URL;
const fetchMembership=async()=>{
  await axios.get(`${API}/plans/get-membership`,{withCredentials:true}).then((res)=>{
     setMembership(res.data.membership)
     toast.success(res.data.membership.length+"Membership fetched")
  }).catch(err=>{
    console.log(err);
    toast.error('something went wrong')
  })
}

  useEffect(()=>{
    fetchMembership()
  },[])

  const handleAddmembership=async()=>{
    //  await axios.post('http://localhost:4000/plans/add-membership'
    await axios.post(`${API}/plans/add-membership`,inputField,{withCredentials:true}).then((res)=>{
      toast.success(res.data.message);
       handleClose();
    }).catch(err=>{
    console.log(err);
    toast.error('something went wrong')
  })
  }

  return (
    <div className=' text-black'>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
      
    {
  membership.map((item, index) => (
    <div
     
      className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black'
    >
      <div>{item.months}Months Membership</div>
       <div>Rs {item.price}</div>
    </div>
  ))
}

      </div>
      <hr className='mt-10 mb-10'/>
      <div className='mb-10 flex items-center gap-10 '>
        <input type="number"
        value={inputField.months} 
          onChange={(event)=>handleOnChange(event,"months")}className='border rounded-lg text-lg w-1/3 h-1/2' placeholder='Add no of months'/>
        <input type="number"
        value={inputField.price} 
        onChange={(event)=>handleOnChange(event,"price")}
        className='border rounded-lg text-lg w-1/3 h-1/2' placeholder='Add price'/>
        <div onClick={()=>{handleAddmembership()}} className='text-lg border-2 p-1 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black'>
        Add +
        </div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default AddMembership
