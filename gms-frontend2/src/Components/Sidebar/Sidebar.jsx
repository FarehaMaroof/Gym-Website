// import React from 'react'
// import { CiHome } from "react-icons/ci";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { MdLogout } from "react-icons/md";
// import { useState,useEffect } from 'react';
// import {Link,useLocation,useNavigate} from 'react-router-dom';


// const Sidebar = () => {

//   const [greeting, setGreeting] = useState("");
//   const location=useLocation();//get current location
//   const navigate=useNavigate();

//   const greetingMeaasge = () => {
//     const currentHour = new Date().getHours();

//     if (currentHour < 12) {
//       setGreeting("Good Morning");
//     } 
//     else if (currentHour < 18) {
//       setGreeting("Good Afternoon");
//     } 
//     else if (currentHour < 21) {
//       setGreeting("Good Evening");
//     } 
//     else {
//       setGreeting("Good Night");
//     }
//   }
//   useEffect(()=>{
//     greetingMeaasge();
//   },[])

//  const handleLogout=async()=>{
//    localStorage.clear();
//    navigate('/');
//  }

//   return (
//     <div className='w-1/4 h-[100vh] bg-black text-white p-5 font-extralight'>
//       <div className='text-center font-semibold text-3xl'>
//         {localStorage.getItem('gymName')}
//       </div>
//       <div className=' flex gap-8 my-6  '>
//             <div className='w-1/3 rounded-lg'>
//               <img className=' w-full h-full rounded-full object-cover ' alt="gym pic" src= {localStorage.getItem('gymPic')}/>
//             </div>
//         <div>
//             <div className='text-2xl  font-semibold '>{greeting}</div>
//              <div className='text-l mt-1 '>Admin</div>
//         </div>
//       </div>
//       <div className='mt-10 py-10 border-t-amber-50 border-t '>
//         <Link to='/dashboard' className={`rounded-xl flex gap-2 items-center font-semibold text-xl bg-slate-500 p-3 cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black ${location.pathname==='/dashboard'?'border-2 bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black':null}`}>
//             <div><CiHome /></div>
//          <div>Dashboard</div>
//         </Link>
//     <Link 
//   to="/member"
//   className={`rounded-xl mt-5 flex gap-2 items-center font-semibold text-xl bg-slate-500 p-3 cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black ${location.pathname==='/member' ? 'border-2 bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black' : ''}`}
// >
//   <div><FaPeopleGroup /></div>
//   <div>Members</div>
// </Link>



//         <div onClick={()=>{handleLogout()}} className='rounded-xl mt-5 flex gap-2 items-center font-semibold text-xl bg-slate-500 p-3 cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black'>
//             <div><MdLogout /></div>
//          <div>Logout</div>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Sidebar

import React, { useState, useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [greeting, setGreeting] = useState("");
  const [isOpen, setIsOpen] = useState(false); // mobile toggle
  const location = useLocation();
  const navigate = useNavigate();

  // Greeting message
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) setGreeting("Good Morning");
    else if (currentHour < 18) setGreeting("Good Afternoon");
    else if (currentHour < 21) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden flex justify-between items-center bg-black text-white p-3">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="text-white text-2xl"
        >
          ☰
        </button>
        <div className="font-semibold text-xl">{localStorage.getItem('gymName')}</div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`bg-black text-white h-screen p-5 font-extralight
        fixed top-0 left-0 z-50 transform transition-transform
        md:static md:translate-x-0 w-64 md:w-1/4
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
      }>
        {/* Gym Name */}
        <div className="text-center font-semibold text-3xl mb-4">
          {localStorage.getItem('gymName')}
        </div>

        {/* Profile */}
        <div className="flex gap-4 items-center mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2">
            <img
              src={localStorage.getItem('gymPic')}
              alt="gym"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-lg md:text-2xl font-semibold">{greeting}</div>
            <div className="text-sm md:text-base">Admin</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 space-y-3">
          <Link
            to='/dashboard'
            className={`rounded-xl flex gap-2 items-center font-semibold text-lg md:text-xl p-3 cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black ${
              location.pathname === '/dashboard' ? 'border-2 bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black' : 'bg-slate-500'
            }`}
          >
            <CiHome />
            Dashboard
          </Link>

          <Link
            to='/member'
            className={`rounded-xl flex gap-2 items-center font-semibold text-lg md:text-xl p-3 cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black ${
              location.pathname === '/member' ? 'border-2 bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black' : 'bg-slate-500'
            }`}
          >
            <FaPeopleGroup />
            Members
          </Link>

          <div
            onClick={handleLogout}
            className='rounded-xl flex gap-2 items-center font-semibold text-lg md:text-xl p-3 cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black bg-slate-500'
          >
            <MdLogout />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
