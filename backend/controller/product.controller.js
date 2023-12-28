const productModel = require("../model/product.schema");
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: "rzp_test_7Grqtls4UrZJlU",
    key_secret: "UvsWz2UDN7jcSM58yluYTxIz"
})
const pay =async(req,res)=>{
    let option = {
        amount : req.body.amount*200,
    }
    razorpay.orders.create(option,(err, order)=>{
        if(err){
            return res.send({Error: err.message})
        }
        else{
            res.send(order)
        }
    })
}

const allproduct = async(req, res)=>{
    try {
        let data = await productModel.find();
        res.send(data)
    } catch (error) {
        return res.send({Error : error.message});
    }
}
module.exports ={allproduct, pay}