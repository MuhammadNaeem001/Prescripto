import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appointment from './pages/Appointment.jsx';
import Doctors from './pages/Doctors.jsx'; // ✅ check file name carefully
import MyAppointments from './pages/MyAppointments.jsx';
import MyProfile from './pages/MyProfile.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';  
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
