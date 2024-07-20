import React from 'react'

const WhyUs = () => {
  return (
    <div>
        <div className='px-5   xl:px-40  mb-40'>
      <main className='w-full -mt-[200px]  p-10 bg-white bg-[url("/Photo (1).png")]  grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-20 '>
      
      <div className=' space-y-4 '>
        <p className='p-2 text-[14px] font-[400] bg-gray-100 w-fit border-l-2 border-[#FFB629]'>Why Us</p>
        <h1 className='text-[#1C1F35] font-[600] text-[35px] leading-[41px]'>We provide full range global logistics solution
        </h1>

        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
        <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <div className='flex items-center space-x-3'>
            <img src="/Icon (9).png" alt="" />
            <p>Delivery on Time</p>
        </div>

        <div className='flex items-center space-x-3'>
            <img src="/Icon (10).png" alt="" />
            <p>Optimized Travel Cost</p>
        </div>
       </div>


      

        <div className='relative'>
        <img src="/Image.jpg" alt="" />
        <div className='bg-white p-5 absolute top-[200px] -left-[80px] z-10 '>
            <img className='z-10 w-full' src="/Photo (2).png" alt="" />
        </div>
        </div>

         



      </main>


   <div className='flex justify-center sm:mt-[50px]  mt-[200px]'>

  <div className='flex space-x-3 border border-l-0 p-5 items-center w-fit '>

    
      <p>1294</p>

    <div className='flex space-x-3 items-center'>
      <img className='size-5' src="/Pattern.png" alt="" />
      <p>Delivered Packages</p>
    </div>
  </div>

  <div className='flex space-x-3 border items-center border-r-0 p-5 w-fit '>

    
      <p>3594</p>

    <div className='flex space-x-3 items-center'>
      <img className='size-5' src="/Pattern.png" alt="" />
      <p>Satisfied Clients</p>
    </div>
  </div>



   </div>

      </div>
    </div>
  )
}

export default WhyUs
