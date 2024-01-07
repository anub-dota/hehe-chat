const mongoose = require('mongoose')

const ChannelSchema = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,enum:['group','dm'],required: true},
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
})

const Channel = mongoose.model('Channel',ChannelSchema)
module.exports = Channel

