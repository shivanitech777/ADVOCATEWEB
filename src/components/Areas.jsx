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
    <section className="w-full bg-white text-[#0b1526] py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C5A25A] mb-2">Practice Areas</h2>
        <p className="text-gray-600">We focus on the legal areas most important to our clients</p>
        <div className="w-20 h-1 bg-[#C5A25A] mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -6 }}
            className="bg-white border border-[#C5A25A]/12 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4 text-[#C5A25A]">{area.icon}</div>
            <h3 className="text-2xl font-semibold text-[#0b1526] mb-4 text-center">{area.title}</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {area.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C5A25A] inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Areas;
