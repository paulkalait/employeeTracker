import React, {useEffect, useState} from "react";
import EmployeeService from "../service/EmployeeService";
import { useParams } from "react-router-dom";

const UpdateEmployee = () => {

const [formState, setFormState] = useState({firstName: '', lastName: '', companyId: null, salary: null, address: '', emailId: ''})
 const { id } = useParams()

const updateEmployee = (e) => {
    e.preventDefault()
    //create an employee object
    let employee = { firstName: formState.firstName, lastName: formState.lastName, companyId: formState.companyId, salary: formState.salary, address: formState.address, emailId: formState.emailId }
    console.log('Employee =>' + JSON.stringify(employee));

    EmployeeService.updateEmployeeById(employee, id).then((res) => {
        window.location.assign('/')
    })
}

const cancel = (e) => {
  e.preventDefault()
    window.location.assign('/')
}

const handleChange = (event) =>{
    const  { name, value } = event.target
    console.log(value)

    setFormState({
        ...formState,
        [name]: value
    })

}

useEffect(() => {
    EmployeeService.getEmployeesById(id).then((res) => {
        let employee = res.data;
        setFormState({ firstName: employee.firstName, lastName: employee.lastName, companyId: employee.companyId, address: employee.address, salary: employee.salary, emailId: employee.emailId})
    })
}, [])

  return (
    <div>
      <div>
        <div className="row">
          <div className="card col-12 col-md-6 offset-md-3 offset-md-3 mt-5">
          <h2 className="my-3">Update Employee</h2>
          <div className="card-body">
          <form>
            <div className="form-body">
            <label> Frist Name</label>
            <input placeholder="First Name" name="firstName" className="form-control"
            value={formState.firstName} onChange={handleChange}/>
            <label> Last Name</label>
            <input placeholder="Last Name" name="lastName" className="form-control"
            value={formState.lastName} onChange={handleChange} />
            <label> Email</label>
            <input placeholder="Email@gmail.com" name="emailId" className="form-control"
            value={formState.emailId} onChange={handleChange} />
            <label> Company Id</label>
            <input placeholder="Company Id" name="companyId" className="form-control"
            value={formState.companyId} onChange={handleChange}/>
            <label> Salary</label>
            <input placeholder="Salary" name="salary" className="form-control"
            value={formState.salary} onChange={handleChange}/>
            <label> address</label>
            <input placeholder="Address" name="address" className="form-control"
            value={formState.address} onChange={handleChange} />
            </div>

            <div className="my-3">
            <button className="update-btn" onClick={updateEmployee}>Update</button>
            <button className="cancel-btn"  onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
            </div>
          
          </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
