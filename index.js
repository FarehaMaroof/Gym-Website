// const express =require('express');
// const app=express();
// const cookieParser=require("cookie-parser")
// const cors=require('cors');

// require('dotenv').config();

// const PORT=process.env.PORT;

// // app.use(cors({
// //     origin:"http://localhost:5173",//your react app url
// //     credentials:true
// // }))


// // const allowedOrigins = ["http://localhost:5173", "http://localhost:5174","https://gym-website-two-kappa.vercel.app","*"];

// // app.use(cors({
// //   origin: function(origin, callback){
// //     if(!origin) return callback(null, true); // allow Postman / non-browser requests
// //     if(allowedOrigins.includes(origin)){
// //       callback(null, true);
// //     } else {
// //       callback(new Error("Not allowed by CORS"));
// //     }
// //   },
// //   credentials: true
// // }));


// const cors = require("cors");

// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5174",
//   "https://gym-website-two-kappa.vercel.app"
// ];

// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin (Postman, CURL)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.includes(origin)){
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: ["GET","POST","PUT","DELETE","OPTIONS"],
//   allowedHeaders: ["Content-Type","Authorization"],
//   credentials: true
// }));

// // Handle preflight OPTIONS requests
// app.options("*", cors());


// app.use(cookieParser());
// app.use(express.json());
//  require('./DBConn/conn');

// const GymRoutes=require('./Routes/Gym');
// const MembershipRoutes=require('./Routes/Membership');
// const MemberRoutes=require('./Routes/Member')

// app.get("/", (req, res) => {
//   res.send("Gym Management API is running 🚀");
// });
// app.use('/auth',GymRoutes)
// app.use('/plans',MembershipRoutes);
// app.use('/members',MemberRoutes);

// app.listen(PORT,()=>{
//     console.log("server is running on PORT 4000")
// })


const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

/* ✅ CORS CONFIG */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://gym-website-two-kappa.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(cookieParser());

require("./DBConn/conn");

const GymRoutes = require("./Routes/Gym");
const MembershipRoutes = require("./Routes/Membership");
const MemberRoutes = require("./Routes/Member");

app.get("/", (req, res) => {
  res.send("Gym Management API is running 🚀");
});

app.use("/auth", GymRoutes);
app.use("/plans", MembershipRoutes);
app.use("/members", MemberRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
