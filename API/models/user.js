const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    role:{ type: String,default:"employee" },
    managerName:{ type: String },
    customerNumber: { type: String },
    adress: { type: [{ city: String, street: String }] },
    contact: { type: Array, default: [] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
