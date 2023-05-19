const User = require("../Model/User_model");
const bcrypt = require("bcryptjs");

exports.Usercreate = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const saltRounds = 10;
    let hash = await bcrypt.hash(password, saltRounds);
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    } else {
      const data = new User({
        firstName,
        lastName,
        email,
        password: hash,
      });
      await data.save();
      return res.status(200).json({
        message: "User Added",
        data,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
