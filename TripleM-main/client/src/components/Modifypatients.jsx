import React, { useState } from 'react';
import axios from 'axios';

const Modifypatient = () => {
  const [patientId, setPatientId] = useState('');
  const [detailColumn, setDetailColumn] = useState('');
  const [newValue, setNewValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9021/api/modifyPatient', {
        patientId,
        detailColumn,
        newValue
      });
      // Reset form fields if needed
      setPatientId('');
      setDetailColumn('');
      setNewValue('');
      alert('Patient modified successfully');
    } catch (error) {
      console.error('Error modifying patient:', error);
      alert('Error modifying patient. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Modify Patient</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientId">
            Patient ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patientId"
            type="text"
            placeholder="Enter patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="detailColumn">
            Detail Column
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="detailColumn"
            type="text"
            placeholder="Enter detail column"
            value={detailColumn}
            onChange={(e) => setDetailColumn(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newValue">
            New Value
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newValue"
            type="text"
            placeholder="Enter new value"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modifypatient;
