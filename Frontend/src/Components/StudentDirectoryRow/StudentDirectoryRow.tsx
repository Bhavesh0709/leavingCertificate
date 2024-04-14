import React from 'react';
import { ActionItems, IStudentDirectoryRow } from './types';
import { Link } from 'react-router-dom';
import { generatePDF } from '../../adapters';

const StudentDirectoryRow: React.FunctionComponent<IStudentDirectoryRow> = ({ studentData }) => {
    const handlePrintClick = async () => {
        const response = await generatePDF(studentData.aadharNo);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Open PDF in new tab
        window.open(url, '_blank');

        // Clean up by revoking the URL
        window.URL.revokeObjectURL(url);
    };
    return (
        <tr>
            <td>{studentData.studentId}</td>
            <td>{`${studentData.firstName} ${studentData.lastName}`}</td>
            <td>{studentData.aadharNo}</td>
            <td>
                <button className="btn btn-primary">{ActionItems.VIEW}</button>
            </td>
            <td>
                <Link to={`/edit/${studentData.aadharNo}`}>
                    <button className="btn btn-secondary">{ActionItems.EDIT}</button>
                </Link>
            </td>
            <td>
                <button className="btn btn-warning" onClick={handlePrintClick}>
                    {ActionItems.PRINT}
                </button>
            </td>
        </tr>
    );
};

export default StudentDirectoryRow;
