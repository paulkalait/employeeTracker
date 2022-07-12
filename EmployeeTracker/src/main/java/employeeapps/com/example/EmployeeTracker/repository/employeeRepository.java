package employeeapps.com.example.EmployeeTracker.repository;

import employeeapps.com.example.EmployeeTracker.model.Company;
import employeeapps.com.example.EmployeeTracker.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//JPA has methods like ById findbyId FindAll         long is the primary key
@Repository
public interface employeeRepository extends JpaRepository<Employee,  Long>{
}

