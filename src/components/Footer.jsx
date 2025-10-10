"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FiSend, FiPhone, FiMail, FiClock, FiGlobe } from "react-icons/fi";

export default function Footer() {

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://www.sci.gov.in", label: "Supreme Court" },
  { href: "https://www.delhihighcourt.nic.in/web", label: "High Court" },
  { href: "https://delhidistrictcourts.nic.in/", label: "District Court" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" },
];


  return (
    <footer className="bg-[#071428] text-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4 mb-4">
          <Image src={"/logo2.jpg"} width={70} height={70} className="rounded-full"/>
            <div>
              <h2 className="text-2xl font-bold text-white">Indian Law Masters</h2>
              <p className="text-sm text-[#C5A25A] tracking-wide">House of Lawyers</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            We are a dedicated team of advocates providing strategic legal counsel
            across civil, criminal and corporate matters. We focus on clear
            communication and practical results.
          </p>
          <p className="text-sm mt-3 text-gray-400">
            Contact our office for a confidential consultation — we will listen,
            advise, and act on your behalf.
          </p>


          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn].map(
              (Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-[#0f2633] hover:bg-[#C5A25A] transition-colors cursor-pointer text-white"
                  aria-label={`social-${idx}`}
                >
                  <Icon size={16} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-[#C5A25A] pl-3">
            Quick Contact Info
          </h3>
          <p className="text-sm mb-4 text-gray-200">
            We denounce with righteous indignation and dislike men who are so beguiled.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-200"><FiGlobe /> New Delhi, Civil Court Complex</li>
            <li className="flex items-center gap-2 text-gray-200"><FiPhone /> +91 98765 43210</li>
            <li className="flex items-center gap-2 text-gray-200"><FiMail /> info@advocatefirm.com</li>
            <li className="flex items-center gap-2 text-gray-200"><FiClock /> Mon - Sat: 09:00 - 18:00</li>
          </ul>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-[#C5A25A] pl-3">
            Latest News
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <Image src="/hii.jpg" alt="news" className="w-14 h-14 object-cover" width={100} height={100} />
              <div>
                <p className="text-[#C5A25A]">Best Education Law and Training</p>
                <span className="text-xs text-gray-300">29 October 2025</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Image src="/blinndfolded.jpg" alt="news" className="w-14 h-14 object-cover" width={100} height={100} />
              <div>
                <p className="text-[#C5A25A]">Flexible Working Hours</p>
                <span className="text-xs text-gray-300">30 October 2025</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Image src="/p.jpg" alt="news" className="w-14 h-14 object-cover" width={100} height={100} />
              <div>
                <p className="text-[#C5A25A]">The Top Law Students</p>
                <span className="text-xs text-gray-300">21 October 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-[#C5A25A] pl-3">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm text-gray-300">
            Join our newsletter for legal tips, firm updates, and event invitations.
          </p>
          <div className="flex mt-5">
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                aria-label="newsletter-email"
                className="w-full px-4 py-2 bg-[#071428] border border-[#0f2938] text-gray-200 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-4 bg-[#C5A25A] hover:bg-[#b8912c] text-black transition-colors">
                <FiSend />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-[#0f2938] pt-6 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Advocate — Indian Law Masters.</div>
          <div>Designed by 
            <a href="https://desirediv.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A25A] hover:underline">
              Desire Div</a>· Privacy · Terms</div>
        </div>
      </div>
    </footer>
  );
}
