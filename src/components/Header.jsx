"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://www.sci.gov.in", label: "Supreme Court" },
  {
    submenu: [
      { href: "https://ecourts.gov.in/ecourts_home/index.php", label: "Delhi High Court" },
      { href: "https://allahabadhighcourt.in/", label: "Allahabad High Court" },
      { href: "https://bombayhighcourt.nic.in/", label: "Bombay High Court" },
      { href: "https://www.calcuttahighcourt.gov.in/", label: "Calcutta High Court" },
      { href: "https://highcourt.cg.gov.in/", label: "Chhattisgarh High Court" },
      { href: "https://ghconline.gov.in/", label: "Gauhati High Court" },
      { href: "https://gujarathighcourt.nic.in/", label: "Gujarat High Court" },
      { href: "https://highcourt.hp.gov.in/", label: "Himachal Pradesh High Court" },
      { href: "https://jkhighcourt.nic.in/", label: "Jammu & Kashmir High Court" },
      { href: "https://jharkhandhighcourt.nic.in/", label: "Jharkhand High Court" },
      { href: "https://karnatakajudiciary.kar.nic.in/", label: "Karnataka High Court" },
      { href: "https://keralajudiciary.gov.in/", label: "Kerala High Court" },
      { href: "https://www.madhyanchalhighcourt.in/", label: "Madhya Pradesh High Court" },
      { href: "https://www.mhc.tn.gov.in/", label: "Madras High Court" },
      { href: "https://meghalayahighcourt.nic.in/", label: "Meghalaya High Court" },
      { href: "https://www.hcmimphal.nic.in/", label: "Manipur High Court" },
      { href: "https://www.nagalandhighcourt.gov.in/", label: "Nagaland High Court" },
      { href: "https://orissahighcourt.nic.in/", label: "Orissa High Court" },
      { href: "https://patnahighcourt.gov.in/", label: "Patna High Court" },
      { href: "https://www.punjabhighcourt.gov.in/", label: "Punjab & Haryana High Court" },
      { href: "https://rajasthanhighcourt.nic.in/", label: "Rajasthan High Court" },
      { href: "https://sikkimhighcourt.nic.in/", label: "Sikkim High Court" },
      { href: "https://thc.nic.in/", label: "Tripura High Court" },
      { href: "https://highcourtofuttarakhand.gov.in/", label: "Uttarakhand High Court" },
    ],
    label: "High Court",
  },
  { href: "https://ecourts.gov.in/ecourts_home/index.php", label: "District Court" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="w-full bg-[#faf9f6]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-300 shadow-sm font-['Playfair_Display']"
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* --- LOGO + TITLE --- */}
        <Link href="/" className="flex items-center space-x-3">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/logo2.jpg"
              width={60}
              height={60}
              alt="Law Firm Logo"
              className="object-cover rounded-md border border-gray-300 shadow-sm"
            />
          </motion.div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
              Indian Law Masters
            </h1>
            <p className="text-sm text-gray-600 italic">Legal Counsel & Advisor</p>
          </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          {nav.map((item, i) =>
            item.submenu ? (
              <div key={i} className="relative group">
                <button className="text-gray-800 hover:text-[#C5A25A] transition-colors font-medium">
                  {item.label}
                </button>
                <div className="absolute left-0 mt-2 w-[320px] bg-white border border-gray-200 shadow-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 grid grid-cols-2">
                  {item.submenu.map((sub, j) => (
                    <a
                      key={j}
                      href={sub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C5A25A] transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="relative text-gray-800 hover:text-[#C5A25A] transition-colors duration-300"
              >
                {item.label}
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] bg-[#C5A25A] w-full origin-left scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            )
          )}
        </nav>

        {/* --- MOBILE BUTTON --- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-inner"
          >
            <ul className="flex flex-col py-4 px-6 space-y-2">
              {nav.map((item, i) =>
                item.submenu ? (
                  <div key={i}>
                    <p className="font-medium text-gray-800">{item.label}</p>
                    <div className="ml-3 pl-3 border-l border-gray-200 space-y-1">
                      {item.submenu.map((sub, j) => (
                        <a
                          key={j}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-gray-700 hover:text-[#C5A25A] py-1"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block text-gray-800 hover:text-[#C5A25A] transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
