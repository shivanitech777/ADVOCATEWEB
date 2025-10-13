"use client";
import { motion } from "framer-motion";
import { Building2, Users, Lock } from "lucide-react";

const areas = [
  {
    icon: <Building2 size={40} className="text-yellow-500" />,
    title: "Civil Law",
    items: [
      "Partition Suit",
      "Money Recovery",
      "Real Estate",
      "Arbitration",
      "Contract Laws",
      "Wills",
    ],
  },
  {
    icon: <Users size={40} className="text-yellow-500" />,
    title: "Family Law",
    items: [
      "Mutual Divorce",
      "Maintenance",
      "Child Custody",
      "Domestic Violence",
      "Transfer Petition",
      "Marriage Registration",
      "Contested Divorce",
      "Matrimonial Criminal",
    ],
  },
  {
    icon: <Lock size={40} className="text-yellow-500" />,
    title: "Criminal Law",
    items: [
      "Sexual Offence",
      "Fraud",
      "Bail",
      "Cyber Crime",
      "Cheque Bouncing",
    ],
  },
];

const Areas = () => {
  return (
    <section className="w-full bg-white text-[#0b1526] py-10 px-6 overflow-x-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C5A25A] mb-2">Practice Areas</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We focus on the legal areas most important to our clients — practical advice, courtroom representation and transactional support.</p>
        <div className="w-20 h-1 bg-[#C5A25A] mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -6 }}
            className="bg-white border border-[#F1EAD6] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#F5E7C9] to-[#F0DFA6] text-[#9a6f2b]">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0b1526]">{area.title}</h3>
            </div>

            <div className="mb-4 text-sm text-gray-600">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 bg-[#C5A25A] inline-block flex-shrink-0"></span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a href="/contact" className="inline-block px-4 py-2 border border-[#C5A25A] text-[#C5A25A] hover:bg-[#C5A25A] hover:text-black transition">Request a Consultation</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Areas;