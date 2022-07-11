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
}

//export an object of this class
export default new EmployeeService()
