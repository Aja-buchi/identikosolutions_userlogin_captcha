import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login/login.jsx';
import Signup from './pages/Signup/signup.jsx';
import EmailVerification from './pages/EmailVerification/emailverification.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx'
import ForgotPassword from './pages/ForgotPassword/forgotpassword.jsx'
import ResetPassword from './pages/ResetPassword/resetpassword.jsx'
import ChangePassword from './pages/ChangePassword/changepassword.jsx'

function App() {
  return (
    <>
      <HashRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emailverification" element={<EmailVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword /> } />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
