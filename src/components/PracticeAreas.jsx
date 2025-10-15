"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LegalServicesSection() {
  const services = [
    {
      title: "Civil Law",
      desc: "Comprehensive civil legal services including property disputes, money recovery, and contract matters.",
      img: "/oooo.jpg", 
      points: ["Partition Suit", "Money Recovery", "Real Estate"],
    },
    {
      title: "Family Law",
      desc: "Compassionate guidance through family legal matters with a focus on protecting your family's best interests.",
      img: "/oh.jpg",
      points: ["Mutual Divorce", "Maintenance", "Child Custody"],
    },
    {
      title: "Criminal Law",
      desc: "Expert defense in criminal cases with a focus on protecting your rights and ensuring fair treatment under the law.",
      img: "/ysz.jpg",
      points: ["Sexual Offence", "Fraud", "Bail"],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understanding",
      desc: "We believe in devoting sufficient time, listening to our clients while understanding their issues.",
      icon: "💬",
    },
    {
      number: "02",
      title: "Strategic Planning",
      desc: "Our team formulates a strategy to aggressively defend and contest your stance.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Implementing The Steps",
      desc: "We believe in a wholesome execution of the plan in order to draw in fruitful results.",
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#fdfbf7] to-[#f7f2e9] py-20 px-6">
      
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0b1526]">What We Offer</h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto leading-relaxed">
            Comprehensive, timely and strategic legal services tailored to your
            needs across civil, family and criminal law.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C5A25A] to-[#B89545] mx-auto mt-6 rounded-full" />
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(197,162,90,0.25)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-[#F3EBD3] shadow-sm transition-all duration-500"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={srv.img}
                  alt={srv.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#0b1526] mb-2">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {srv.desc}
                </p>

                <h4 className="font-semibold text-[#0b1526] mb-2">
                  Our Services
                </h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  {srv.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#C5A25A] font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="/contact"
                    className="block text-center w-full bg-[#B89545] text-white font-semibold py-2  hover:bg-[#a28033] transition-all duration-300"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#0b1526]">
            Our Legal Process
          </h2>
          <p className="text-gray-600 mt-2">
            Our steps to achieve success for every client.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px rgba(197,162,90,0.25)",
                }}
                className="bg-white border border-[#E6DEC3] rounded-xl p-8 transition-all duration-500"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-[#B89545] text-white text-2xl w-14 h-14 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <span className="text-[#B89545] font-bold text-lg">
                    {step.number}
                  </span>
                  <h4 className="text-xl font-semibold text-[#0b1526] mt-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
