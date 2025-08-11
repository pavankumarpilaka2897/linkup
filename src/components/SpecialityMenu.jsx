import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className='flex flex-col items-center gap-6 py-16 text-grey-800'>
      <h1 className='text-3xl font-medium'>Find By Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Search all the doctors as per your requirements and needs. Schedule a one-to-one session with them.</p>
      <div className='flex sm:justify-center gap-10 pt-5 w-full overflow-scroll '>
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/Influencers/${item.speciality}`}>
            <div className="w-30 h-24 overflow-hidden mb-5">
            <img className="w-full h-full object-cover mb-5" src={item.image} alt={item.speciality}/>
            </div>
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
