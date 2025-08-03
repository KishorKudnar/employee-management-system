import React, { useState } from 'react';
import axios from 'axios';
import './AddEmployeeForm.css'; // 👈 Import CSS

function AddEmployeeForm() {
    const [employee, setEmployee] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/employees', employee);
            alert('Employee added and email sent successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee');
        }
    };

    return (
        <form className="add-employee-form" onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="phone" value={employee.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default AddEmployeeForm;
