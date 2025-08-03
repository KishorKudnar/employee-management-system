package com.operation.emp_crud;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpService {

    @Autowired
    private EmpRepository empRepository;

    @Autowired
    private MailService mailService;

    public List<Employee> getAllEmployees() {
        return empRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return empRepository.findById(id);
    }

    public Employee addEmployee(Employee employee) {
        Employee saved = empRepository.save(employee);
        mailService.sendMail(employee.getEmail(), "Employee Added",
                "Hi " + employee.getName() + ", your record was created.");
        return saved;
    }

    public Employee updateEmployee(Long id, Employee updatedEmployee) {
        Optional<Employee> empOpt = empRepository.findById(id);
        if (empOpt.isPresent()) {
            Employee emp = empOpt.get();
            emp.setName(updatedEmployee.getName());
            emp.setPhone(updatedEmployee.getPhone());
            emp.setEmail(updatedEmployee.getEmail());
            Employee updated = empRepository.save(emp);
            mailService.sendMail(emp.getEmail(), "Employee Updated",
                    "Hi " + emp.getName() + ", your record was updated.");
            return updated;
        } else {
            return null;
        }
    }

    public void deleteEmployee(Long id) {
        empRepository.deleteById(id);
    }
}
