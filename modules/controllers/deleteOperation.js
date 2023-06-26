const mongoose = require("mongoose");
const deleteStudent = async (req, res) => {
  const studentModel = mongoose.model("practise_db");
  //   await studentModel.deleteOne({
  //     _id: "64990adf9d3d956233660a52",
  //   });

  await studentModel.deleteOne({
    _id: req.body._id,
  });

  res.status(200).json({
    message: "Deleted from the table...",
  });
};
module.exports = deleteStudent;
