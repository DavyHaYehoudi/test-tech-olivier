const UserModel = require("../models/user");

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
  console.log("users:",users);
};

module.exports.createUser = async (req, res) => {
  const { name, customerNumber, adress} = req.body.data;
  console.log("api profil user :",name, customerNumber, adress);

  const userIsExisted = await UserModel.findOne({ customerNumber });
  if (!userIsExisted) {
    const user = await UserModel.create({
      name,
      customerNumber,
      adress :[{city:adress.city,street:adress.street}] ,
    });
    res.status(201).json(user);
  } else {
    res.status(200).json({ message: "Customer already existed" });
  }
};

module.exports.deleteUser = async (req, res) => {
  console.log(req.params.id);
  const customer_id = req.params.id;
  await UserModel.deleteOne({_id: customer_id });
  res.status(200).json({ message: "Customer deleted" });
};
module.exports.updateUser = async (req, res) => {
  const { adress, contact, customerNumber } = req.body;
  await UserModel.findOneAndUpdate(customerNumber, { adress, contact });
  res.status(200).json({ message: "Customer updated" });
};
