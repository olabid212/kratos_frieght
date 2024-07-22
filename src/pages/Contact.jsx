import React, { useEffect } from 'react'
import ContactBanner from './ContactBanner'
import GetInTouch from './GetInTouch'
import Faq from './Faq'

const Contact = () => {

  useEffect(() => {
    window.scroll({top: 0, behavior:"smooth"})
  }, [])

  return (
    <>
    <ContactBanner />
    <GetInTouch />
    <Faq />
    
    </>
  )
}

export default Contact
