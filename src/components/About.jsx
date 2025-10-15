"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage({ show }) {
  return (
    <div className="bg-white text-black font-sans overflow-x-hidden">
      {show && (
        <section className="py-5 bg-white text-center px-4 sm:px-6 relative overflow-x-hidden">
          <motion.div className="relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 tracking-wide text-[#C5A25A]">
              About Our Chambers
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg   md:text-xl text-gray-700 font-light">
              Dedicated to upholding justice, integrity, and unwavering advocacy for our clients.
            </p>
          </motion.div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(197,162,90,0.2)_0%,transparent_60%)] pointer-events-none -z-10"></div>
        </section>
      )}

      <section aria-labelledby="about-heading" className="py-8 px-4 sm:px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[260px] sm:h-[360px] md:h-[480px] overflow-hidden shadow-xl border border-[#C5A25A]/20">
              <Image
                src="/hn.jpg"
                alt="Advocate Portrait"
                width={800}
                height={500}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl sm:text-4xl text-[#0b1526] mb-3">
              Meet Our Founder
            </h3>
            <p className="mb-4 text-base sm:text-lg leading-relaxed text-black">
              With over <span className="font-semibold text-[#C5A25A]">a decade of distinguished legal practice</span>, we bring clarity, strategy, and precision to every case. Our chambers specialize in civil, criminal, and corporate law, guided by the belief that justice must be accessible, fair, and fearless.
            </p>

            <p className="text-black leading-relaxed text-base sm:text-lg">
              We pride ourselves on discretion, diligence, and dedication. From courtroom representation to corporate counsel, every client is treated with respect and confidentiality. Advocates carry the responsibility of bridging individuals and justice — by representing clients with integrity we strive to make a tangible difference in people&apos;s lives and contribute to the greater good of society. This passion for law and dedication to service is what drives our firm.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}