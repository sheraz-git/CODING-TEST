const User = require("../Model/User_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await User.findOne({ email });
    if (!data) {
      return res.status(404).json({
        message: "User doesn't exist",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, data.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    } else {
      const token = await jwt.sign(
        { _id: data._id, email: data.email},
        "codistan_ventures",
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "login successful",
        token,
      });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "server error" });
  }
};



exports.getUser = async (req, res) => {
  try {
    const findUser = await User.find();
    console.log(findUser);
    return res.status(200).json({
      message: "All Records",
      findUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findByIdAndDelete(id);
    console.log(findUser);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const options = { new: true }; // return the updated record

    const findUser = await User.findByIdAndUpdate(id, update, options);
    console.log(findUser);
    return res.status(200).json({
      message: "task update",
      findUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

///Write a Mongoose query to find all users whose first name starts with "A" and sort them in ascending order of their last name.//

exports.findUsers = async (req, res) => {
  try {
    const findUser = await User.find({ firstName: /^A/i })
    .sort({ lastName: 1 })
    .exec();
    console.log(findUser);
    return res.status(200).json({
      message: "All Records",
      findUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
