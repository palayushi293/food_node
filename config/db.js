

const mongoose=require('mongoose')

//databe connection

 const connectdb = async()=>
{
    try
    {
await mongoose.connect( process.env.MONGO_URI || 'mongodb://localhost:27017/food')
console.log(`connected mongo to database ${mongoose.connection.host}`)
    }
    catch(error)
    {
        console.log('mongo error', error);
    }

}
module.exports=connectdb;