'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero({ heading, subtitle, description, banner, mobileBanner }) {
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {

    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const generateParticles = () => {
      return [...Array(20)].map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        nextX: Math.random() * window.innerWidth,
        nextY: Math.random() * window.innerHeight
      }));
    };

    setParticles(generateParticles());


    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[65vh] flex items-center justify-center">

      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10" />

        <Image src={mobileBanner} fill className='bg-contain md:hidden' alt="Banner" />
        <Image src={banner} fill className='hidden md:block bg-contain' alt="Banner" />
      </div>

      <div className="absolute inset-0 z-20">
        <div className="absolute w-full h-full">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#C5A25A]"
              initial={{ x: particle.x, y: particle.y, opacity: 0 }}
              animate={{ x: particle.nextX, y: particle.nextY, opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: Math.random() * 6 + 6, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>
      </div>


      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">{heading}</h1>
            {subtitle && <p className="mt-3 text-sm uppercase tracking-wider text-[#C5A25A]">{subtitle}</p>}
            {description && <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">{description}</p>}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/contact" className="inline-flex items-center px-6 py-3 bg-[#C5A25A] text-black font-semibold rounded-none hover:opacity-95">Book Consultation</a>
              <a href="/service" className="inline-flex items-center px-6 py-3 border border-[#C5A25A] text-[#C5A25A] font-medium rounded-none">Our Services</a>
            </div>
          </motion.div>
        </motion.div>
      </div>


      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-30"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-12 h-12" />
      </motion.button>
    </div>
  );
}
