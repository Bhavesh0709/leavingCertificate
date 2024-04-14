import React, { useEffect, useState } from 'react';
import StudentDirectoryRow from '../StudentDirectoryRow/StudentDirectoryRow';
import { parseResponse } from '../../utils/common';
import { fetchAllUsers } from '../../adapters';
import { ActionItems, IStudentData, TableHeaders } from '../StudentDirectoryRow/types';
function Dashboard() {
    const [studentData, setStudentData] = useState({
        count: 0,
        rows: []
    });
    useEffect(() => {
        const fetchStudentData = async () => {
            const [error, result] = await parseResponse(fetchAllUsers());
            if (error || result.status !== 200) {
                console.error('>>> Error while fetching student data', error);
            } else {
                setStudentData(result.data);
            }
        };
        fetchStudentData();
    }, []);

    return (
        <div className="container mt-5">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>{TableHeaders.STUDENT_ID}</th>
                        <th>{TableHeaders.NAME}</th>
                        <th>{TableHeaders.AADHAR_NO}</th>
                        <th colSpan={Object.keys(ActionItems).length}>{TableHeaders.ACTIONS}</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.count > 0 &&
                        studentData.rows.map((student: IStudentData) => (
                            <StudentDirectoryRow key={student.studentId} studentData={student} />
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
