//  import React from "react";
//  import {useState} from "react";
//  import './signUp.css';
//  import Model from "../Model/Model"
// import ForgotPassword from "../ForgotPassword/ForgotPassword";
// import axios from "axios"; 
// import { ToastContainer,toast } from "react-toastify";
// const SignUp = () => {

//    const [forgotPassword,setForgotPassword]=useState(false);
//    const [inputField,setInputField]=useState({gymName:"",email:"",userName:"",password:"",profilePic:"https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"})
//    const handleClose = ()=>{
//      setForgotPassword(prev=>!prev);
//    }
//    const handleOnChange=(event,name)=>{
//     setInputField({...inputField,[name]:event.target.value}) 

//    }

//    const uploadImage=async(event)=>{
//       const files=event.target.files;
//       const data=new FormData();
//       data.append('file',files[0]);
//       // dhcprz3q3
//       data.append('upload_preset','gym-management');
//       try{
//         const response=await axios.post("https://api.cloudinary.com/v1_1/dhcprz3q3/image/upload",data);
//         console.log(response);
//         const imageUrl=response.data.url;
//         setInputField({...inputField,['profilePic']:imageUrl})
//       }catch(err){
//         console.log(err)
//       }
//    }

//    const handleRegister=async()=>{
//      await axios.post('http://localhost:4000/auth/register',inputField).then((resp)=>{
//      const successMsg=resp.data.message
//     toast.success(successMsg)
//     }).catch(err=>{
//            const errorMessage=err.response.data.error
//            // console.log(errorMessage)
//            toast.error(errorMessage)
//          })
//    }


//    return (
//        <>
//        <div className="z-999 absolute">
//          {forgotPassword && <Model header="Forgot Password" handleClose={handleClose} content={<ForgotPassword/>}/>}
//        </div>
       
//        <div className="customSignup w-1/3 p-10 m-20 ml-20  bg-neutral-500/70 h-[450px] overflow-y-auto">
//          <div className="font-sans text-white text-center text-3xl">
//            Register your Gym
//          </div>
//          <input
//          value={inputField.email}
//          onChange={(event)=>{handleOnChange(event,"email")}}
//            type="text"
//            className="w-full my-10 p-2 rounded-lg bg-white"
//            placeholder="Enter Email"
//          />
//          <input
//          value={inputField.gymName}
//          onChange={(event)=>{handleOnChange(event,"gymName")}}
//            type="text"
//            className="w-full mb-10 p-2 rounded-lg bg-white"
//            placeholder="Enter Gym Name"
//          />
//          <input
//          value={inputField.userName}
//          onChange={(event)=>{handleOnChange(event,"userName")}}
//            type="text"
//            className="w-full mb-10 p-2 rounded-lg bg-white"
//            placeholder="Enter User Name"
//          />
//          <input
//          value={inputField.password}
//          onChange={(event)=>{handleOnChange(event,"password")}}
//            type="password"
//            className="w-full mb-10 p-2 rounded-lg bg-white"
//            placeholder="Enter Password"
//          />
//          <input type="file" 
//          onChange={(e)=>{uploadImage(e)}}
//          className="w-full mb-10 p-2 rounded-lg bg-white" />

//          <img
//            src={inputField.profilePic}
//            alt=""
//            className="mb-10 h-[150px] w-[150px]"
//          />

//          <div className="p-2 w-[80%] border-2 bg-black rounded-lg mx-auto text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer mb-5" onClick={()=>handleRegister()}>
//            Register
//          </div>
//          <div className="p-2 w-[80%] border-2 bg-black rounded-lg mx-auto text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer" onClick={()=>handleClose()}>
//            Forgot Password
//          </div>

//          <ToastContainer/>
       
      
     
//        </div>

         
     
     
//        </>
    
//    );
//  };

//  export default SignUp;




import React, { useState } from "react";
import './signUp.css';
import Model from "../Model/Model";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API = import.meta.env.VITE_API_URL;
const SignUp = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [inputField, setInputField] = useState({
    gymName: "",
    email: "",
    userName: "",
    password: "",
    profilePic: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=1200&auto=format&fit=crop&q=60"
  });

  const handleClose = () => {
    setForgotPassword(prev => !prev);
  };

  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'gym-management');

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/dhcprz3q3/image/upload", data);
      const imageUrl = response.data.url;
      setInputField({ ...inputField, ['profilePic']: imageUrl });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async () => {
    await axios.post(`${API}/auth/register`, inputField)
      .then((resp) => {
        toast.success(resp.data.message);
      })
      .catch(err => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <div className="z-[999] absolute">
        {forgotPassword && (
          <Model
            header="Forgot Password"
            handleClose={handleClose}
            content={<ForgotPassword />}
          />
        )}
      </div>

      <div className="customSignup w-full md:w-1/3 p-6 md:p-10 mt-10 md:mt-20 bg-neutral-500/70 rounded-xl h-fit overflow-y-auto">

        <div className="font-sans text-white text-center text-2xl md:text-3xl mb-5">
          Register your Gym
        </div>

        <input
          value={inputField.email}
          onChange={(event) => handleOnChange(event, "email")}
          type="text"
          className="w-full my-4 p-2 rounded-lg bg-white"
          placeholder="Enter Email"
        />

        <input
          value={inputField.gymName}
          onChange={(event) => handleOnChange(event, "gymName")}
          type="text"
          className="w-full mb-4 p-2 rounded-lg bg-white"
          placeholder="Enter Gym Name"
        />

        <input
          value={inputField.userName}
          onChange={(event) => handleOnChange(event, "userName")}
          type="text"
          className="w-full mb-4 p-2 rounded-lg bg-white"
          placeholder="Enter User Name"
        />

        <input
          value={inputField.password}
          onChange={(event) => handleOnChange(event, "password")}
          type="password"
          className="w-full mb-4 p-2 rounded-lg bg-white"
          placeholder="Enter Password"
        />

        <input
          type="file"
          onChange={uploadImage}
          className="w-full mb-4 p-2 rounded-lg bg-white"
        />

        <img
          src={inputField.profilePic}
          alt=""
          className="mb-4 h-[120px] w-[120px] md:h-[150px] md:w-[150px] rounded-lg object-cover"
        />

        <div
          className="p-2 w-[80%] border-2 bg-black rounded-lg mx-auto text-white text-center text-lg 
                     hover:bg-white hover:text-black font-semibold cursor-pointer mb-4"
          onClick={handleRegister}
        >
          Register
        </div>

        <div
          className="p-2 w-[80%] border-2 bg-black rounded-lg mx-auto text-white text-center text-lg 
                     hover:bg-white hover:text-black font-semibold cursor-pointer"
          onClick={handleClose}
        >
          Forgot Password
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default SignUp;
