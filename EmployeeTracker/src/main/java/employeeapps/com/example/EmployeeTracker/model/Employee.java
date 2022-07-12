package employeeapps.com.example.EmployeeTracker.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "employees")
public class Employee {





    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(name = "company_id")
    private Integer companyId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name= "address")
    private String address;

    @Column(name= "salary")
    private Integer salary;

    @Column(name = "email_id")
    private String emailId;


    //Company is one and has many employees
//name represents id of company in company entity and referencedColumnName represents company_id in the employee entity.
//    @ManyToOne(targetEntity = Company.class)
//    @JoinColumn(name="id", referencedColumnName="company_id")
//    private Set<Company> company;


    //default constructor
    public Employee(){

    }






    //create a public constructor with the appropriate parameters to be able to create a new instance of an employee
    public Employee(String firstName, String lastName, String emailId, String address, Integer salary, Integer companyId){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.salary = salary;
        this.address = address;
        this.companyId = companyId;
    }

    //define methods
    //long data type because could be a very long numerical  data
    public long getId() {
        return id;
    }
    public void setId(long companyId){
        this.id = id;
    }
    public String getFirstName(){
        return firstName;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public String getEmailId(){
        return emailId;
    }
    public void setEmailId(String emailId){
        this.emailId = emailId;
    }
    public void setCompanyId(Integer companyId){
        this.companyId= companyId;
    }
    public Integer getCompanyId(){
        return companyId;
    }
    public void setAddress(String address){
        this.address = address;
    }
    public String getAddress(){return address;}

    public void setSalary(Integer salary){
        this.salary = salary;
    }
    public Integer getSalary(){return salary;}
}
