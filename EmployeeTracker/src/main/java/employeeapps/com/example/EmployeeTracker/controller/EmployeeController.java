package employeeapps.com.example.EmployeeTracker.controller;

import employeeapps.com.example.EmployeeTracker.exception.ResourceNotFoundException;
import employeeapps.com.example.EmployeeTracker.model.Employee;
import employeeapps.com.example.EmployeeTracker.repository.employeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//allows for localhost 8080 to talk to the local host 3000
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
   private employeeRepository employeeRepository;


    //REST APIS
    //get all employees  method name is get all
    //GET method
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();

    }


    //CREATE method
    //returns employee object as jason
    //post mapping will handle this post request
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //get by ID method
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){

                                                //if no employee found in DB with this id use the orElseThrow method
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with this Id :" + id));

        return ResponseEntity.ok(employee);
    }

    //update
    // pass the id as args, and that employee object class that is getting updated
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Not Found with this Id :" + id));

        //reset the employee model to the new values
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmailId(updatedEmployee.getEmailId());
        employee.setAddress(updatedEmployee.getAddress());
        employee.setSalary(updatedEmployee.getSalary());
        employee.setCompanyId(updatedEmployee.getCompanyId());


        //then save and store it
        Employee savedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(savedEmployee);
    }

    //delete
    //return a map as a res
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String , Boolean>> deleteEmployee(@PathVariable Long id){
        //if employee is found throw the Resourcenotfound exception
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with the id :" + id));

        employeeRepository.delete(employee);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        //return the map to client
        return ResponseEntity.ok(response);
    }
}
