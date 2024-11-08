const Table = require('../models/Table');


exports.createTable = async (req,res) => {
    try{
        const table = new Table(req.body);
        await table.save();
        res.status(201).json(table);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.getTables = async (req,res) => {
    try{
        const tables = await Table.find();
        res.json(tables);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

exports.updateTable = async (req,res) => {
    try{
        const table = await Table.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(table);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.deleteTable = async (req,res) => {
    try{
        await Table.findByIdAndDelete(req.params.id);
        res.json({message:'Table deleted successfully'});
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

exports.toggleTableStatus = async (req,res) => {
    try{
        const table = await Table.findById(req.params.id);
        table.isActive = !table.isActive;
        await table.save();
        res.json(table);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

