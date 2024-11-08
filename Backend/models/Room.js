const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name : {type:String,required:true},
    tables : [{type:mongoose.Schema.Types.ObjectId,ref:'Table'}],
    layout : {type:Array,default:[]},
});


module.exports = mongoose.model('Room',roomSchema);