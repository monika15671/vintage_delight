import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const signupSchema=mongoose.Schema({
    name:{type:String, required: true },
    password:{type:String, required: true },
    email:{type:String, required: true }
})
signupSchema.pre("save",async function (next){
 if((!this.isModified("password"))) return next()
    const salt=await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next();
})
 signupSchema.methods.matchPassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
 }

const signupcollection=mongoose.model("signups",signupSchema)

export default signupcollection

