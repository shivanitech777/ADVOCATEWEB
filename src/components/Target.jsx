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
    <section className="w-full bg-white text-[#0b1526] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0b1526]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Focused Approach <span className="text-[#C5A25A]">for Clients</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          We combine careful preparation, clear communication, and strategic execution to secure
          outcomes that protect what matters to you.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemAnim}
              className="bg-white border border-[#C5A25A]/20 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200"
            >
              {/* Image on top */}
              <div className="w-full h-44 overflow-hidden">
                <Image src={item.img} alt={item.title} width={1200} height={600} className="w-full h-full object-cover object-center" />
              </div>

              <div className="p-6">
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-[#C5A25A]/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0b1526]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TargetSection
