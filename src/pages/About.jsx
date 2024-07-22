import React, { useEffect } from 'react'
import AboutBanner from './AboutBanner'
import ClientsLogo from '../components/ClientsLogo'
import Faq from './Faq'
import Customers from './Customers'
import Logistics from './Logistics'
import AboutCompany from './AboutCompany'

const About = () => {

  useEffect(() => {
    window.scroll({top: 0, behavior:"smooth"})
  }, [])

  return (
    <>
    <AboutBanner />
    <AboutCompany />
    <Logistics />
    <Customers />
    <Faq />
    <ClientsLogo />
    </>
  )
}

export default About
