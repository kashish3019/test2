const {Router} = require('express');
const { allproduct, pay } = require('../controller/product.controller');
const productRouter = Router();


productRouter.get("/allProducts", allproduct);

productRouter.post("/payment", pay);

module.exports =productRouter