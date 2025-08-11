import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { FaInstagram,FaYoutube} from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Appointments = () => {
  const navigate = useNavigate();
  const { Infid } = useParams();
  const { Influencers, currsymbol, token } = useContext(AppContext);

  const [infdata, setInfdata] = useState(null);
  const [inflsot, setinfslot] = useState([]);
  const [slotindex, setslotindex] = useState(null); 
  const [slottime, setslottime] = useState('');
  const daysofweek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  // Fetch Influencer Data
  const fetchInfData = async () => {
    try {
      if (!Influencers || !Array.isArray(Influencers)) {
        console.warn('Influencers data is not available yet.');
        return;
      }
      const foundInfluencer = Influencers.find(
        (inf) => String(inf._id) === String(Infid)
      );
      setInfdata(foundInfluencer);
    } catch (error) {
      console.error('Error fetching influencer data:', error);
    }
  };

  // Generate Available Slots
  const getavailableslots = async () => {
    setinfslot([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i);

      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentdate.getDate()) {
        currentdate.setHours(currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10);
        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeslots = [];
      while (currentdate < endtime) {
        let formattedtime = currentdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeslots.push({
          datetime: new Date(currentdate),
          time: formattedtime
        });
        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }
      setinfslot((prev) => [...prev, timeslots]);
    }
  };

  useEffect(() => {
    fetchInfData();
  }, [Influencers, Infid]);

  useEffect(() => {
    if (infdata) {
      getavailableslots();
    }
  }, [infdata]);

  // Booking Handler with Validation
  const handleBook = () => {

    if (!token) {
      toast.error('You must be logged in to book an appointment.');
      navigate('/login');
      return;
    }
    
    if (slotindex === null || !slottime) {
      toast.error('Please select both a date and a time slot before booking.');
      return;
    }

    const selectedDate = inflsot[slotindex][0].datetime.toDateString();

    navigate('/payment', { 
      state: { 
        amount: infdata.fees,
        influencer: {
          name: infdata.name,
          image: infdata.image,
          degree: infdata.degree,
          speciality: infdata.speciality
        },
        date: selectedDate,
        time: slottime
      } 
    });
  };

  return (
    infdata && (
      <div>
        {/* Influencer Profile */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img
              className='bg-primary w-full sm:max-w-72 rounded-lg'
              src={infdata.image}
              alt='image'
            />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm: mx-0 mt-[-80px] sm:mt-0 '>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
              {infdata.name} <img className='w-5' src={assets.verified_icon} alt='' />
            </p>
            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>
                {infdata.degree} - {infdata.speciality}
              </p>
            </div>

            {/* About Section */}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-5'>
                About <img src={assets.info_icon} alt='' />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{infdata.about}</p>

              {/* Instagram Link */}
              {infdata.Instagram && (
                <a
                  href={infdata.Instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 mt-3 text-sm text-blue-600 hover:underline'
                >
                  <FaInstagram className='w-4 h-4 text-blue-600' />
                  Visit Instagram
                </a>
              )}
              {infdata.youtube && (
                <a
                  href={infdata.youtube}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 mt-3 text-sm text-blue-600 hover:underline'
                >
                  <FaYoutube className='w-4 h-4 text-blue-600' />
                  Visit Youtube
                </a>
              )}
            </div>

            {/* Fee */}
            <p className='text-gray-500 font-medium mt-4'>
              Appointment Fee:
              <span className='text-gray-600'>
                {currsymbol}
                {infdata.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking Slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll'>
            {inflsot.length &&
              inflsot.map((item, index) => (
                <div
                  onClick={() => setslotindex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotindex === index ? 'bg-primary text-white' : 'border border-gray-200'
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          {/* Time Slots */}
          <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
            {inflsot.length &&
              slotindex !== null &&
              inflsot[slotindex].map((item, index) => (
                <p
                  onClick={() => setslottime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slottime
                      ? 'bg-primary text-white'
                      : 'text-gray-400 border border-gray-300'
                  }`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          {/* Book Appointment Button */}
          <div>
            <button
              onClick={handleBook}
              disabled={slotindex === null || !slottime}
              className={`px-14 py-3 rounded-full mt-10 text-sm font-light ${
                slotindex === null || !slottime
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-primary text-white'
              }`}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointments;
