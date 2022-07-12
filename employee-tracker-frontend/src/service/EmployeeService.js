//js class
import axios from 'axios';

//define the rest api end point
const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{

    //get request
    getEmmployees(){

        //axios will get the and return 
        return axios.get(EMPLOYEE_API_URL)
    }

    //post request
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_URL, employee)
    }

    //get request by ID
    getEmployeesById(employeeId){
        return axios.get(EMPLOYEE_API_URL + "/" + employeeId)
    }

    //update by id
                    //employee object
    updateEmployeeById(employee, employeeId){
        //example   http://localhost:3000/api/v1/employees/1 . . employee object
        return axios.put(EMPLOYEE_API_URL + '/' + employeeId, employee)
    }

    //delete Emplotee
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_URL + '/' + employeeId)
    }
}

//export an object of this class
export default new EmployeeService()
