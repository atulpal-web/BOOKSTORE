const User = require('../Model/User.Model.js');
const bcryptjs = require('bcryptjs');

exports.Signup = async (req , res )   =>{
   try {
     const {FullName,Email,Password} = req.body; 
    //  console.log(req.body)
     const user =  await User.findOne({Email});
     if(user){
         return res.status(400).json({message : "Email All Ready Exists"});
     }
     
     const hashPassword = await bcryptjs.hash(Password,10);

     const createdUser = new User({
         FullName:FullName,
         Email:Email,
         Password:hashPassword,
     })

     await createdUser.save();
     res.status(201).json({message:"User Created SuccessFully" , user: {
      _id: createdUser._id,
      FullName:createdUser.FullName,
      Email:createdUser.Email,
     }})
   } catch (error) {
        console.log("Error :", error.message)
        res.status(500).json({message:"Internal Server Error"})
   }

};

exports.login = async (req,res)=> {
  try {
    const {Email , Password} = req.body;
    console.log(req.body);
    const user = await User.findOne({Email});
    const  isMatch = await bcryptjs.compare(Password, user.Password);
    if( !user || !isMatch){
      return res.status(404).json({message:"Wrong User Name or Password  "});
    }else{
      res.status(200).json({message:"Login Successful", user:{
        _id:user._id,
        FullName:user.FullName,
        Email:user.Email
      }});
    }
  } catch (error) {
    console.log("error:" , error.message)
    res.status(500).json({message:"Internal server error"})
  }
}

