const mongoose = require('mongoose')

const connect = async()=>{
    await mongoose.connect('mongodb+srv://kbpatel3019:exam@cluster0.3ymh2hq.mongodb.net/?retryWrites=true&w=majority')
    console.log("Database connection")
}

module.exports = connect