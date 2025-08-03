import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const DownloadPDF = () => {
    const handleDownload = () => {
        axios.get("http://localhost:8080/employees/export/pdf/save", {
            responseType: 'blob',
        }).then((res) => {
            const blob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(blob, "employee_dataset.pdf");
        }).catch(err => {
            console.error("Error downloading PDF:", err);
        });
    };

    return (
        <button onClick={handleDownload}>
            Download PDF
        </button>
    );
};

export default DownloadPDF;
