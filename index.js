const express = require("express");
const connect = require("./backend/config/db");
const cookie = require("cookie-parser");
const UserRoute = require("./backend/routes/user.route");
const productRouter= require("./backend/routes/product.route")
const cors=require("cors");
const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());

app.use(cookie());
app.use("/product", productRouter)
app.use("/user", UserRoute);
app.listen(8090, () => {
   connect();
  console.log("Listening on 8090");
});
