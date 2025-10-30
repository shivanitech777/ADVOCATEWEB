
import ContactPage from '@/components/contact'
import Hero from '@/components/hero'
import React from 'react'

const Service = () => {
  return (
    <div className=' min-h-screen'>
      <Hero heading="Contact Us" banner="/zz.jpg" mobileBanner="/zz.jpg" show={false} />
      <ContactPage />
    </div>
  )
}

export default Service