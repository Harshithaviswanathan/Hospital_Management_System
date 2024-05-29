import React, { useState } from 'react';
import axios from 'axios';
//import './pregister.css'; // Import CSS for additional styling
//import React from 'react';

import bgImg from 'C:/TripleM-main-20240227T115539Z-001/TripleM-main/client/src/assets/patientbackground.jpeg'

const Patient = () => {
    
    // State variables to store form data
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [BloodGroup, setBloodGroup] = useState('');
    const [medications, setmedications] = useState('false');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [showAlreadyRegisteredBox, setShowAlreadyRegisteredBox] = useState(false);
    const [patientId, setPatientId] = useState('');

    const [patientData, setPatientData] = useState(null);
    const [error, setError] = useState(null);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          await axios.post('http://localhost:9021/api/patients', {
            name,
            age,
            dob,
            gender,
            address,
            mobileNumber,
            BloodGroup,
            maritalStatus,
            height,
            weight,
            medications
          });
          // Optionally, show a success message or redirect the user
        } catch (error) {
          console.error('Error submitting patient details:', error);
          // Handle error (e.g., show error message to user)
        }
      };
      
    const handleAlreadyRegisteredClick = () => {
      setShowAlreadyRegisteredBox(true);
    };
    
    const handleAlreadyRegisteredSubmit = async (e) => {
        e.preventDefault();
      
        console.log("Already Registered Patient ID submitted:", patientId);
        
        try {
          // Check if patientId is defined and not null
          if (typeof patientId !== 'undefined' && patientId !== null) {
            // Make the request to the server
            const response = await axios.get(`http://localhost:9021/api/patients/${patientId}`);
            // Set the fetched data to the state
            setPatientData(response.data);
            // Log the fetched data
            console.log(response.data);
          } else {
            // Handle the case where patientId is undefined or null
            console.error('patientId is undefined or null');
          }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('Patient data not found');
            } else {
                console.error('Error fetching patient data:', error);
                setError('Error fetching patient data');
            }
            setPatientData(null); // Clear patient data if there's an error
        }   
    };  
        
  const handleAlreadyRegisteredClose = () => {
    setShowAlreadyRegisteredBox(false);
    setPatientId(''); // Clear the patient ID when closing the box
    };



    return (
      <div className="min-h-screen flex flex-col items-center" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        
        <div className="mb-10 text-4xl font-bold text-center" 
            style={{ color: 'blue', fontFamily: 'Cambria, sans-serif', marginTop: '3rem' }}>Welcome to SIGNIFYHEALTH</div>

        <div>
            <div className="mb-8 text-4xl font-bold text-center" 
            style={{ color: 'red', fontFamily: 'Cambria, sans-serif'}}><h2>Patient Registration Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 font flex items-center">
                    <label htmlFor="patientName" className="block text-gray-700 font-bold mr-4 w-1/3">Patient Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-3 font flex items-center">
                    <label htmlFor="age" className="block text-gray-700 font-bold mr-4 w-1/3">Age:</label>
                    <input 
                        type="number" 
                        id="age" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>


                <div className="mb-3 font flex items-center">
                <label htmlFor="dob"  className="block text-gray-700 font-bold mr-4 w-1/3"> Date of Birth:     </label>
                <input 
                    type="date" 
                    id="dob" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required />
                </div>

                <div className="mb-3 font flex items-center">
                <label htmlFor="gender"  className="block text-gray-700 font-bold mr-4 w-1/3"> Gender:     </label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required className="px-3 py-2 border rounded-md">
                    <option value="">select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <div className="mb-3 font flex items-center">
                <label htmlFor="address"  className="block text-gray-700 font-bold mr-4 w-1/3"> Address:   </label>
                <textarea 
                    id="address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                </div>

                <div className="mb-3 font flex items-center">
                    <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mr-4 w-1/3">Mobile Number: </label>
                    <input 
                        type="text" 
                        id="mobileNumber" 
                        value={mobileNumber} 
                        onChange={(e) => setMobileNumber(e.target.value)} 
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit number"
                        className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required />
                </div>

                <div className="mb-3 font-bold flex items-center">
                    <label htmlFor="bloodGroup" className="block text-gray-700 font-bold mr-4 w-1/3"> Blood Group: </label>
                    <select id="bloodGroup" value={BloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required className="px-3 py-2 border rounded-md">
                        <option value="">select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className="mb-3 font flex items-center">
                <label htmlFor="height"  className="block text-gray-700 font-bold mr-4 w-1/3"> Height(in cm):   </label>
                <input 
                    type="number" 
                    id="height" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required />
                </div>

                <div className="mb-3 font flex items-center">
                <label htmlFor="weight"  className="block text-gray-700 font-bold mr-4 w-1/3"> Weight(in Kg):   </label>
                <input 
                    type="number" 
                    id="weight" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    className="appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required />
                </div>

                <div className="mb-6 font flex items-center">
                    <label htmlFor="maritalStatus" className="block text-gray-700 font-bold mr-4 w-1/3">Marital Status:</label>
                    <select id="maritalStatus" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} required className="px-3 py-2 border rounded-md" >
                        <option value="">select</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                </div>

                <div className="mb-3 font flex items-center">
                    <label htmlFor="medications" className="block text-gray-700 font-bold mr-4 w-1/3">Are you taking any medications?</label>
                    <div>
                        <input type="radio" id="medications-yes" name="medications" value="yes" checked={medications === 'yes'} onChange={(e) => setmedications(e.target.value)} />
                        <label htmlFor="medications-yes" className="mr-5">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="medications-no" name="medications" value="no" checked={medications === 'no'} onChange={(e) => setmedications(e.target.value)} />
                        <label htmlFor="medications-no" className="mr-5">No</label>
                    </div>
                </div>



                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                    Register                    
                    </button>
                </div>
            </form>
            <button
                    onClick={handleAlreadyRegisteredClick}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Already Registered?
                </button>

                {/* Already Registered Box */}
                {showAlreadyRegisteredBox && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-md">
                            <h2 className="text-2xl font-bold mb-4">Already Registered</h2>
                            <form onSubmit={handleAlreadyRegisteredSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="patientId" className="block text-gray-700 font-bold">Patient ID:</label>
                                    <input 
                                        type="text" 
                                        id="patientId" 
                                        value={patientId} 
                                        onChange={(e) => setPatientId(e.target.value)} 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required 
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                    Submit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleAlreadyRegisteredClose}
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                    Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Display patient data */}
                {patientData && (
                    <div>
                        <h2>Patient Details</h2>
                        <p>Name: {patientData[0].name}</p>
                        <p>Age: {patientData[0].age}</p>
                        {/* Add more fields as needed */}
                    </div>
                )}
                {/* Display error message if any */}
                {error && <p>Error: {error}</p>}
        </div>
    </div>
    );
};

export default Patient;
