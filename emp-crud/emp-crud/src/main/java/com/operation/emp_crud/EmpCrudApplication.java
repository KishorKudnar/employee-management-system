package com.operation.emp_crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmpCrudApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmpCrudApplication.class, args);
        System.out.println("Employee CRUD Application Started");
    }
}
