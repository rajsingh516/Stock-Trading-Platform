const {Schema} = require('mongoose');
const PositionsSchema = new Schema({
    prductString : String,
    name : String,
    qty : Number,
    avg : Number,
    price : Number,
    net : String,
    day : String,
    isLoss : Boolean,
});
module.exports = {PositionsSchema};