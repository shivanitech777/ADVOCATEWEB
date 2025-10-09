"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://www.sci.gov.in", label: "Supreme Court" },
  { href: "https://www.delhihighcourt.nic.in/web", label: "High Court" },
  { href: "https://delhidistrictcourts.nic.in/", label: "District Court" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];


export default function Header() {
  const [open, setOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="w-full bg-white/70 backdrop-blur sticky top-0 z-50 border-b border-gray-200 shadow-sm"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ rotate: 2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/logo2.jpg"
                height={100}
                width={100}
                alt="Advocate Profile"
                className="shadow-lg h-16 w-16 object-cover  rounded-full"
              />
            </motion.div>
            <div className="ml-3">
              <span className="text-xl  text-black font-serif">
                Indian Law Masters
              </span>
              <br />
              <span className="text-sm text-gray-600 font-serif">
                Legal Counsel & Advisor
              </span>
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-[#C5A25A] transition-colors duration-300 font-serif"
                >
                  <motion.span whileHover={{ y: -2 }}>
                    {item.label}
                  </motion.span>
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] bg-[#C5A25A] w-full origin-left scale-x-0"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        
        <motion.div whileTap={{ scale: 0.9 }} className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 bg-black/5 hover:bg-black/10 rounded-md transition"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </motion.div>
      </div>

    
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden w-full bg-white/95 border-t border-gray-200 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <ul className="flex flex-col gap-3">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    custom={i}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#C5A25A] font-serif transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
