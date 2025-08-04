# Employee Management System

This is a Full Stack Web Application to manage employees.

## 🔧 Technologies Used

- 💻 Frontend: React.js
- 🔙 Backend: Spring Boot (Java)
- 🛢️ Database: PostgreSQL (or H2)
- 📄 PDF Generation
- ✉️ Email Notification (optional)

---

## 📁 Project Structure

### employee-management/
-│
-├── frontend/ --> React app
-├── backend/ --> Spring Boot app
-└── README.md


---

## 📸 Screenshots


### 📋 Employee List
![Employee List](imagess\Screenshot 2025-08-04 100609.png)

---

### ➕ Add Employee Form
![Add Employee Form](imagess\Screenshot 2025-08-04 100537.png)

---

### ✏️ Update Employee Form
![Update Employee Form](imagess\Screenshot 2025-08-04 100633.png)

---

## 🚀 How to Run This Project

### 🖥️ Backend (Spring Boot)
1. Open a terminal
2. Go to backend folder:
   ```bash
   cd backend
3. Run the Spring Boot app:
   ```bash
   ./mvnw spring-boot:run

### 🌐 Frontend (React)
1. Open a new terminal
2. Go to frontend folder:
   ```bash
      cd frontend
3. Install dependencies:
   ```bash
   npm install

4. Run the React app:
   ```bash
   npm start

---

## Feature
- Add new employee
- View employee list
- Update employee details
- Delete employee
- Download employee list as PDF
- Styled UI with serial numbers
- Responsive layout

---

## ✉️ Email Configuration (Gmail SMTP)

To enable email functionality in this project using Gmail:

### 1. Enable 2-Step Verification
- Go to your Google Account settings: [https://myaccount.google.com/security](https://myaccount.google.com/security)
- Under "Signing in to Google", enable **2-Step Verification**

### 2. Generate App Password
- After enabling 2FA, click on **App passwords**
- Choose **Mail** as the app
- Choose **Other** for the device, type `SpringBootApp`
- Click **Generate**
- Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### 3. Add to `application.properties`

Update your Spring Boot `application.properties` file like this:

```properties
# Gmail SMTP Configuration
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_generated_app_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true



