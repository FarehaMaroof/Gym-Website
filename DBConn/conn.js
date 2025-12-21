const mongoose=require("mongoose");
require('dotenv').config();

// mongoose.connect("mongodb://localhost:27017/gymBackend").

mongoose.connect(process.env.MONGO_URI).then(()=>
console.log('DB connection successful')).catch(err=>{console.log(err)
})
