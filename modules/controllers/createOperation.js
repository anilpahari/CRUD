const mongoose = require("mongoose");
const createStudent = async (req, res) => {
  const studentModel = mongoose.model("practise_db");
  const { name, address, Class } = req.body;
  await studentModel.create({
    name: name,
    address: address,
    Class: Class,
  });
  res.status(200).json({
    message: "Student List is created:",
  });
};
module.exports = createStudent;
