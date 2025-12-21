// import React, { useState,useEffect } from "react";
// import { CgGym } from "react-icons/cg";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { IoArrowBackOutline } from "react-icons/io5";
// import { FaSearch } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa";

// import MemberCard from "../../Components/MemberCard/MemberCard";
// import Model from "../../Components/Model/Model";
// import AddMembership from "../../Components/AddMembership/AddMembership";
// import AddMembers from "../../Components/AddMembers/AddMembers";
// import axios from "axios";
// import { ToastContainer,toast } from "react-toastify";


// const Member = () => {
//   const [addMembeship, setAddMembership] = useState(false);
//   const [addMember,setAddMember]=useState(false);
//   const [currentPage,setCurrentPage]=useState(1);

//   const [startFrom,setStartFrom]=useState(0);
//   const [endTo,setEndTo]=useState(9);
//   const[totalData,setTotalData]=useState(0);
//   const [limit,setLimit]=useState(9)
//   const [noOfPage,setNoOfPage]=useState(0);
//  const [data,setData]=useState([])
//  const [skip,setSkip]=useState(0)
//  const [search,setSearch]=useState("");
//  const [isSearchModeOn,setIsSearchModeOn]=useState(false)
//  useEffect(()=>{
//    fetchData(0,9);
//   },[])

//   const fetchData=async(skip,limits)=>{
//     await axios.get(`http://localhost:4000/members/all-member?skip=${skip}&limit=${limits}`,{withCredentials:true}).then((response)=>{
//       console.log(response);
//       let totalData=response.data.totalMembers;
//     setTotalData(totalData);
//     setData(response.data.members)

//     let extraPage=totalData%limit===0?0:1;
//     let totalPage=parseInt(totalData/limit)+extraPage;
//     setNoOfPage(totalPage);

//     if(totalData===0){
//       setStartFrom(-1);
//       setEndTo(0);
//     }else if(totalData<10){
//        setStartFrom(0);
//       setEndTo(totalData);

//     }

//     }).catch(err=>{
//       toast.error("some tech fault ")
//       console.log(err)
//     })
    
    
//   }





//   const handleMembership = () => {
//     setAddMembership((prev) => !prev);
//   };
 
//   const handleMembers=()=>{
//     setAddMember((prev)=>!prev);
//   }
//  const handlePrev=()=>{
//   if(currentPage!==1){
//     let currPage=currentPage-1;
//     setCurrentPage(currPage);
//     var from =(currPage-1)*9;
//     var to=(currPage*9);
//     setStartFrom(from)
//     setEndTo(to);
//       let skipValue=skip-9;
//     setSkip(skipValue);
//     fetchData(skipValue,9)

//   }
//  }

//  const handleNext=()=>{
//    if(currentPage!==noOfPage){
//     let currPage=currentPage+1;
//     setCurrentPage(currPage);
//      var from =(currPage-1)*9;
//     var to=(currPage*9);
//     if(to>totalData){
//       to =totalData;
//     }
//     setStartFrom(from)
//     setEndTo(to);
//     let skipValue=skip+9;
//     setSkip(skipValue);
//     fetchData(skipValue,9)
//    }
//  }


//  const handleSearchData=async()=>{
//    if(search!==""){
//     setIsSearchModeOn(true);
//     await axios.get(`http://localhost:4000/members/searched-members?searchTerm=${search}`,{withCredentials:true}).then((response)=>{
//      setData(response.data.members)
//      setTotalData(response.data.totalMembers)
//     }).catch(err=>{
//       toast.error("some tech fault ")
//       console.log(err)
//     })
//    }else{
//     if(isSearchModeOn){
//       window.location.reload();
//     }else{
//       toast.error("pls enter any value")
//     }
//    }
//  }
//   return (
//     <div className="h-[100vh] text-black bg-slate-500 p-5 w-3/4">
//       <div className="border-2 items-center bg-slate-900 flex justify-between w-full text-white rounded-lg p-3">
//         <div  onClick={()=>handleMembers()} className="flex items-center gap-2 border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black">
//           Add Memeber <CgGym />
//         </div>

