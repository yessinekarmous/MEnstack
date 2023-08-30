const mongoose=require("mongoose")

//--The Schema--//

const NameSchema= new mongoose.Schema({


    

},{ timestamps:true })

module.exports.Name=mongoose.model("Name",NameSchema)
