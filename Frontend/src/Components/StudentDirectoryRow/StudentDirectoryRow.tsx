import React, { useState } from 'react';
import { ActionItems, IStudentDirectoryRow } from './types';
import { Link } from 'react-router-dom';
import { generatePDF } from '../../adapters';

const StudentDirectoryRow: React.FunctionComponent<IStudentDirectoryRow> = ({ studentData }) => {
    const [loading, setLoading] = useState(false);

    const handlePrintClick = async () => {
        setLoading(true);

        try {
            const response = await generatePDF(studentData.aadharNo);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Open PDF in new tab
            window.open(url, '_blank')?.print();

            // Clean up by revoking the URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setLoading(false);
        }
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
                <button className="btn btn-warning" onClick={handlePrintClick} disabled={loading}>
                    {loading ? (
                        <>
                            <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Loading...
                        </>
                    ) : (
                        ActionItems.PRINT
                    )}
                </button>
            </td>
        </tr>
    );
};

export default StudentDirectoryRow;
