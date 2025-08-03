package com.operation.emp_crud;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmpController {

    @Autowired
    private EmpService empService;

    @Autowired
    private MailService emailService;

    @GetMapping
    public List<Employee> getAllEmp() {
        return empService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Optional<Employee> getById(@PathVariable Long id) {
        return empService.getEmployeeById(id);
    }

    @PostMapping
    public Employee add(@RequestBody Employee emp) {
        Employee savedEmp = empService.addEmployee(emp);

        // ✅ Send email after saving
        String subject = "Welcome " + savedEmp.getName();
        String body = "Hello " + savedEmp.getName() + ",\n\n" +
                "Your employee record has been successfully created.\n\n" +
                "Phone: " + savedEmp.getPhone() + "\n" +
                "Email: " + savedEmp.getEmail() + "\n\n" +
                "Regards,\nEmployee Management System";

        emailService.sendMail(savedEmp.getEmail(), subject, body);

        return savedEmp;
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody Employee emp) {
        return empService.updateEmployee(id, emp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        empService.deleteEmployee(id);
    }

    @GetMapping("/export/pdf/save")
    public ResponseEntity<String> savePdfOnServer() {
        List<Employee> allEmployees = empService.getAllEmployees();

        try {
            String filePath = "employee_dataset.pdf"; // Save in project root or give full path
            PdfWriter writer = new PdfWriter(filePath);
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);

            document.add(new Paragraph("Employee Dataset PDF").setBold().setFontSize(16));

            float[] columnWidths = { 50f, 150f, 100f, 200f };
            Table table = new Table(columnWidths);
            table.addCell("ID");
            table.addCell("Name");
            table.addCell("Phone");
            table.addCell("Email");

            for (Employee emp : allEmployees) {
                table.addCell(String.valueOf(emp.getId()));
                table.addCell(emp.getName());
                table.addCell(emp.getPhone());
                table.addCell(emp.getEmail());
            }

            document.add(table);
            document.close();

            return ResponseEntity.ok("PDF saved on server as: " + filePath);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to generate PDF: " + e.getMessage());
        }
    }

}