//         <div
//           onClick={() => handleMembership()}
//           className="flex items-center gap-2 border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black"
//         >
//           Membership <FaPlus />
//         </div>
//       </div>
//       {/* 
//       block for back to dashboard */}

//       <Link className="flex items-center gap-2" to={"/dashboard"}>
//         <IoArrowBackOutline />
//         Back to Dashboard Page
//       </Link>

//       <div className="mt-5 w-1/2 flex gap-2">
//         <input
//         value={search}
//         onChange={(e)=>{setSearch(e.target.value)}}
//           type="text"
//           className="border-2 w-full rounded-lg p-2 bg-gray-300 "
//           placeholder="search by Name or Mobile no"
//         />
//         <div onClick={()=>{handleSearchData()}} className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-black">
//           <FaSearch />
//         </div>
//       </div>

//       <div className="mt-5 text-xl flex justify-between text-slate-900">
//         <div>Total Members{totalData}</div>
//         {
//           isSearchModeOn?<div className="flex gap-5">
//           <div>{startFrom+1}-{endTo} of {totalData} Members</div>
//           <div
//             className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 ${currentPage==1?'bg-gray-200 text-gray-400':null}`} onClick={()=>{handlePrev()}}
//           ><FaAngleLeft />
         
        
            
//           </div>
          
//           <div
//             className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 ${currentPage==noOfPage?'bg-gray-200 text-gray-400':null} `}
//           onClick={()=>{handleNext()}}>
//             <FaAngleRight />
//           </div>
//         </div>:null
// }
//       </div>

//       <div className="bg-slate-100 p-5 mt-5 rounded-lg grid grid-cols-3 gap-2 overflow-x-auto h-[65%]">
//         {/* div for member card */}

//           {
//             data.map((item,index)=>{
//               return(
            
//                <MemberCard key={item._id || index} item={item}/>
//               )
//             })
//           }
        
//       </div>
//       {addMembeship && <Model
//         header="Add Membership"
//         handleClose={handleMembership}
//         content={<AddMembership handleClose={handleMembership} />}
//       /> }

//       {
//         addMember && <Model header={"Add Member"} handleClose={handleMembers} content={<AddMembers/>}/>
//       }

//       <ToastContainer/>
//     </div>
//   );
// };

