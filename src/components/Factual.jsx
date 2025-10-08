"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQAndConsultation = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Why should I trust your firm for my case?",
      a: "We provide ethical, transparent, and personalized legal counsel ensuring you are fully supported throughout your legal journey.",
    },
    {
      q: "What types of cases does your law firm handle?",
      a: "Our firm handles civil, criminal, corporate, family, and property-related cases with experienced legal representation.",
    },
    {
      q: "What are your opening hours?",
      a: "We are available Monday to Saturday, 9:00 AM to 7:00 PM.",
    },
    {
      q: "Do you charge for consultations?",
      a: "We offer an initial consultation free of cost to understand your case better.",
    },
  ]

  return (
    <section className="w-full bg-white text-[#0b1526] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C5A25A] mb-2">Any Questions ?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium hover:text-[#C5A25A] transition"
                >
                  <span>Q.{index + 1}: {faq.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#C5A25A]" />
                  ) : (
                    <ChevronDown className="text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="px-5 pb-4 text-gray-700"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[#C5A25A]/12 p-6 shadow-sm"
        >
          <p className="text-[#C5A25A] mb-2">Schedule For</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Free Consultation</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none"
              />
              <select className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none">
                <option>Business Law</option>
                <option>Family Law</option>
                <option>Criminal Law</option>
                <option>Civil Law</option>
              </select>
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-[#f8fafb] border border-gray-200 text-[#0b1526] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#C5A25A] text-black font-semibold py-3 hover:bg-[#b8912c] transition"
            >
              SUBMIT REQUEST →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQAndConsultation
