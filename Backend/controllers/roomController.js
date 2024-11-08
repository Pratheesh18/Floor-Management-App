const Room = require('../models/Room');

exports.createRoom = async (req,res) => {
    try{
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.updateRoom = async (req,res) => {
    try{
        const room = await Room.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(room);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.deleteRoom = async (req,res) => {
    try{
        await Room.findByIdAndDelete(req.params.id);
        res.json({message:'Room deleted'});
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getRooms = async (req,res) => {
    try{
        const rooms = await Room.find().populate('tables');
        res.json(rooms);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