// export default Member;
import React, { useState, useEffect } from "react";
import { CgGym } from "react-icons/cg";
import { FaPlus, FaSearch, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import MemberCard from "../../Components/MemberCard/MemberCard";
import Model from "../../Components/Model/Model";
import AddMembership from "../../Components/AddMembership/AddMembership";
import AddMembers from "../../Components/AddMembers/AddMembers";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Member = () => {
  const [addMembership, setAddMembership] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startFrom, setStartFrom] = useState(0);
  const [endTo, setEndTo] = useState(9);
  const [totalData, setTotalData] = useState(0);
  const [limit, setLimit] = useState(9);
  const [noOfPage, setNoOfPage] = useState(0);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [isSearchModeOn, setIsSearchModeOn] = useState(false);

  useEffect(() => {
    fetchData(0, 9);
  }, []);

  const fetchData = async (skip, limits) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/members/all-member?skip=${skip}&limit=${limits}`,
        { withCredentials: true }
      );

      let totalMembers = response.data.totalMembers;
      setTotalData(totalMembers);
      setData(response.data.members);

      let extraPage = totalMembers % limit === 0 ? 0 : 1;
      let totalPage = parseInt(totalMembers / limit) + extraPage;
      setNoOfPage(totalPage);

      if (totalMembers === 0) {
        setStartFrom(-1);
        setEndTo(0);
      } else if (totalMembers < 10) {
        setStartFrom(0);
        setEndTo(totalMembers);
      }
    } catch (err) {
      toast.error("Some technical fault!");
      console.log(err);
    }
  };

  const handleMembership = () => {
    setAddMembership((prev) => !prev);
  };

  const handleMembers = () => {
    setAddMember((prev) => !prev);
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      let currPage = currentPage - 1;
      setCurrentPage(currPage);
      let from = (currPage - 1) * limit;
      let to = currPage * limit;
      setStartFrom(from);
      setEndTo(to);
      let skipValue = skip - limit;
      setSkip(skipValue);
      fetchData(skipValue, limit);
    }
  };

  const handleNext = () => {
    if (currentPage !== noOfPage) {
      let currPage = currentPage + 1;
      setCurrentPage(currPage);
      let from = (currPage - 1) * limit;
      let to = currPage * limit;
      if (to > totalData) to = totalData;
      setStartFrom(from);
      setEndTo(to);
      let skipValue = skip + limit;
      setSkip(skipValue);
      fetchData(skipValue, limit);
    }
  };

  const handleSearchData = async () => {
    if (search !== "") {
      setIsSearchModeOn(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/members/searched-members?searchTerm=${search}`,
          { withCredentials: true }
        );
        setData(response.data.members);
        setTotalData(response.data.totalMembers);
      } catch (err) {
        toast.error("Some technical fault!");
        console.log(err);
      }
    } else {
      if (isSearchModeOn) window.location.reload();
      else toast.error("Please enter any value");
    }
  };

  return (
    <div className="h-full min-h-screen text-black bg-slate-500 p-4 md:p-5 w-full md:w-3/4 mx-auto">
      {/* Header Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 bg-slate-900 p-3 rounded-lg text-white">
        <div
          onClick={handleMembers}
          className="flex items-center gap-2 border-2 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black"
        >
          Add Member <CgGym />
        </div>

        <div
          onClick={handleMembership}
          className="flex items-center gap-2 border-2 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black"
        >
          Membership <FaPlus />
        </div>
      </div>

      {/* Back Link */}
      <Link className="flex items-center gap-2 mt-3 text-white" to={"/dashboard"}>
        <IoArrowBackOutline />
        Back to Dashboard Page
      </Link>

      {/* Search */}
      <div className="mt-5 flex flex-col sm:flex-row gap-2 w-full md:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border-2 w-full rounded-lg p-2 bg-gray-300"
          placeholder="Search by Name or Mobile no"
        />
        <div
          onClick={handleSearchData}
          className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800 hover:text-black flex items-center justify-center"
        >
          <FaSearch />
        </div>
      </div>

      {/* Pagination Info */}
      <div className="mt-5 flex flex-col sm:flex-row justify-between items-center text-xl text-slate-900 gap-2">
        <div>Total Members: {totalData}</div>
        {isSearchModeOn && (
          <div className="flex gap-3 items-center">
            <div>
              {startFrom + 1}-{endTo} of {totalData} Members
            </div>
            <div
              className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 pointer-events-none"
                  : "hover:text-white hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800"
              }`}
              onClick={handlePrev}
            >
              <FaAngleLeft />
            </div>
            <div
              className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center ${
                currentPage === noOfPage
                  ? "bg-gray-200 text-gray-400 pointer-events-none"
                  : "hover:text-white hover:bg-gradient-to-r from-slate-100 to-purple-900 via-pink-800"
              }`}
              onClick={handleNext}
            >
              <FaAngleRight />
            </div>
          </div>
        )}
      </div>

      {/* Member Cards */}
      <div className="bg-slate-100 p-5 mt-5 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[65%] overflow-y-auto">
        {data.map((item, index) => (
          <MemberCard key={item._id || index} item={item} />
        ))}
      </div>

      {/* Modals */}
      {addMembership && (
        <Model
          header="Add Membership"
          handleClose={handleMembership}
          content={<AddMembership handleClose={handleMembership} />}
        />
      )}

      {addMember && <Model header="Add Member" handleClose={handleMembers} content={<AddMembers />} />}

      <ToastContainer />
    </div>
  );
};

export default Member;
