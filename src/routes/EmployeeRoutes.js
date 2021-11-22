const Employee = require('../models/Employee.js');
const express = require('express');
const EmployeeService = require("../services/EmployeeService");
const app = express.Router()

const employeeService = new EmployeeService();
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/employees', async (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Employee content can not be empty'
    });
  }
  try {
    employeeService.validate(req.body);
  } catch (error) {
    return res.status(400).send({
      message: error.message
    });
  }
  const employee = new Employee({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId
  });
  await employee.save();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(employee);
});

//http://mongoosejs.com/docs/api.html#find_find
app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(employees);
});

//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/employees/:employeeId', async (req, res) => {
  try {
    const employee = await Employee.findOne({id: req.params.employeeId});
    res.header("Access-Control-Allow-Origin", "*");
    res.send(employee);
  } catch (error) {
    res.status(404)
    res.header("Access-Control-Allow-Origin", "*");
    res.send({error: 'Employee doesn\'t exist!'})
  }
});

//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/employees/:employeeId', async (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Employee content can not be empty"
    });
  }
  try {
    employeeService.validate(req.body);
  } catch (error) {
    return res.status(400).send({
      message: error.message
    });
  }
  try {
    let employee = await Employee.findByIdAndUpdate(req.body._id, req.body);
    if (!employee) {
      res.status(404);
      res.send({error: "Employee doesn't exist!"});
      return;
    }
    res.send(employee);
  } catch {
    res.status(404)
    res.send({error: "Employee doesn't exist!"})
  }
});

//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/employees/:employeeId', (req, res) => {
  try {
    Employee.deleteOne({id: req.params.employeeId}, (err, result) => {
      if (err || !result.n || result.n == 0) {
        res.status(404);
        res.send({error: "Employee doesn't exist!"});
      } else {
        res.status(204).send();
      }
    });
  } catch {
    res.status(404);
    res.send({error: "Employee doesn't exist!"});
  }
});

module.exports = app;

