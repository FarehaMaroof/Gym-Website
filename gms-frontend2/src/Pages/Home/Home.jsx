// import SignUp from "../../Components/Signup/SignUp";
// import Login from '../../Components/Login/Login'
// import logo from '../../assets/logo1.png'

// function Home() {
//   return (
//     <>
   
      


//     <div className="relative z-0">   {/* IMPORTANT FIX */}

//       {/* Header */}
//       <div className="border-2 border-slate-800 bg-black text-white p-5 font-semibold text-xl flex justify-center gap-3">
//         <img src={logo} alt="" className='w-20 h-20 rounded-full'/>
//         <p>UPLIFT GYM</p> 
//       </div>
  
//       {/* Background + Login/Signup */}
//       <div className='w-full flex justify-center h-[100vh] bg-cover bg-[url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170")]'>
//         <div className="w-full flex gap-18">
//           <Login/>
//           <SignUp/>
//         </div>
//       </div>
//       </div>
     
   
      
// </>
    
//   )
// }

// export default Home;


import SignUp from "../../Components/Signup/SignUp";
import Login from '../../Components/Login/Login';
import logo from '../../assets/logo1.png';

function Home() {
  return (
    <>
      <div className="relative z-0">

        {/* Header */}
        <div className="border-2 border-slate-800 bg-black text-white p-4 md:p-5 font-semibold text-xl flex justify-center items-center gap-3">
          <img src={logo} alt="" className='w-14 h-14 md:w-20 md:h-20 rounded-full'/>
          <p>UPLIFT GYM</p> 
        </div>

        {/* Background + Login/Signup */}
        <div className='w-full flex justify-center min-h-[100vh] bg-cover bg-center
            bg-[url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1170")]'>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 p-5">
            <Login />
            <SignUp />
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
