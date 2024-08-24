const express=require('express')

const app=express()
const cors=require('cors');
const morgan=require("morgan");
const dotenv=require("dotenv")
const connectdb = require("./config/db.js");
//dot condigure


dotenv.config()
// connection 

connectdb();

//middleware



app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const PORT = process.env.PORT || 8000; 


app.get('/',(req,res)=>
{
  return   res.status(200).send("hello")
})

app.use('/api/v1/auth',  require("./routes/authRoutes"));

app.listen(PORT,()=>
{
    console.log(`server strat ${PORT}`)
});