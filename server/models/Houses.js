const mongoose = require('mongoose');

// Define a schema
const houseSchema = new mongoose.Schema({
    name: String,
    location: String,
    rent: Number,
    isVacant: Boolean  
});

const houseModel = mongoose.model('houses', houseSchema);
module.exports = houseModel;