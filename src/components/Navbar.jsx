import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaRegEnvelope } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdOutlinePhone } from 'react-icons/md'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


   const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
   }
  return (
    <div>
    
      <nav className='px-5 xl:px-40 bg-[url("/Background.png")]   justify-between flex w-full items-center'>
    
    <div className='space-x-10 hidden lg:block'>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/">Home</Link>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/about">About</Link>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/services">Services</Link>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/contact">Contact</Link>

    </div>

    <div className='flex items-center  space-x-5 lg:space-x-14'>
  <div className='flex space-x-3 lg:space-x-8'>
    <FaInstagram className='text-[#ffffff] '/>
    <FaFacebook className='text-[#ffffff]'/>
    <FaXTwitter className='text-[#ffffff]'/>
    <FaLinkedinIn  className='text-[#ffffff]'/>
  </div>
 
   <div className='bg-white py-4 px-4 '>
    <p className='text-sm'>Request Quote</p>
   </div>

    </div>

    <button className='lg:hidden block' onClick={openMenu}>
    {isMenuOpen ? <FaTimes className='text-white text-2xl' /> : <FaBars className='text-white text-2xl' />}
    </button>

      </nav>


{/* for smaller screens sizes */}


<nav className={`w-full lg:hidden space-y-10 transform transition-transform duration-500 delay-150 ease-in-out  bg-[#091242] p-8  ${isMenuOpen ? "" : "hidden"} `}>
 
<div className='flex flex-col space-y-10'>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/">Home</Link>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/about">About</Link>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/services">Services</Link>
    <Link className='size-[16px] text-[#ffffff] font-[600] leading-[21px]' to="/contact">Contact</Link>

    </div>


    {/* <div className='flex items-center space-x-14'> */}
  <div className='flex space-x-8'>
    <FaInstagram className='text-[#ffffff] '/>
    <FaFacebook className='text-[#ffffff]'/>
    <FaXTwitter className='text-[#ffffff]'/>
    <FaLinkedinIn  className='text-[#ffffff]'/>
  </div>


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

</nav>
    </div>
  )
}

export default Navbar
