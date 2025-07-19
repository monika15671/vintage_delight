import signupcollection from "../model/model.js";

export const signup= async (req,res) => {
  try{
    const data=new signupcollection(req.body)
    await data.save()
    res.status(201).json("acount hs been created")
  }
  catch (err) {
    res.status(400).json({error:err.message})
  }
} 
