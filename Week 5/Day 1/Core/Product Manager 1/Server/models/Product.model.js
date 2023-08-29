const mongoose=require("mongoose")

//--The Schema--//

const ProductSchema= new mongoose.Schema({
    Title:{
        type:String,
        required:[true,"The title of the product is recommanded"],
        minlength:1
    },
    Price:{
        type:Number,
        required:[true,"The Price of the product is recommanded"],
        minlength:1
    },
    Description:{
        type:String,
        required:[true,"The description of the product is recommanded"],
        minlength:1
    }
    

    

},{ timestamps:true })

module.exports.Product=mongoose.model("Product",ProductSchema)
