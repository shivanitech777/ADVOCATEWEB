"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail, FiClock, FiGlobe } from "react-icons/fi";

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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <Image src={"/logo2.jpg"} alt="Indian Law Masters logo" width={70} height={70} className="rounded-md" />
            <div>
              <h2 className="text-2xl font-bold text-white">Indian Law Masters</h2>
              <p className="text-sm text-[#C5A25A] tracking-wide">Legal Counsel & Advisors</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-300 mb-4">
            Trusted legal advisors delivering clear, professional counsel across civil, criminal and corporate law. We prioritise client confidentiality and results.
          </p>

          <nav aria-label="footer-navigation">
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              {nav.map((n, idx) => (
                <li key={idx}>
                  <a href={n.href} className="hover:text-white">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>



        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-[#C5A25A] pl-3">
            Contact
          </h3>
          <p className="text-sm mb-3 text-gray-300">Office & Appointments</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-gray-200"><FiGlobe className="opacity-80" /> New Delhi, India</li>
            <li className="flex items-center gap-3 text-gray-200"><FiPhone className="opacity-80" /> <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
            <li className="flex items-center gap-3 text-gray-200"><FiMail className="opacity-80" /> <a href="mailto:info@indianlawmasters.com" className="hover:text-white">info@indianlawmasters.com</a></li>
            <li className="flex items-center gap-3 text-gray-200"><FiClock className="opacity-80" /> Mon - Sat: 09:00 - 18:00</li>
          </ul>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3 border-l-2 border-[#C5A25A] pl-3">Stay Connected</h3>
          <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter for legal updates and firm news.</p>


          <div className="flex gap-3 mt-5">
            {[
              { Icon: FaFacebookF, href: "https://facebook.com" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaPinterestP, href: "https://pinterest.com" },
              { Icon: FaLinkedinIn, href: "https://linkedin.com" },
            ].map((s, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-2 bg-[#0f2633] hover:bg-[#C5A25A] transition-colors cursor-pointer text-white"
                aria-label={`social-${idx}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <s.Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-[#0f2938] pt-6 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Indian Law Masters — All rights reserved.</div>
          <div>
            <a href="/privacy" className="hover:underline mr-3">Privacy</a>
            <a href="/terms" className="hover:underline mr-3">Terms</a>
            <span className="text-gray-500">Designed by <a href="https://desirediv.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A25A] hover:underline">Desire Div</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}