const { connect } = require("http2");
const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://kissbalazs:Start123@cluster0.gdpmr.mongodb.net/mern-rooms'

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('A Mongo DB csatlakozás sikertlen');
})

connection.on('connected', ()=>{
    console.log('A Mongo DB csatlakozás sikeres');
})

module.exports = mongoose