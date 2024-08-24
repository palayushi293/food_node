const mongoose=require('mongoose')

//schema

const userSchema = new mongoose.Schema(
    {
      userName:{
        type:String,
        required:[true,'username is required']
      }  ,
      email:
      {
        type:String,
        required:[true,'email is requred'],
        unique:true
      },
      password:
      {
        type:String,required:[true,'required password']
      },
      address:
      {
        typr:Array,
      },
      phone:
      {
        type:String,
        require:[true,'phone number is required']
      },

      
    },
    {timeStamps:true}


)



const User = mongoose.model('User', userSchema);

module.exports = User;
