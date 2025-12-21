const express =require('express');
const app=express();
const cookieParser=require("cookie-parser")
const cors=require('cors');

require('dotenv').config();

const PORT=process.env.PORT;

// app.use(cors({
//     origin:"http://localhost:5173",//your react app url
//     credentials:true
// }))


const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow Postman / non-browser requests
    if(allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


app.use(cookieParser());
app.use(express.json());
 require('./DBConn/conn');

const GymRoutes=require('./Routes/Gym');
const MembershipRoutes=require('./Routes/Membership');
const MemberRoutes=require('./Routes/Member')

app.use('/auth',GymRoutes)
app.use('/plans',MembershipRoutes);
app.use('/members',MemberRoutes);

app.listen(PORT,()=>{
    console.log("server is running on PORT 4000")
})


