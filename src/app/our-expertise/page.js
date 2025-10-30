import Hero from '@/components/hero'
import Expertise from '@/components/Expertise'
import React from 'react'

const OurExpertise = () => {
    return (
        <div>
            <Hero
                heading="Our Expertise"
                subtitle="Advocate — Legal Counsel"
                description="We specialize in diverse legal domains, offering expert counsel and representation to safeguard your rights and interests."
                banner="/ui.jpg"
                mobileBanner="/blinndfolded.jpg"
            />
            <Expertise />
        </div>
    )
}

export default OurExpertise
