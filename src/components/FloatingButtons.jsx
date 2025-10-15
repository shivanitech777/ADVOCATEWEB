"use client";

import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-50">
     
      <a
        href="https://wa.me/YOUR_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>

      <a
        href="tel:+911234567890"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <FiPhone size={24} />
      </a>
    </div>
  );
}
