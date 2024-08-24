const express=require("express")

//GET USER INFO
const getUserController = async(req,res)=>
{
res.status(200).send("user data");
};
module.exports={getUserController};
