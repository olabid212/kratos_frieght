import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = () => {
  return (
<>
<Header />
<main className='min-h-screen overflow-hidden'>

 <Outlet />
 

</main>

<Footer />


</>
  )
}

export default Layout
