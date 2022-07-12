package employeeapps.com.example.EmployeeTracker.model;


import javax.persistence.*;

@Entity
@Table(name = "company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    public Company(){

    }

    //public constructor

    public Company(String name){
        this.name = name;

    }



}
