// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/loginform.jsx';
import Dashboard from './components/dashboard.jsx';
import PatientPage from './components/patient.jsx';
import DoctorPage from './components/doctor.jsx';
import AdminDashboard from './components/admin.jsx'
const App = () => {
  return (
    <Router>
      

      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/loginform" element={<LoginForm />}/> 
        <Route path="/doctor" element={<DoctorPage />}/>
        <Route path="/patient" element={<PatientPage />}/>
        <Route path="/admin" element={<AdminDashboard />}/>
       {/* <Route path = "/admin" element={<ServerPage/>}/>  */}
      </Routes>
    </Router>
  );
};

export default App;

