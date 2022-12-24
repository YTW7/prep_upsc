import connectDb from "../../middleware/mongoose";
import indianHistory from "../../modal/indianHistory";

const handler = async (req,res) =>{
  if(req.method=="POST"){
    console.log(req.body)
    const {title , description , price} = req.body
    let u = new indianHistory({title,description,price})
    await u.save()
    res.status(200).json({success : "success"})
  }
  else{
    res.status(400).json({error : "Method Not Allowed"})
  }
}

export default connectDb(handler)