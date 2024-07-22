import React, { useEffect } from 'react'
import ServiceBanner from './ServiceBanner'
import Customers from './Customers'
import Review from '../components/Review'
import Goodness from './Goodness'
import ServiceTab from './ServiceTab'

const Services = () => {


  useEffect(() => {
    window.scroll({top: 0, behavior:"smooth"})
  }, [])

  return (
<>

<ServiceBanner />
<ServiceTab />
<Goodness />
<Customers/>


<Review />
</>
  )
}

export default Services
