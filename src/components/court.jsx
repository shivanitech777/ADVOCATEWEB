"use client";

import { motion } from "framer-motion";
import { Scale, Landmark, Gavel } from "lucide-react";

const courts = [
  {
    name: "Supreme Court",
    icon: <Landmark className="w-10 h-10 text-yellow-600" />,
    description:
      "The Supreme Court of India stands as the highest judicial authority, ensuring justice, equality, and constitutional integrity across the nation.",
  },
  {
    name: "High Court",
    icon: <Scale className="w-10 h-10 text-yellow-600" />,
    description:
      "High Courts serve as the principal civil and criminal courts within each state, safeguarding regional justice with constitutional authority.",
  },
  {
    name: "District Court",
    icon: <Gavel className="w-10 h-10 text-yellow-600" />,
    description:
      "District Courts form the foundation of India’s judicial system, handling local legal matters and ensuring access to justice for every citizen.",
  },
];

export default function CourtTypes() {
  return (
    <div className="bg-white text-gray-900 py-20 px-6 md:px-16">
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Types of Courts in India
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          India’s judiciary functions through a structured system of courts,
          ensuring justice at every level — from local matters to constitutional
          issues.
        </p>
      </motion.div>

      {/* Court Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {courts.map((court, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-yellow-50 rounded-2xl p-8 shadow-lg border border-yellow-300 hover:shadow-yellow-400/60 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-6">{court.icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-700 mb-3 text-center">
              {court.name}
            </h3>
            <p className="text-gray-700 text-center">{court.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
