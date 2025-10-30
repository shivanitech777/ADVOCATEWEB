"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",

        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-black py-8 md:py-14 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10"
      >

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-2 bg-white border border-gray-200 shadow-lg rounded p-6"
        >
          <h1 className="text-4xl font-bold text-[#0b1526] mb-3">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have a legal inquiry? Fill the form and we will review your message.
            This demo logs data to the browser console (no network call).
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-5"
            >
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Full name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white border border-gray-300 focus:border-[#C5A25A] px-4 py-3 rounded-md outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-300 focus:border-[#C5A25A] px-4 py-3 rounded-md outline-none transition-all"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-1 gap-5"
            >
              <div>
                <label className="block text-sm text-gray-700 mb-2">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="w-full bg-white border border-gray-300 focus:border-[#C5A25A] px-4 py-3 rounded-md outline-none transition-all"
                />
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your case or question..."
                className="w-full bg-white border border-gray-300 focus:border-[#C5A25A] px-4 py-3 rounded-md outline-none transition-all"
              ></textarea>
            </motion.div>


            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px rgba(197,162,90,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#C5A25A] text-white font-semibold px-8 py-3 rounded-md transition-all shadow-md hover:bg-[#b48b3b]"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : "Send Message"}
            </motion.button>


            {status === "error" && (
              <p className="text-red-500 mt-2">
                Please fill in all required fields.
              </p>
            )}
          </form>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white border border-gray-200 shadow-lg rounded p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold text-[#0b1526] mb-4">
              Office & Contact
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin className="text-[#C5A25A]" size={18} />
                Chamber No. 12, Civil Court Complex, New Delhi, India
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-[#C5A25A]" size={18} /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-[#C5A25A]" size={18} /> info@advocatefirm.com
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Hours</p>
              <p className="text-gray-800">Mon – Sat: 09:00 – 18:00</p>
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-6 overflow-hidden rounded-md shadow-sm border border-gray-200"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.697944933575!2d77.21803737529074!3d28.61054017567075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7a1e63e6a5%3A0x88a0ec1ad62c0481!2sCivil%20Court%20Complex!5e0!3m2!1sen!2sin!4v1696768929842!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </motion.div>
        </motion.aside>
      </motion.div>
    </div>
  );
}