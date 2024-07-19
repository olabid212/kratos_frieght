import React from 'react'

const WhyUs = () => {
  return (
    <div>
      <main className='w-full my-40 px-5 lg:px-40 bg-[url("/Photo (1).png")]  grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-20 '>
      
      <div className='flex-[50%] space-y-4 '>
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


       <div className='flex-50% relative'>

        <div>
        <img src="/Image.jpg" alt="" />
        </div>

        <div className='bg-white p-5 absolute top-[250px] -left-[80px]'>
            <img src="/Photo (2).png" alt="" />
        </div>
       </div>
         

      </main>
    </div>
  )
}

export default WhyUs
