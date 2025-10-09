import Areas from '@/components/Areas'
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
      <Areas />

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0b1526]">What we offer</h2>
          <p className="text-gray-600 mt-3">Practical legal solutions across a range of practice areas to protect your interests and achieve results.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-[#C5A25A]/12">
              <h4 className="font-semibold text-[#0b1526] mb-2">Litigation & Dispute Resolution</h4>
              <p className="text-gray-600 text-sm">Representation in courts and tribunals, strategic litigation planning, and alternative dispute resolution.</p>
            </div>
            <div className="p-6 border border-[#C5A25A]/12">
              <h4 className="font-semibold text-[#0b1526] mb-2">Corporate & Commercial</h4>
              <p className="text-gray-600 text-sm">Contract drafting, compliance advice, business disputes, and transactional support for companies.</p>
            </div>
            <div className="p-6 border border-[#C5A25A]/12">
              <h4 className="font-semibold text-[#0b1526] mb-2">Family & Personal</h4>
              <p className="text-gray-600 text-sm">Divorce, custody, maintenance, and compassionate representation for sensitive family matters.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Why clients choose us</h3>
            <ul className="mt-4 grid md:grid-cols-3 gap-4 text-gray-600">
              <li>Personalized strategies</li>
              <li>Transparent fees</li>
              <li>Proven track record</li>
              <li>Clear communication</li>
              <li>Fast response times</li>
              <li>Ethical representation</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-[#C5A25A] text-black font-semibold">Get a Consultation</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service