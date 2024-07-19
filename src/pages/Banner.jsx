import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='bg-[url("/Photo.png")] bg-cover w-full'>
       <Navbar />
       <main className='h-[100vh] px-5 lg:px-40 grid items-center '>
        <div className='space-y-5 lg:w-[600px] w-[400px]'>
        <p className='text-[14px] font-[400] border-l-2 ps-2 text-white border-[#FFB629]'>Logistics & Supply Chain Solutions</p>
      <h1 className='leading-[71px] text-[60px] font-[700] text-[#fff]'>Your Gateway 
      to any Destination in the World</h1>
      <p className='text-[16px] leading-[24px] font-[500] text-[#fff]'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
      <div className=''>
        <Link className='bg-[#FFDA56] px-6 py-3 text-[#23212A]' to="/">Explore More</Link>
      </div>
      </div>
       </main>
    </div>
  )
}

export default Banner
