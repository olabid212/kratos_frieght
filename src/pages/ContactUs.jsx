import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdOutlinePhone } from 'react-icons/md'

const ContactUs = () => {
  return (
    <div>
      <main className='px-5 mb-40 py-20 xl:px-40 w-full bg-[#091242] '>
     
       <div className='flex flex-col md:flex-row gap-20'>

     

     <div className='space-y-5 flex-[40%] '>
        <p className='p-2 text-[14px] font-[400] bg-gray-400 w-fit border-l-2 border-[#FFB629]'>Contact</p>
        <h1 className='text-[#fff] font-[600] text-[35px] leading-[41px]'>Get In Touch With Us
        </h1>
        <p className='text-[#fff] font-[500] text-[16px] leading-[24px]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>


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
     
    


    <div className='flex-[60%] '>
   <form className='flex flex-col max-sm:gap-7  gap-5'>
 
 <div className='flex max-sm:flex-col max-sm:gap-7 gap-10'>
    <input className='bg-[#091242] outline-none border px-6 py-3 w-full text-white' type="text" placeholder='Your name'/>
    <input className='bg-[#091242] outline-none border px-6 py-3 w-full text-white' type="email" placeholder='Email' />
    </div>


    <div className='flex max-sm:flex-col max-sm:gap-7 gap-10'>
        <input className='bg-[#091242] outline-none border px-6 py-3 w-full text-white' type="phone" placeholder='Phone Number' />
        <input className='bg-[#091242] outline-none border px-6 py-3 w-full text-white' type="text" placeholder='City' />
    </div>

    <textarea className='bg-[#091242] outline-none border px-6 py-3 w-full text-white' name="" id="" placeholder='Your Message' rows={5} cols={5}></textarea>

    <button className='px-6 w-fit py-3 bg-yellow-400' type='submit'>Submit Message</button>
   </form>


    </div>





       </div>


       <div className='grid sm:grid-cols-4 grid-cols-2 mt-20 '>
    <img src="/1.png" alt="" />
    <img src="/2.png" alt="" />

    <img src="/3.png" alt="" />

    <img src="/4.png" alt="" />


       </div>

      </main>
    </div>
  )
}

export default ContactUs
