"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const courts = [
  {
    name: "Supreme Court of India",
    img: "/SUPREME.jpg",
    content:
      "The Supreme Court of India stands as the highest judicial forum and final court of appeal, upholding the Constitution and protecting the fundamental rights of citizens. It delivers landmark judgments that shape the course of justice and democracy in India.",
    reverse: false,
  },
  {
    name: "High Court",
    img: "/HIGH.jpg",
    content:
      "High Courts operate at the state level, serving as the principal civil courts of original jurisdiction and appellate courts for subordinate courts. They play a vital role in maintaining judicial discipline and ensuring that justice reaches every citizen.",
    reverse: true,
  },
  {
    name: "District Court",
    img: "/delhi.jpg",
    content:
      "District Courts are the foundation of India's judicial system, delivering justice at the grassroots level. They handle both civil and criminal cases, ensuring the rule of law is enforced across every district of the nation.",
    reverse: false,
  },
];

export default function Court() {
  return (
    <section
      className="bg-[#f8f6f1] text-gray-900 py-24 px-6 md:px-16 font-sans"
      style={{ fontFamily: "'Lora', serif" }}
    >
      <div className="max-w-7xl mx-auto">
      
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wide"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            The Pillars of India’s Judiciary
          </h1>
          <motion.div
            className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-yellow-600 to-yellow-400"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg font-normal leading-relaxed">
            A journey through the cornerstone courts that uphold justice and
            safeguard the rights of every citizen.
          </p>
        </motion.div>

        <div className="space-y-24">
          {courts.map((court, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                court.reverse ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
             
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="overflow-hidden shadow-xl"
                >
                  <Image
                    src={court.img}
                    alt={court.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>

            
              <div className="md:w-1/2 space-y-4">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-yellow-700"
                  style={{ fontFamily: "'Merriweather', serif" }}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {court.name}
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg"
                  style={{ fontFamily: "'Lora', serif" }}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {court.content}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
