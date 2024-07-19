import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = () => {
  return (
<>
<Header />
<main className='min-h-screen '>
{/* <Navbar /> */}
 <Outlet />
 

</main>

<Footer />


</>
  )
}

export default Layout
