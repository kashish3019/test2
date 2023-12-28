const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    image:String,
    title:String,
    desc:String,
    price:String,
    size:String
})
const productModel = mongoose.model('Product', productSchema);

module.exports =productModel