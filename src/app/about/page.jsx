import AboutPage from '@/components/About'
import Hero from '@/components/hero'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <Hero
        heading="About Us"
        subtitle="Advocate — Legal Counsel"
        description="We are a dedicated legal practice focused on protecting rights and delivering practical solutions for individuals and businesses."
        banner="/view.jpg"
        mobileBanner="/zz.png"
      />
      <AboutPage />
    </div>
  )
}

export default page