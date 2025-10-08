"use client";

import { motion } from "framer-motion";
import { Scale, Briefcase, BookOpen } from "lucide-react";
import Image from "next/image";

const MissionValues = () => {
  const container = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-white text-[#0b1526] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="space-y-6"
        >
          <motion.div variants={item}>
            <h3 className="text-4xl font-semibold text-[#C5A25A]">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We deliver clear, ethical legal guidance to protect your rights and secure practical
              outcomes. Our mission is to make justice accessible, to act decisively when needed,
              and to support clients with integrity at every step.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="h-[2px] w-16 bg-[#C5A25A]"></div>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-gray-600 leading-relaxed">
              We combine strategic thinking with personal attention — communicating clearly,
              managing expectations, and building legal strategies that work.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-4 w-full overflow-hidden border border-[#C5A25A]/10 shadow-md"
          >
          
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src="/building.jpg"
                alt="Courthouse building"
                width={1200}
                height={600}
                className="w-full h-48 object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="border border-[#C5A25A]/20 p-6"
        >
          <motion.h3 variants={item} className="text-3xl font-semibold text-[#C5A25A] mb-8 text-center">
            Core Values
          </motion.h3>

          <motion.div variants={item} className="grid gap-6">
            {[
              {
                icon: <Scale className="w-10 h-10 text-[#C5A25A]" />,
                title: "Justice",
                desc: "Relentless advocacy that defends your rights and delivers fair results.",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-[#C5A25A]" />,
                title: "Expertise",
                desc: "Deep legal experience and tactical thinking across practice areas.",
              },
              {
                icon: <BookOpen className="w-10 h-10 text-[#C5A25A]" />,
                title: "Integrity",
                desc: "Honest advice, clear fees, and principled representation at every stage.",
              },
            ].map((value, idx) => (
              <motion.div key={idx} variants={item} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#C5A25A]/10 text-[#C5A25A]">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-lg text-[#0b1526] font-semibold mb-1">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValues;
