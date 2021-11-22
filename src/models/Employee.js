const mongoose = require("mongoose")

let employeeSchema = mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  emailId: String
});

module.exports = mongoose.model("Employee", employeeSchema)
