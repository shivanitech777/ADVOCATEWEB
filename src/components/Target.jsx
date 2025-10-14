"use client"

import React from "react"
import { motion } from "framer-motion"
import { Scale, Gavel, FileText } from "lucide-react"
import Image from "next/image"


const TargetSection = () => {
  const items = [
    {
      icon: <Scale size={36} strokeWidth={1.5} className="text-[#C5A25A]" />,
      title: "Understand Your Needs",
      desc: "We take time to listen and build a strategy tailored to your situation.",
      img: "/hn.jpg",
    },
    {
      icon: <FileText size={36} strokeWidth={1.5} className="text-[#C5A25A]" />,
      title: "Clear Communication",
      desc: "You get timely updates and straightforward explanations at every step.",
      img: "/building.jpg",
    },
    {
      icon: <Gavel size={36} strokeWidth={1.5} className="text-[#C5A25A]" />,
      title: "Effective Outcomes",
      desc: "Focused, practical legal solutions aimed at achieving the best result.",
      img: "/ladki.jpg",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  const itemAnim = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (

    <>
    <section className="w-full bg-white text-[#0b1526] py-10 px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#0b1526]"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            Our Focused Approach <span className="text-[#C5A25A]">for Clients</span>
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            viewport={{ once: true }}
            >
            We combine careful preparation, clear communication, and strategic execution to secure
            outcomes that protect what matters to you.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          >
          {items.map((item, i) => (
            <motion.div
            key={i}
            variants={itemAnim}
            className="flex flex-col bg-white border border-[#F1F1F1] hover:border-[#E6D8B2] transition-colors duration-200"
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={item.img} alt={item.title} width={1200} height={600} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1526]/30 to-transparent"></div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center border border-[#E8E8E8] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0b1526]">{item.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{item.desc}</p>
                <a className="inline-block mt-auto text-[#C5A25A] font-medium" href="#">Learn more →</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section> 
          {/* { <section className="py-12 px-4 sm:px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-[Playfair_Display] text-[#0b1526]">
                Our Legal Team
              </h3>
              <p className="text-gray-600 mt-2 mb-6 font-[Playfair_Display] text-base sm:text-lg">
                A team of experienced advocates, associates, and legal researchers dedicated to serving your cause with integrity and excellence.
              </p>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Advocate R. Sharma",
                    role: "Senior Counsel",
                    img: "/view.jpg",
                    email: "r.sharma@example.com",
                  },
                  {
                    name: "Advocate P. Verma",
                    role: "Litigation Head",
                    img: "/hn.jpg",
                    email: "p.verma@example.com",
                  },
                  {
                    name: "Advocate S. Kaur",
                    role: "Family Law Specialist",
                    img: "/p.jpg",
                    email: "s.kaur@example.com",
                  },
                ].map((m, i) => (
                  <div key={i} className="bg-white border border-[#F1F1F1]">
                    <div className="w-full h-56 overflow-hidden bg-gray-50">
                      <Image src={m.img} alt={m.name} width={800} height={500} className="w-full h-full object-cover object-center" />
                    </div>
    
                    <div className="p-6">
                      <h4 className="font-[Playfair_Display] text-xl text-[#0b1526] mb-1">{m.name}</h4>
                      <p className="text-gray-600 mb-4">{m.role}</p>
                      <div className="flex items-center justify-between">
                        <a href={`mailto:${m.email}`} className="text-[#C5A25A] font-medium">Contact</a>
                        <a href="#" className="text-sm text-gray-500">View profile →</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> } */}
          
      {/* <section className="py-8 px-4 sm:px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg bg-gradient-to-r from-white via-white to-white p-1"
          >
            <div className="bg-white p-6 md:p-8 rounded-md flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-6">
              <div className="text-center md:text-left md:flex-1">
                <h3 className="text-2xl md:text-3xl font-[Playfair_Display] text-[#0b1526]">Schedule a Confidential Consultation</h3>
                <p className="text-gray-600 mt-2 text-base md:text-lg">
                  Let our experienced advocates guide you through every legal challenge with honesty, precision, and strategy. We offer private consultations tailored to your needs.
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#C5A25A] text-black font-[Playfair_Display] rounded-md hover:bg-[#b8964f] transition-all"
                >
                  Book a Consultation
                </a>
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#C5A25A] text-[#C5A25A] rounded-md hover:bg-[#C5A25A] hover:text-black transition-all"
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
     */}
    
    
   
              </>
  )
}

export default TargetSection