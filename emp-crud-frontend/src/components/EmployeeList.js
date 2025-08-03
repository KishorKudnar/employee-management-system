import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import './EmployeeList.css'; // 👈 Import the CSS file

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    
    useEffect(() => {
        EmployeeService.getAllEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const deleteEmp = (id) => {
        EmployeeService.deleteEmployee(id).then(() => {
            setEmployees(employees.filter(emp => emp.id !== id));
        });
    };

    return (
        <div className="container">
            <h2>Employee List</h2>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp,index) => (
                        <tr key={emp.id}>
                            <td>{index + 1}</td>
                            <td>{emp.name}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.email}</td>
                            <td>
                                <Link to={`/edit/${emp.id}`}>
                                    <button className="action-button edit-button">Edit</button>
                                </Link>
                                <button
                                    onClick={() => deleteEmp(emp.id)}
                                    className="action-button delete-button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
