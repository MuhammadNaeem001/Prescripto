import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className='flex bg-[#5F6FFF] rounded-lg px-3 sm:px-10 lg:px-14  lg:px-12 my-20 md:mx-10'>
    {/* ---------------Left Side--------------- */}
    <div className=' flex-1 py-8 md:py-16 md:py-10 lg:py-24 lg:pl-5'>

        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5-xl font-semobold text-white '>
        <p>Book Appointment</p>
        <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scroll(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-6 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
    </div>
   
         
   
    {/* ---------------Right Side--------------- */}
    <div className='hidden  md:block md:w-1/1.5 lg: w-[370px] relative'>
         <img className='w-full absolute bottom-0 right-0 mx-w-md' src={assets.appointment_img} alt=""/>
    </div>


    </div>
  )
}

export default Banner