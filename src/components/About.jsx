"use client";

import { motion } from "framer-motion";
import { Briefcase, Scale, BookOpen } from "lucide-react";
import MissionValues from "./MissionValues";
import Count from "./Count";
import TargetSection from "./Target";
import Image from "next/image";
import ProcessSection from "./ui/process";

export default function AboutPage({ show }) {
  return (
    <div className="min-h-screen bg-white text-black font-[Poppins]">
      {show && (
        <section className="py-5 bg-white text-center px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl  font-bold mb-6 tracking-wide text-[#C5A25A]">
              About Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 font-light">
              Advocates of justice, integrity, and unwavering commitment to your
              rights.
            </p>
          </motion.div>

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(197,162,90,0.2)_0%,transparent_60%)]"></div>
        </section>
      )}

      <section className="py-8 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/hn.jpg"
              height={500}
              width={500}
              alt="Advocate Profile"
              className="shadow-xl w-full h-[500px] object-cover object-top border border-[#C5A25A]/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-[Playfair_Display] text-[#0b1526] mb-6">
              Meet Our Founder
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-black">
              With over{" "}
              <span className="font-semibold text-[#C5A25A]">
                10 years of legal experience
              </span>
              we specialize in civil, criminal, and corporate law. Every case we
              take represents our passion for justice and the belief that
              fairness is a right — not a privilege.
            </p>
            <p className="text-black leading-relaxed">
              Our practice is built upon the pillars of confidentiality, trust,
              and precision. Whether in litigation, corporate affairs, or
              personal counsel, our aim is to protect your interests and deliver
              justice with unwavering dedication. Philosophy: Briefly explain
              your legal philosophy or mission. For instance, you could
              emphasize a client-first approach, a commitment to justice, or a
              passion for defending specific rights.
            </p>
          </motion.div>
        </div>
      </section>
    
      <MissionValues />


      <Count />

      <TargetSection />

   
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#0b1526]">Meet Our Team</h3>
          <p className="text-gray-600 mt-2 mb-6">Experienced advocates and support staff dedicated to your case.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              name: 'Advocate R. Sharma',
              role: 'Senior Counsel',
              img: '/view.jpg',
            }, {
              name: 'Advocate P. Verma',
              role: 'Litigation Lead',
              img: '/hn.jpg',
            }, {
              name: 'Advocate S. Kaur',
              role: 'Family Law Specialist',
              img: '/p.jpg',
            }].map((m, i) => (
              <div key={i} className="p-4 border border-[#E6E6E6] shadow-sm">
                <div className="w-full h-44 bg-gray-100 overflow-hidden">
                  <Image src={m.img} alt={m.name} width={600} height={300} className="object-cover w-full h-full" />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#0b1526]">{m.name}</h4>
                  <p className="text-gray-600 text-sm">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      
      <ProcessSection />

   
      <section className="py-12 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-[#0b1526]">Ready to discuss your case?</h3>
          <p className="text-gray-600 mt-3">Contact our team for a confidential consultation. We offer a clear plan and honest fees.</p>
          <div className="mt-6">
            <a href="/contact" className="inline-block px-6 py-3 bg-[#C5A25A] text-black font-semibold">Book a Consultation</a>
          </div>
        </div>
      </section>
    </div>
  );
}
