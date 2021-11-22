class EmployeeService {
  constructor() {
  }
  
  validate(employee) {
    if (!employee.id) {
      throw new Error('Employee ID cannot be null or empty');
    }
    if (!employee.firstName) {
      throw new Error('Employee first name cannot be null or empty');
    }
    if (!employee.lastName) {
      throw new Error('Employee last name cannot be null or empty');
    }
    if (!employee.emailId) {
      throw new Error('Employee email id cannot be null or empty');
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(employee.emailId).toLowerCase())) {
      throw new Error('Employee email id must be in a valid format');
    }
  }
  
}

module.exports = EmployeeService;
