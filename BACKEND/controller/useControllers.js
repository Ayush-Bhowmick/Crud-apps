const User= require("../model/userModel")

exports.home= (req,res)=>{
    res.send("Hello json")
  };
                                                // CREATE USER
exports.createUser= async (req,res)=>{
    try {
        //grab it from frontend
        const { name, email}=req.body
        //verify its details
        if (!name && !email) {
            throw new Error("NAME AND EMAIL BOTH ARE MANDATORY");
        }
        const userExist= await User.findOne({email})
        if (userExist) {
            throw new Error("EMAIL is already present");
        }
        // INSERTING INTO DATABASE
         const user = await User.create({name,email})
         res.status(201).json({
            Success:true,
            message:"user created succesfully",
            user,
         })
    } catch (error) {
        console.log(error);
    }
} 
                                                // Get user or Find user

exports.getUser = async (req,res)=>{
    try {
        const users= await User.find();
         res.status(201).json({
            Success:true,
            users,
         })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            Success:false,
            message:error.message
    })
        }    
}     

                                              // U-P-D-A-T-E user or edit 
  exports.updateUser = async (req,res)=>{
    try {
        const users= await User.findByIdAndUpdate(req.params.id,req.body);
         res.status(201).json({
            Success:true,
            users,
         })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            Success:false,
            message:error.message
    })
        }    
}   

//                               DELETE
  exports.deleteUser = async (req,res)=>{
    try {
         const userId= req.params.id
        const users= await User.findByIdAndDelete(userId);
          res.status(201).json({
          Success:true,
             users
          })
     } catch (error) {
        console.log(error);
         res.status(400).json({
            Success:false,
             message:error.message
    })
}    
}