import React from 'react'
import AboutBanner from './AboutBanner'
import ClientsLogo from '../components/ClientsLogo'
import Faq from './Faq'
import Customers from './Customers'
import Logistics from './Logistics'
import AboutCompany from './AboutCompany'

const About = () => {
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
