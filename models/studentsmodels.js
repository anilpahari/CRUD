const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    reqiured: [true, "Name is reqired..."],
  },
  address: {
    type: String,
  },
  Class: {
    type: Number,
    required: [true, "Class is required..."],
  },
});
const studentModel = mongoose.model("practise_db", studentSchema);
module.exports = studentModel;
