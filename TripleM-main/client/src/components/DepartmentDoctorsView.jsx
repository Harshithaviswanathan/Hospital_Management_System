import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DepartmentDoctorsView = ({ department }) => {
    const [doctorsData, setDoctorData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching data for department:", department);
        const fetchDeptDoctors = async () => {
            try {
                console.log(department);
                const response = await axios.get(`http://localhost:9021/api/department_doc_view/${department}`);
                setDoctorData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        };
        fetchDeptDoctors();
        return () => {
            
        };
    }, [department]);

/*
    useEffect(() => {
        console.log("Received department:", department);
    }, [department]);
*/

  return (
    <div>
        <div>
            <h2 className="mb-6 text-xl font-semibold text-center">Doctors in {department}</h2>
        </div>

        {error && <p>{error}</p>}
        {doctorsData && doctorsData.length > 0 ? (
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                    <th style={{ width: '10%', border: '1px solid #CCCCCC', fontSize: '0.95em', textAlign: 'center', padding: '8px' }}>Doctor ID</th>
                    <th style={{ width: '20%', border: '1px solid #CCCCCC', fontSize: '0.95em', textAlign: 'center', padding: '8px' }}>Name</th>
                    <th style={{ width: '20%', border: '1px solid #CCCCCC', fontSize: '0.95em', textAlign: 'center', padding: '8px' }}>Qualification</th>
                    <th style={{ width: '20%', border: '1px solid #CCCCCC', fontSize: '0.95em', textAlign: 'center', padding: '8px' }}>Contact</th>

                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map(doctor => (
                        <tr key={doctor.doc_id}>
                            <td style={{ border: '1px solid #CCCCCC', textAlign: 'center', padding: '8px' }}>{doctor.doc_id}</td>
                            <td style={{ border: '1px solid #CCCCCC', textAlign: 'center', padding: '8px' }}>{doctor.dname}</td>
                            <td style={{ border: '1px solid #CCCCCC', textAlign: 'center', padding: '8px' }}>{doctor.qualification}</td>
                            <td style={{ border: '1px solid #CCCCCC', textAlign: 'center', padding: '8px' }}>{doctor.contact}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            ) : (
            <p>No Doctor data available</p>
        )}
    </div>
    );
};

export default DepartmentDoctorsView;