// import React,{useState,useEffect,useRef} from 'react'
// import Sidebar from '../../Components/Sidebar/Sidebar'
// import { dividerClasses } from '@mui/material'
// import { IoMdMenu } from "react-icons/io";
// import { MdPeopleAlt } from "react-icons/md";
// import { FaClockRotateLeft } from "react-icons/fa6";
// import { FcExpired } from "react-icons/fc";
// import { RiPassExpiredLine } from "react-icons/ri";
// import { MdOutlineCalendarMonth } from "react-icons/md";
// import { FaUserClock } from "react-icons/fa";
// import { Link } from 'react-router-dom';


// const Dashboard = () => {
//   const [accordianDashboard,setAccordianDashboard]=useState(false);
//   const ref=useRef();

// useEffect(() => {
//   const checkIfClickedOutside = (e) => {
//     // If accordion is open AND click is outside ref box → close it
//     if (accordianDashboard && ref.current && !ref.current.contains(e.target)) {
//       setAccordianDashboard(false);
//     }
//   };

//   document.addEventListener("mousedown", checkIfClickedOutside);

//   return () => {
//     document.removeEventListener("mousedown", checkIfClickedOutside);
//   };
// }, [accordianDashboard]);

// const handleOnClickMenu=(value)=>{
//   sessionStorage.setItem('func',value);
// }


//   return (
// <div className='w-3/4 bg-slate-500 p-5 relative text-white'>
//    <div className='w-full bg-black text-white rounded-lg flex p-3 justify-between items-center'>
//    <IoMdMenu onClick={()=>{setAccordianDashboard(prev=>!prev)}} />
//       <img className="w-8 h-8 rounded-3xl border-2" src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
//    </div>
//    {/* //popup */}

//   {
//     accordianDashboard &&  <div ref={ref} className='absolute z-20 p-3 bg-slate-900 text-white rounded-xl text-lg '>
//     <div>Hi! welcome to our Gym management system</div>
//     <p>Feel Free to ask queries</p>

//    </div>
//   }

//    <div className='mt-5 pt-3 bg-slate-500 opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>
     
//      {/* //this is card block */}
//       <Link to={'/member'} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
//        <div className='h-3  rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800'></div>
//         <div className='py-7 px-5 flex-col just w-full text-center rounded-b-lg hover:bg-black hover:text-white text-black text-3xl'>
//           <MdPeopleAlt />
//         <p className='text-xl my-3 font-semibold font-mono'>Joined Members</p>
//       </div>
//       </Link>

//        <Link to={'/specific/monthly'} onClick={()=>handleOnClickMenu("monthlyJoined")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
//        <div className='h-3  rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800'></div>
//         <div className='py-7 px-5 flex-col just w-full text-center rounded-b-lg hover:bg-black hover:text-white text-black text-3xl'>
//           <MdOutlineCalendarMonth />
//         <p className='text-xl my-3 font-semibold font-mono'>Monthly joined Members</p>
//       </div>
//       </Link>

//        <Link to={'/specific/expire-with-in-3-days'
//        } onClick={()=>handleOnClickMenu("threeDaysExpired")}  className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
//        <div className='h-3  rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800'></div>
//         <div className='py-7 px-5 flex-col just w-full text-center rounded-b-lg hover:bg-black hover:text-white text-black text-3xl'>
//           <FaUserClock />
//         <p className='text-xl my-3 font-semibold font-mono'>Expiring within 3 days</p>
//       </div>
//       </Link>

//        <Link to={'/specific/expire-with-in-4-7-days'} onClick={()=>handleOnClickMenu("fourToSevenDaysExpire")}  className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
//        <div className='h-3  rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800'></div>
//         <div className='py-7 px-5 flex-col just w-full text-center rounded-b-lg hover:bg-black hover:text-white text-black text-3xl'>
//           <FaClockRotateLeft />
//         <p className='text-xl my-3 font-semibold font-mono'>Expiring in 4-7 days</p>
//       </div>
//       </Link>

//        <Link to={'/specific/expired'}
//        onClick={()=>handleOnClickMenu("expired")}  className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
//        <div className='h-3  rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800'></div>
//         <div className='py-7 px-5 flex-col just w-full text-center rounded-b-lg hover:bg-black hover:text-white text-black text-3xl'>
//           <FcExpired />
//         <p className='text-xl my-3 font-semibold font-mono'>Expired</p>
//       </div>
//       </Link>

//        <Link to={'/specific/inactive-members'} 
//        onClick={()=>handleOnClickMenu("inactiveMembers")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
//        <div className='h-3  rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800'></div>
//         <div className='py-7 px-5 flex-col just w-full text-center rounded-b-lg hover:bg-black hover:text-white text-black text-3xl'>
//         <RiPassExpiredLine />
//         <p className='text-xl my-3 font-semibold font-mono'>Inactive Members</p>
//       </div>
//       </Link>

