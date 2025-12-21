// import axios from "axios";

// exports.getMonthlyJoined =async()=>{
//     try{
//         const response=await axios.get('http://localhost:4000/members/monthly-member',{withCredentials:true}).then(()=>{
//             return response.data;
//         })

//     }catch(error){
//         console.log(error);
//         throw error;
//     }
// }


// exports.threeDayExpire =async()=>{
//     try{
//         const response=await axios.get('http://localhost:4000/members/within-3-days-expiring',{withCredentials:true}).then(()=>{
//             return response.data;
//         })

//     }catch(error){
//         console.log(error);
//         throw error;
//     }
// }


// exports.fourToSevenDaysExpire =async()=>{
//     try{
//         const response=await axios.get('http://localhost:4000/members/within-4-7-expiring',{withCredentials:true}).then(()=>{
//             return response.data;
//         })

//     }catch(error){
//         console.log(error);
//         throw error;
//     }
// }

// exports.expired =async()=>{
//     try{
//         const response=await axios.get('http://localhost:4000/members/expired-members',{withCredentials:true}).then(()=>{
//             return response.data;
//         })

//     }catch(error){
//         console.log(error);
//         throw error;
//     }
// }


// exports.inActive =async()=>{
//     try{
//         const response=await axios.get('http://localhost:4000/members/inactive-members',{withCredentials:true}).then(()=>{
//             return response.data;
//         })

//     }catch(error){
//         console.log(error);
//         throw error;
//     }
// }

import axios from "axios";

export const getMonthlyJoined = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/monthly-member",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const threeDayExpire = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/within-3-days-expiring",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fourToSevenDaysExpire = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/within-4-7-expiring",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const expired = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/expired-members",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const inActive = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/members/inactive-members",
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
