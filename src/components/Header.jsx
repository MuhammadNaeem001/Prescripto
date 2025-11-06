import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#5F6FFF] rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">

      {/*-------------Left Side--------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[8vw]'>
        <p className='text-3xl md:text-4xl lg:text-[2.7rem] text-white font-semibold leading-tight md:leading-snug max-w-[420px]'>
          Book Appointment<br />With Trusted Doctors
        </p>

        <div className='flex flex-col md:flex-row items-center gap-2 text-white text-sm font-light'>
          <img src={assets.group_profiles} alt="" className=' w-28' />
          <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>
            schedule your appointment hassle-free.
          </p>
        </div>

        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Book appointment <img  className="w-3"src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/*-------------Right Side--------------- */}
      <div className='md:w-1/2 relative flex justify-center items-end'>
        <img
          className='w-full h-auto rounded-lg md:translate-y-3 mb-20' // 👈 Slightly lower for perfect visual balance
          src={assets.header_img}
          alt="Doctor"
        />
      </div>

    </div>
  )
}

export default Header
