"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://www.sci.gov.in", label: "Supreme Court" },
    { submenu : [
      { href: "https://ecourts.gov.in/ecourts_home/index.php"  , label: "Delhi high Court" },
      { href: "https://allahabadhighcourt.in/" , label: "Allahabad High Court" },
      { href: "https://bombayhighcourt.nic.in/" , label: "Bombay High Court" },
      { href: "https://www.calcuttahighcourt.gov.in/" , label: "Calcutta High Court" },
      { href: "https://highcourt.cg.gov.in/" , label: "Chhattisgarh High Court" },
      { href: "https://ghconline.gov.in/" , label: "Gauhati High Court" },
      { href: "https://gujarathighcourt.nic.in/" , label: "Gujarat High Court" },
      { href: "https://highcourt.hp.gov.in/" , label: "Himachal Pradesh High Court" },
      { href: "https://jkhighcourt.nic.in/" , label: "Jammu & Kashmir High Court" },
      { href: "https://jharkhandhighcourt.nic.in/" , label: "Jharkhand High Court" },
      { href: "https://karnatakajudiciary.kar.nic.in/" , label: "Karnataka High Court" }, 
      { href: "https://keralajudiciary.gov.in/" , label: "Kerala High Court" },
      { href: "https://www.madhyanchalhighcourt.in/" , label: "Madhya Pradesh High Court" },
      { href: "https://www.mhc.tn.gov.in/" , label: "Madras High Court" },
      { href: "https://meghalayahighcourt.nic.in/" , label: "Meghalaya High Court" }, 
      { href: "https://www.hcmimphal.nic.in/" , label: "Manipur High Court" },
      { href: "https://www.nagalandhighcourt.gov.in/" , label: "Nagaland High Court" },
      { href: "https://orissahighcourt.nic.in/" , label: "Orissa High Court" },
      { href: "https://patnahighcourt.gov.in/" , label: "Patna High Court" },
      { href: "https://www.punjabhighcourt.gov.in/" , label: "Punjab & Haryana High Court" },
      { href: "https://rajasthanhighcourt.nic.in/" , label: "Rajasthan High Court" },
      { href: "https://sikkimhighcourt.nic.in/" , label: "Sikkim High Court" },
      { href: "https://www.keralajudiciary.gov.in/kerala-high-court.html" , label: "Kerala High Court" },
      { href: "https://thc.nic.in/" , label: "Tripura High Court" },
      { href: "https://highcourtofuttarakhand.gov.in/" , label: "Uttarakhand High Court" },
  
      
   
    ], label: "High Court" },
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
                height={200}
                width={200}
                alt="Advocate Profile"
                className="shadow-lg h-16 w-16 object-cover rounded-full"
              />
            </motion.div>
            <div className="ml-3">
              <span className="text-xl text-black font-serif">
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
          <ul className="flex items-center gap-6 text-xl">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item.submenu ? (
                  <div className="relative group">
                    <button className="flex items-center gap-1 pt-1 text-sm text-gray-800 hover:text-[#C5A25A] font-serif transition-colors">
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-[400px]  bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-20 grid grid-cols-3">
                      {item.submenu.map((subItem, subIndex) => ( 
                        <Link
                          key={subIndex} href={subItem.href} 
                          target="_blank"
                          className="block px-4 py-2 text-xs text-gray-800 hover:bg-gray-100 hover:text-[#C5A25A] font-serif transition-colors
                          "
                          >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : ( 
                  item.href.startsWith("http") ? (
                    <a
                      href={item.href} 
                      target="_blank"
                      className="text-gray-800 hover:text-[#C5A25A] font-serif transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                    href={item.href}
                    className="relative px-3 py-2 text-sm text-gray-800 hover:text-[#C5A25A] transition-colors duration-300 font-serif"
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
                  
                ))}
              </motion.li>
            )
              )}
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
              <ul className="flex flex-col gap-3 max-h-[0vh] overflow-y-auto">
                {nav.map((item, i) => (
                  <li key={i}>
                    {item.submenu ? ( 
                      <div className="space-y-2">
                        <span className="flex items-center gap-1 text-gray-800 hover:text-[#C5A25A] font-serif transition-colors">
                          {item.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                        <div className="pl-4 border-l border-gray-200 space-y-1">
                          {item.submenu.map((subItem, subIndex) => (  
                            <Link
                              key={subIndex} href={subItem.href} 
                              target="_blank"
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#C5A25A] font-serif transition-colors
                              "
                              >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target="_blank"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#C5A25A] font-serif transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-[#C5A25A] font-serif transition-colors"
                      >
                        {item.label}
                      </Link>
                      )
                    )}
                  </li>
                )
              )
              
                }
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
