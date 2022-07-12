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

const editEmployee = (id) => {
    window.location.assign(`/update-employees/${id}`)
}

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
            <th>Company ID</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Employee Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.companyId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>
                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
