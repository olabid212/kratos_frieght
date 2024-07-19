import React, { useState } from 'react'
import { FaBars, FaEnvelope, FaRegEnvelope, FaTimes } from 'react-icons/fa'

import { GoClock } from 'react-icons/go'
import { MdOutlinePhone } from 'react-icons/md'

const Header = () => {

   

  return (
    <div>
      <header className='w-full px-5 xl:px-40 flex items-center bg-[#091242] py-8 justify-between'>
      
      <div className='h-[36px]'>
        <img className='h-[36px]' src="/Logo (8).png" alt="" />
      </div>


       
      <div className='md:flex  xl:space-x-10 space-x-4 hidden '>
     
     <div className='flex items-center space-x-3'>
      <div className='bg-[#273270] xl:size-[63px] size-[37px]  flex items-center justify-center rounded-full'>
        <GoClock className='text-[#F6B426] size-[22px]' />
      </div>

      <div className='text-[#ffffff]'>
        <p className='xl:text-[14px] text-[11px]'>Mon - Sat 9.00 - 18.00 <br />
        Sunday Closed
        </p>
      </div>
     </div>


     <div className='flex  items-center space-x-3'>
      <div className='bg-[#273270] xl:size-[63px] size-[37px] flex items-center justify-center rounded-full'>
        <FaRegEnvelope className='text-[#F6B426] size-[22px]' />
      </div>

      <div className='text-[#ffffff]'>
        <p className='xl:text-[14px] text-[11px]'>Email <br />
         contact@logistics.com
        </p>
      </div>
     </div>

     <div className='flex  items-center space-x-3'>
      <div className='bg-[#273270] xl:size-[63px] size-[37px] flex items-center justify-center rounded-full'>
        <MdOutlinePhone className='text-[#F6B426] xl:size-[22px] size-[18px]' />
      </div>

      <div className='text-[#ffffff] '>
        <p className='xl:text-[14px] text-[11px]'>Call Us  <br />
       (00) 112 365 489
 
        </p>
      </div>
     </div>
     



     
      </div>




   
      
    


      

      </header>
    </div>
  )
}

export default Header

