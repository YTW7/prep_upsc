const mongoose = require('mongoose')

const doubtSchema = new mongoose.Schema({
    title : {type : String , required:true},
    description : {type : String , required : true},
    price : {type : String , default:"12 Sol"}
},{timestamps:true})

mongoose.models = {}
export default mongoose.model("indianHistory",doubtSchema)