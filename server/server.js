const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const houseModel = require('./models/Houses');

const server = express();
server.use(cors());
server.use(express.json());

try{
    mongoose.connect("mongodb://localhost:27017/test")
    console.log("Connected to MongoDB");
}catch(err){
    console.log(err);
}

server.get('/getHouses', async (req,res) => {
    const houses = await houseModel.find();
    res.json(houses);
})

server.listen(5000, () => {
  console.log('Server is running on port 5000');
})
