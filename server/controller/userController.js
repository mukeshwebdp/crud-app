import User from "../model/userModel.js";

//  data save in database.
export const create = async(req,res)=>{
    try {
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({message: "User data not found"})
        }
        const savedData = await userData.save()
        res.status(200).json({msg: 'User created Successfully',savedData});
    } catch (error) {
        res.status(500).json({
            message: 'Data not saved in database',
            error: error
        })
    }
}

// get all data  on the browser from databas

export const getAll = async(req, res)=>{
   try {
    const userData = await User.find();
    if(!userData){
        return res.status(404).json({
            message: 'users data not find'
        })
    }
    res.status(200).json({msg:"User created Successfully" ,userData })
   } catch (error) {
        res.status(500).json({
            message: 'users data not found in database',
            error: error
        })
   }
}

// Get a data from database to browser

export const getOne = async (req,res)=>{
    try {
        const id= req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: 'user getOne data not found.'})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({
            message: 'getOne data not found',
            error: error
        })
    }
}

// user data update
export const update = async(req, res)=>{
    try { 
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
           return res.status(401).json({message: 'user updata data not found.'})
        }
        const updataData = await User.findByIdAndUpdate(id,req.body,{new: true});
        res.status(200).json({msg: 'user update successfully',updataData});
    } catch (error) {
        res.status(500).json({
            message: "data not updata",
            error: error
        })
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).json({message: "delete user not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "user deleted successfully"})

    } catch (error) {
        
    }
}