const mongoose = require('mongoose');


const tableSchema = new mongoose.Schema({
    name : {type:String,required:true},
    minCovers : {type:Number,required:true},
    maxCovers : {type:Number,required:true},
    isActive : {type:Boolean,default:true},
    position:{
        x : {type:Number,required:true},
        y: {type:Number,required:true},
    },
    rotation : {type:Number , default:0},
    size : {
        width : {type:Number,default:100},
        height : {type:Number,default : 100},
    },
    roomId : {type:mongoose.Schema.Types.ObjectId,ref:'Room'},
});


module.exports = mongoose.model('Table',tableSchema);