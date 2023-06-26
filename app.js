const express = require("express");
const mongoose = require("mongoose");
const createStudent = require("./modules/controllers/createOperation");
const readStudent = require("./modules/controllers/readOperation");
const updateStudent = require("./modules/controllers/updateOperation");
const deleteStudent = require("./modules/controllers/deleteOperation");
require("dotenv").config();
const app = express();
app.use(express.json());
require("./models/studentsmodels");

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("Connection sucess to mongoo...");
  })
  .catch((e) => {
    console.log("Connection Failed", e);
  });
app.get("/home", readStudent);
app.post("/home", createStudent);
app.patch("/home", updateStudent);
app.delete("/home", deleteStudent);
app.listen(8000, () => {
  console.log("Sever started sucessfully......");
});
