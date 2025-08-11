import React, { useContext } from 'react'
// import { doctors } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Topdoctors = () => {

  const navigate=useNavigate()
  const {Influencers}=useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-6 text-grey-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Influencers to Book</h1>
      <p className='sm:w-1/3 text-center text:sm'>Connection With great Influencers is just a Click Away.. </p>  
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {Influencers.slice(0,10).map((item,index)=>(
            <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-blue-50 h-60 w-full' src={item.image} alt=''/>
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                       <p className='w-2 h-2 rounded-full bg-green-500'></p>
                       <p>Available</p>
                    </div>
                    <p className='text-grey-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-grey-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/Influencers');scrollTo(0,0)}} className='bg-blue-50 text-grey-600 px-12 rounded-full mt-15'>More</button>
    </div>
  )
}

export default Topdoctors