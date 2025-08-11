import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import Myappointments from './pages/Myappointments';
import Appointments from './pages/Appointments';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Influencers from './pages/Influencers';
import Payment from './pages/Payment';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/influencers' element={<Influencers />} />
        <Route path='/influencers/:speciality' element={<Influencers />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<Myappointments />} />
        <Route path='/appointment/:Infid' element={<Appointments />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
