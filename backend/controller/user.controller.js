const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.schema");


const signup=async(req,res)=>{
    try {
        let {name,email, password}= req.body;
        let data = await UserModel.findOne({ email: email});
        if(data){
            return res.send({msg:'User Already Registered with this email address'})
        }
        else{
            bcrypt.hash(password,5,async(err,hash)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else{
                    let obj={name:name, email:email, password:hash}
                    let data = await UserModel.create(obj);
                    let token = jwt.sign({id:data.id}, "secret");
                    res.json({token:token, info:data});
                }
            })
        }
    } catch (error) {
        return res.status({Message:error.message});
    }
}
const login = async(req,res)=>{
    console.log(req.body);
    try {
        let {email, password}= req.body;
        let data = await UserModel.findOne({ email: email});
        if(data){
            bcrypt.compare(password,data.password,async(err, result)=>{
                if(err){
                    return res.send({Error: err.message})
                }
                else if(result){
                    
                    let token = jwt.sign({id:data.id}, "secret");
                    res.cookie("token",token).send({msg:"User Login Success"})
                }
                else{
                    return res.send({Message:'Password incorrect'})
                }
            })
        }
        else{
            return res.send({Message:'User not found'})
        }
    } catch (error) {
        return res.send({Message:error.message});
    }
}


module.exports = { login, signup };