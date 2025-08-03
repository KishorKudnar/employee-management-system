import React from 'react';
import { Link } from 'react-router-dom';
import DownloadPDF from './DownloadPDF';
import './Header.css';

const Header = () => {
    return (
        <header className="custom-header">
            <div className="logo">📋 EmployeeManager</div>
            <nav className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <DownloadPDF />
            </nav>
        </header>
    );
};

export default Header;
