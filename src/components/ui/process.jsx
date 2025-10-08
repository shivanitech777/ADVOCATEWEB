"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Understanding",
    desc: "We believe in devoting sufficient time, listening to our clients while understanding their issues.",
  },
  {
    id: 2,
    title: "Strategic Planning",
    desc: "Our team formulates strategies to aggressively defend and contest your stance.",
  },
  {
    id: 3,
    title: "Implementing The Steps",
    desc: "We ensure wholesome execution of the plan to achieve effective and fruitful results.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-white text-[#0b1526] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#C5A25A] mb-2">Our Process</h2>
        <p className="text-gray-600">A clear, practical workflow we follow for every client</p>
        <div className="w-20 h-1 bg-[#C5A25A] mx-auto mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ translateY: -6 }}
            className="text-center bg-white border border-[#C5A25A]/12 p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 flex items-center justify-center bg-[#C5A25A] text-white font-semibold text-2xl"
              >
                {step.id}
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-[#0b1526] mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
