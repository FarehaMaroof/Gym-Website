import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";


const ForgotPassword = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
 const [otpValidate,setOtpValidate]=useState(false)
 const [contentVal,setContentVal]=useState("enter email")
 const [inputField,setInputField]=useState({email:"",otp:"",newPassword:""});
 const handleSubmit = () => {
    if (!emailSubmit) {
      
      sendOtp();

    }else if(emailSubmit && !otpValidate){
        
        verifyOtp();
    }else{
      changePassword()
    }
  };

  const changePassword = async () => {
  await axios
    .post("http://localhost:4000/auth/reset-password", {
      email: inputField.email,
      newPassword: inputField.newPassword,
    })
    .then((response) => {
      toast.success(response.data.message);
    })
    .catch((err) => {
      toast.error("some technical issue while sending email");
      console.log(err);
    });
};   




  const verifyOtp=async()=>{
    await axios.post("http://localhost:4000/auth/reset-password/checkOtp",{email:inputField.email,otp:inputField.otp}).then((response)=>{
      setOtpValidate(true)
              setContentVal("Submit your new Password")
              toast.success(response.data.message);

    }).catch(err=>{
      toast.error("some technical issue while sending email");

      console.log(err);
        })
  }



  const sendOtp=async()=>{
    await axios.post('http://localhost:4000/auth/reset-password/sendOtp',{email:inputField.email}).then((response)=>{
      setEmailSubmit(true)
      setContentVal("submit your Otp");
      toast.success(response.data.message);
      

    }).catch(err=>{
      toast.error("som technical issue while sending email");

      console.log(err);
    })
  }

  const handleOnChange=(event,name)=>{
      setInputField({...inputField,[name]:event.target.value})
  }

  return (
    <div className="w-full">
      <div className="w-full mb-5">
        <div>Submit your Email</div>
        <input
        value={inputField.email}
         onChange={(event)=>{handleOnChange(event,"email")}}
          type="text"
          className="w-1/2 p-2 rounded-lg bg-white border-2 border-slate-400"
          placeholder="submit Email"
        />
      </div>

      {
      emailSubmit && (
        <div className="w-full mb-5">
          <div>Enter your OTP</div>
          <input
            value={inputField.otp}
              onChange={(event)=>{handleOnChange(event,"otp")}}
            type="text"
            className="w-1/2 p-2 rounded-lg bg-white border-2 border-slate-400"
            placeholder="Enter OTP"
          />
        </div>
      )}

      {
      otpValidate && (
        <div className="w-full mb-5">
          <div>Enter your new Password</div>
          <input
            value={inputField.newPassword}
            onChange={(event)=>{handleOnChange(event,"newPassword")}}
            type="password"
            className="w-1/2 p-2 rounded-lg bg-white border-2 border-slate-400"
            placeholder="Enter new Password"
          />
        </div>
      )}
      <div
        className="bg-black border-2 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold cursor-pointer hover:bg-white hover:text-black"
        onClick={() => handleSubmit()}
      >
        {contentVal}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ForgotPassword;
