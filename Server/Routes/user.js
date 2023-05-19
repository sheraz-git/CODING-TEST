const express=require("express");
const User=require("../Controller/Usersignup");
const UserLogin=require("../Controller/Userlogin");
const middleware=require("../Middleware/tokenVerification");
const router = express.Router();

//// User Signup////////
router.post("/Usercreate",User.Usercreate);


//// User login////////
router.post("/loginuser",UserLogin.loginuser);
router.get("/getUser",middleware.verifyToken,UserLogin.getUser);
router.delete("/deleteUser/:id",middleware.verifyToken,UserLogin.deleteUser);
router.put("/updateUser/:id",middleware.verifyToken,UserLogin.updateUser);

////findUsers////
router.get("/findUsers",middleware.verifyToken,UserLogin.findUsers);

module.exports = router;