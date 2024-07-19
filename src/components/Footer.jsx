import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { MdOutlinePhone } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='px-5 xl:px-40 w-full py-10 bg-[#091242] flex flex-col lg:flex-row gap-10'>
      
      <div className='flex-[30%]'>

      <img className='h-[36px] mb-[70px]' src="/Logo (8).png" alt="" />

        
      <div className='space-y-4'>
      <p className='text-[#ffffff] w-[350px]'>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
      <div className='flex items-center space-x-3'>
      <div className='bg-[#273270] size-[63px] flex items-center justify-center rounded-full'>
        <FaRegEnvelope className='text-[#F6B426] size-[22px]' />
      </div>

      <div className='text-[#ffffff]'>
        <p className='text-[14px]'>Email <br />
         contact@logistics.com
        </p>
      </div>
     </div>

     <div className='flex items-center space-x-3'>
      <div className='bg-[#273270] size-[63px] flex items-center justify-center rounded-full'>
        <MdOutlinePhone className='text-[#F6B426] size-[22px]' />
      </div>

      <div className='text-[#ffffff]'>
        <p className='text-[14px]'>Call Us  <br />
       (00) 112 365 489
 
        </p>
      </div>
     </div>
     </div>

      </div>

     <div className='flex-[70%] px-4 flex justify-between gap-10 flex-col md:flex-row'>
      <div>
     
      <h1 className='mb-[40px] text-[#ffffff] font-[500] text-[25px]'>Pages</h1>
      <ul className='space-y-4'>
      <li><Link className='text-[#ffffff] font-[500] text-[16px]' to="/about">About</Link></li>
      <li><Link className='text-[#ffffff] font-[500] text-[16px]' to="/services">Services</Link></li>
      <li><Link className='text-[#ffffff] font-[500] text-[16px]' to="/">Request</Link></li>
      <li><Link className='text-[#ffffff] font-[500] text-[16px]' to="/contact">Contact Us</Link></li>
     </ul>
     </div>
  
    <div>
      <h1 className='mb-[40px] font-[500] text-[#ffffff] text-[25px]'>Utility</h1>
     
      <ul className='space-y-4'>
      <li><Link className='font-[500] text-[#ffffff] text-[16px]' to="/">Style Guide</Link></li>
      <li><Link className='font-[500] text-[#ffffff] text-[16px]' to="/">Changelog</Link></li>
      <li><Link className='font-[500] text-[#ffffff] text-[16px]' to="/">Licenses</Link></li>
      <li><Link className='font-[500] text-[#ffffff] text-[16px]' to="/">Protected</Link></li>
      <li><Link className='font-[500] text-[#ffffff] text-[16px]' to="/">Not Found</Link></li>

     </ul>  
     </div>
     
    <div>
   <h1 className='mb-[40px] font-[500] text-[#fff] text-[25px]'>Subscribe</h1>
    <form >
      <input className='bg-[#4E5683] px-6 w-full py-3 border-2 border-gray-500 outline-none' type="email" placeholder='email here'/> <br /> <br />
      <button className='bg-[#FFB629] w-full px-6 py-3 text-[#fff] '>Send Now</button>
      </form> 
    

    </div>

    </div>
    

      </footer>
    </div>
  )
}

export default Footer
