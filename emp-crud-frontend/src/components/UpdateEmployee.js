// src/components/UpdateEmployee.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import './AddEmployeeForm.css';

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ name: '', phone: '', email: '' });

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const updateEmp = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(id, employee).then(() => {
            alert('Employee updated');
            navigate('/');
        });
    };

    return (
        <form onSubmit={updateEmp}>
            <h2>Update Employee</h2>
            <input name="name" value={employee.name} onChange={handleChange} placeholder="Name" />
            <input name="phone" value={employee.phone} onChange={handleChange} placeholder="Phone" />
            <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateEmployee;
