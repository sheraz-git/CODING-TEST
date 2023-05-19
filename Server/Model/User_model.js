const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: false,
    default: null,
  },
  email: {
    type: String,
    require: false,
    unique: true,
    default: null,
  },
  password: {
    type: String,
    require: false,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User_data = mongoose.model("User_data", UserSchema);
module.exports = User_data;
