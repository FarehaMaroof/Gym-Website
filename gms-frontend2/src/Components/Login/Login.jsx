// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {toast,ToastContainer} from 'react-toastify';



// const Login = () => {
//   const [loginField,setLoginField]=useState({"userName":"","password":""});
//   const navigate=useNavigate();
//   const handleLogin=async()=>{
//     // sessionStorage.setItem("isLogin",true);
//     // navigate('/dashboard')
//     await axios.post('http://localhost:4000/auth/login',loginField,{withCredentials:true}).then((response)=>{
//       // console.log(resp);
//       localStorage.setItem('gymName',response.data.gym.gymName);
//       localStorage.setItem('gymPic',response.data.gym.profilePic);
//       localStorage.setItem('isLogin',true);
//       localStorage.setItem('token',response.data.token);
//      navigate('/dashboard')
//     }).catch(err=>{
//       const errorMessage=err.response.data.error
//       // console.log(errorMessage)
//       toast.error(errorMessage)
//     })
//   }

//   const handleOnChange=(event,name)=>{
//     setLoginField({...loginField,[name]:event.target.value});
//   }

//   return (
//     <div className="w-1/3 p-10 m-20 ml-20  bg-neutral-500/70 h-fit">
//              <div className="font-sans text-white text-center text-3xl">Login</div>
              
//               <input value={loginField.userName} onChange={(event)=>{handleOnChange(event,"userName")}} type="text" className='w-full my-10 p-2 rounded-lg bg-white' placeholder='Enter User Name'/>
              
//               <input value={loginField.password} onChange={(event)=>{handleOnChange(event,"password")}}  type="password" className='w-full mb-10 p-2 rounded-lg bg-white' placeholder='Enter Password'/>
             
//              <div className="p-2 w-[80%] border-2 bg-black rounded-lg mx-auto text-white text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer" onClick={handleLogin}>Login</div>
//         <ToastContainer/>
//          </div>
//   )
// }

// export default Login




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [loginField, setLoginField] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    await axios.post('http://localhost:4000/auth/login', loginField, { withCredentials: true })
      .then((response) => {
        localStorage.setItem('gymName', response.data.gym.gymName);
        localStorage.setItem('gymPic', response.data.gym.profilePic);
        localStorage.setItem('isLogin', true);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch(err => {
        toast.error(err.response.data.error);
      });
  };

  const handleOnChange = (event, name) => {
    setLoginField({ ...loginField, [name]: event.target.value });
  };

  return (
    <div className="w-full md:w-1/3 p-6 md:p-10 mt-10 md:mt-20 bg-neutral-500/70 rounded-xl h-fit">
      <div className="font-sans text-white text-center text-2xl md:text-3xl mb-5">Login</div>

      <input
        value={loginField.userName}
        onChange={(event) => handleOnChange(event, "userName")}
        type="text"
        className="w-full my-4 p-2 rounded-lg bg-white"
        placeholder="Enter User Name"
      />

      <input
        value={loginField.password}
        onChange={(event) => handleOnChange(event, "password")}
        type="password"
        className="w-full mb-4 p-2 rounded-lg bg-white"
        placeholder="Enter Password"
      />

      <div
        className="p-2 w-[80%] border-2 bg-black rounded-lg mx-auto text-white text-center text-lg 
                   hover:bg-white hover:text-black font-semibold cursor-pointer"
        onClick={handleLogin}
      >
        Login
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
