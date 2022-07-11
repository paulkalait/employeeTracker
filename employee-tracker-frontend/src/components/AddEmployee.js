import React, {useState} from "react";
import EmployeeService from "../service/EmployeeService";

const AddEmployee = () => {
    // const [firstName, setFirstName ] = useState('')
    // const [lastName, setLasttName ] = useState('')
    // const [companyId, setCompanyId ] = useState('')
    // const [salary, setSalary ] = useState('')
    // const [address, setAddress ] = useState('')

const [formState, setFormState] = useState({firstName: '', lastName: '', companyId: null, salary: null, address: ''})
 

const saveEmployee = (e) => {
    e.preventDefault()
    //create an employee object
    let employee = { firstName: formState.firstName, lastName: formState.lastName, companyId: formState.companyId, salary: formState.salary, address: formState.address }
    console.log('Employee =>' + JSON.stringify(employee))

    //feed the employee object which has the form data into the createEmployee method to create an employee in the MySQL backend
    EmployeeService.createEmployee(employee).then(res => {
        window.location.assign('/')
        console.log("success!")
    })

}

const cancel = () => {
    window.location.assign('/employees')
}

const handleChange = (event) =>{
    const  { name, value } = event.target
    console.log(value)

    setFormState({
        ...formState,
        [name]: value
    })

}
  return (
    <div>
      <div>
        <div className="row">
          <div className="card col-12 col-md-6 offset-md-3 offset-md-3 mt-5">
          <h2>Add Employee</h2>
          <div className="card-body">
          <form>
            <div className="form-body">
            <label> Frist Name</label>
            <input placeholder="First Name" name="firstName" className="form-control"
            value={formState.firstName} onChange={handleChange}/>
            <label> Last Name</label>
            <input placeholder="Last Name" name="lastName" className="form-control"
            value={formState.lastName} onChange={handleChange} />
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
            <button className="btn btn-success" onClick={saveEmployee}>Add</button>
            <button className="btn btn-danger"  onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
            </div>
          
          </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
