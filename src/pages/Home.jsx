import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import WhatWeDo from './WhatWeDo'
import WhyUs from './WhyUs'
import WhyUsDetails from '../components/WhyUsDetails'
import Work from './Work'
import WorkBg from '../components/WorkBg'
import Customers from './Customers'
import WhyChoose from './WhyChoose'
import ContactUs from './ContactUs'
import PreFooter from '../components/PreFooter'

const Home = () => {
  return (
    <div className=''>
      
   <Banner />
   <WhatWeDo />
   <WhyUsDetails />
   <WhyUs />
   <Work />
   <WorkBg />
   <Customers />
   <WhyChoose />
   <ContactUs />
   <PreFooter />
    </div>
  )
}

export default Home
