import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

import AOS from "aos";
import 'aos/dist/aos.css'






const ServiceBanner = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1721563967/Image_5_aqs7z3.png")] bg-cover w-full mb-40 h-[70vh]'>
      <Navbar />
   <img src="" alt="" />
      <section className="px-5 xl:px-40  grid items-center min-h-full">
        <div className="" data-aos='fade-right' data-aos-duration='600'>
          <p className="p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-4 border-[#FFB629]">
            Services
          </p>
          <h1 className="text-[#fff] font-[700] text-[60px] leading-[71px]">
            Our Logistics Services
          </h1>
        </div>
      </section>
    </div>
  )
}

export default ServiceBanner
