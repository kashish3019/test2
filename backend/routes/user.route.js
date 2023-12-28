const {Router}=require("express");
const { signup, login } = require("../controller/user.controller");

const UserRoute=Router()

UserRoute.post("/signup",signup)
UserRoute.post("/login",login)


module.exports = UserRoute;
