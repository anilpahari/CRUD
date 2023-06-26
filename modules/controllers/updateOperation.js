const mongoose = require("mongoose");
const updateStudent = async (req, res) => {
  const studentModel = mongoose.model("practise_db");

  //update manually garna ko lagi vayo///
  //   await studentModel.updateOne(
  //     {
  //       _id: "649907a6bb721bccaba6b7cd",
  //     },
  //     {
  //       name: "Messi",
  //     }
  //   );

  const { _id, name } = req.body;
  try {
    if (!_id) throw "Please provide an id";
  } catch (e) {
    res.status(200).json({
      message: "Failed : " + e,
    });
  }
  await studentModel.updateOne(
    {
      _id: _id,
    },
    {
      name: name,
    }
  );
  res.status(200).json({
    message: "Updated in the database",
  });
};
module.exports = updateStudent;
