

const express=require('express')
const { registerController } = require('../controllers/authController')
const router = express.Router()

//regitser ||POST


router.post('/register',registerController)


module.exports=router