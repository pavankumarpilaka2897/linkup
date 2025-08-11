import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, influencer, date, time } = location.state || {};

  const handlePayment = () => {
    // Save appointment in localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    existingAppointments.push({
      influencer: influencer.name,
      image: influencer.image,
      degree: influencer.degree,
      speciality: influencer.speciality,
      date,
      time,
      amount
    });
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));

    toast.success('Payment successful! Booking scheduled.');
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Page</h2>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="Payment"
          className="w-32 h-32 mx-auto mb-4"
        />

        <p className="text-lg font-semibold mb-4">Amount: ₹{amount}</p>
        <p className="text-sm mb-2">Influencer: {influencer.name}</p>
        <p className="text-sm mb-2">Date: {date}</p>
        <p className="text-sm mb-4">Time: {time}</p>

        <button
          onClick={handlePayment}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
