const mongoose=require("mongoose")
const moment=require('moment')
const Record=mongoose.Schema({
    name:{type:String},
    Items:[],
    Total_price:{type:Number},
   Date:{type:Date},
    Reward:{type:Number}
})
module.exports =mongoose.model("record",Record,"record")