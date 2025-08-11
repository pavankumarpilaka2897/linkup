import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Myappointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Load saved appointments from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(saved);
  }, []);

  // Cancel appointment handler
  const handleCancel = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1); // Remove this appointment
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    toast.success('Appointment cancelled successfully');
  };

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      {appointments.length > 0 ? (
        appointments.map((item, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-4 sm:gap-6 py-4 border-b items-center"
            key={index}
          >
            {/* Image */}
            <div>
              <img
                className="w-32 h-32 object-cover bg-indigo-50 rounded-lg"
                src={item.image}
                alt={item.influencer}
              />
            </div>

            {/* Appointment Info */}
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral font-semibold">{item.influencer}</p>
              {item.degree && <p>{item.degree}</p>}
              {item.speciality && <p>{item.speciality}</p>}
              <p className="text-sm mt-2">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                {item.date} | {item.time}
              </p>
              <p className="mt-1 text-sm text-neutral-700 font-medium">
                Fee: ₹{item.amount}
              </p>
            </div>

            {/* Cancel Button */}
            <div className="flex flex-col gap-2">
            <button
  onClick={() => handleCancel(index)}
  className="text-sm text-black border border-red-500 rounded-full px-4 py-2 
             hover:bg-red-600 hover:text-white transition-colors duration-300"
>
  Cancel Appointment
</button>

            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-6">No appointments booked yet.</p>
      )}
    </div>
  );
};

export default Myappointments;
