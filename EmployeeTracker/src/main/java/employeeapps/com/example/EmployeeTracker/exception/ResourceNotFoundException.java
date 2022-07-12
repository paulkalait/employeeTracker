package employeeapps.com.example.EmployeeTracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//property of value will be httpStatus not found. wheneevr the record doesnt exist in DB , throw this...
@ResponseStatus(value = HttpStatus.NOT_FOUND)
//wheenever a resource doesnt exists...throw this exception
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message){
        super(message);
    }
}
