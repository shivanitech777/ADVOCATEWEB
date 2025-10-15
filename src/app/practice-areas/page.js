import OfferingsSection from '@/components/PracticeAreas'
import Hero from '@/components/hero'
import React from 'react'

const Service = () => {
  return (
    <div className=' min-h-screen'>
      <Hero
        heading="Practice Areas"
        subtitle="Expert Legal Representation"
        description="Specialized practice areas including civil, criminal, family, and corporate law — tailored to your needs."
        banner="/hn.jpg"
        mobileBanner="/hn.jpg"
      />
      <OfferingsSection />


    </div>
  )
}

export default Service