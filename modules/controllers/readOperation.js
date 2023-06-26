const mongoose = require("mongoose");
const readStudent = async (req, res) => {
  const studentModel = mongoose.model("practise_db");
  const studens = await studentModel.findOne({
    _id: "649907a6bb721bccaba6b7cd",
  });

  res.status(200).json({
    message: studens,
  });
};
module.exports = readStudent;