//    </div>
//    {/* <div className='md:bottom-4 w-3/4  mb-4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl text-xl'>
//    &copy;Fareha
//    </div> */}
// </div>    
 
//   )
// }

// export default Dashboard


import React,{useState,useEffect,useRef} from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { RiPassExpiredLine } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (accordianDashboard && ref.current && !ref.current.contains(e.target)) {
        setAccordianDashboard(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [accordianDashboard]);

  const handleOnClickMenu = (value) => {
    sessionStorage.setItem("func", value);
  };

  return (
    <div className="w-full md:w-3/4 bg-slate-500 p-4 md:p-5 relative text-white">

      {/* ------------------- TOP BAR ---------------------- */}
      <div className="w-full bg-black text-white rounded-lg flex p-3 justify-between items-center">
        <IoMdMenu
          className="text-3xl cursor-pointer"
          onClick={() => setAccordianDashboard((prev) => !prev)}
        />
        <img
          className="w-8 h-8 rounded-full border-2"
          src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1200&auto=format&fit=crop&q=60"
          alt=""
        />
      </div>

      {/* ------------------- POPUP ---------------------- */}
      {accordianDashboard && (
        <div
          ref={ref}
          className="absolute top-16 left-4 right-4 md:left-10 md:w-1/3 p-4 bg-slate-900 text-white rounded-xl text-lg z-20 shadow-lg"
        >
          <div>Hi! Welcome to our Gym management system</div>
          <p>Feel Free to ask queries</p>
        </div>
      )}

      {/* ------------------- GRID ITEMS ---------------------- */}
      <div className="mt-5 pt-3 bg-slate-500/70 grid gap-5 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        w-full pb-5 h-[80%] overflow-y-auto">

        {/* CARD COMPONENTS */}
        <Link
          to={"/member"}
          className="w-full border-2 bg-white rounded-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900"></div>
          <div className="py-7 px-5 flex flex-col items-center text-black hover:bg-black hover:text-white transition text-3xl">
            <MdPeopleAlt />
            <p className="text-xl mt-3 font-semibold font-mono">Joined Members</p>
          </div>
        </Link>

        <Link
          to={"/specific/monthly"}
          onClick={() => handleOnClickMenu("monthlyJoined")}
          className="w-full border-2 bg-white rounded-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900"></div>
          <div className="py-7 px-5 flex flex-col items-center text-black hover:bg-black hover:text-white transition text-3xl">
            <MdOutlineCalendarMonth />
            <p className="text-xl mt-3 font-semibold font-mono">Monthly Joined Members</p>
          </div>
        </Link>

        <Link
          to={"/specific/expire-with-in-3-days"}
          onClick={() => handleOnClickMenu("threeDaysExpired")}
          className="w-full border-2 bg-white rounded-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900"></div>
          <div className="py-7 px-5 flex flex-col items-center text-black hover:bg-black hover:text-white transition text-3xl">
            <FaUserClock />
            <p className="text-xl mt-3 font-semibold font-mono">Expiring within 3 days</p>
          </div>
        </Link>

        <Link
          to={"/specific/expire-with-in-4-7-days"}
          onClick={() => handleOnClickMenu("fourToSevenDaysExpire")}
          className="w-full border-2 bg-white rounded-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900"></div>
          <div className="py-7 px-5 flex flex-col items-center text-black hover:bg-black hover:text-white transition text-3xl">
            <FaClockRotateLeft />
            <p className="text-xl mt-3 font-semibold font-mono">Expiring in 4–7 days</p>
          </div>
        </Link>

        <Link
          to={"/specific/expired"}
          onClick={() => handleOnClickMenu("expired")}
          className="w-full border-2 bg-white rounded-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900"></div>
          <div className="py-7 px-5 flex flex-col items-center text-black hover:bg-black hover:text-white transition text-3xl">
            <FcExpired />
            <p className="text-xl mt-3 font-semibold font-mono">Expired</p>
          </div>
        </Link>

        <Link
          to={"/specific/inactive-members"}
          onClick={() => handleOnClickMenu("inactiveMembers")}
          className="w-full border-2 bg-white rounded-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-slate-100 to-purple-900"></div>
          <div className="py-7 px-5 flex flex-col items-center text-black hover:bg-black hover:text-white transition text-3xl">
            <RiPassExpiredLine />
            <p className="text-xl mt-3 font-semibold font-mono">Inactive Members</p>
          </div>
        </Link>

      </div>

    </div>
  );
};

export default Dashboard;
