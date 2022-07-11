import React, { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);





useEffect(() => {
EmployeeService.getEmmployees().then((res) => {
    setEmployees(res.data)
})
}, [employees])

  return (
    <div className="row">
    <div>
    <Link to="/add-employees">
     Add Employee
    </Link>
    </div>
      <h2 className="text-center"> Employees</h2>
      <div className="row d-flex justify-content-center">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Employee Address</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                {" "}
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.Email}</td>
                <td>{employee.Address}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
