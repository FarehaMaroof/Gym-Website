import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const MemberCard = ({item}) => {
  return (
    <Link to={`/member/${item?._id}`} className="bg-white rounded-lg p-3 hover:bg-gradient-to-r  from-slate-100 to-purple-900 via-pink-800 hover:text-white cursor-pointer">
      <div className="w-36 h-36 flex justify-center relative items-center border-2 p-1 mx-auto  rounded-full ">
        <img
          className="w-full h-full rounded-full object-cover"
          src={item?.profilePic}
          alt=""
        />
        <FaCircle className={`absolute top-0 left-8  ${item?.status==="Active"?"text-green-500":"text-yellow-400"}`} />
      </div>
      <div className="mx-auto text-center mt-5 text-xl font-semibold font-mono">
        {item?.name}
      </div>
      <div className="mx-auto text-center font-mono text-xl ">
        {"+91" + item?.mobileNo}
      </div>

      <div className="mx-auto text-center font-mono text-xl ">
        Next Bill Date :{item?.nextBillDate.slice(0,10).split('-').reverse().join('-')}
      </div>
    </Link>
  );
};

export default MemberCard;
