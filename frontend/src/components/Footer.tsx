import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D4D66] text-white pt-12 pb-8 px-6 sm:px-16 lg:px-24">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[#9FBFC5] mb-4">About Us</h3>
          <p className="text-sm text-gray-300">
            Bhagyavathi Group connects job seekers with top employers through
            professional placement services, helping launch successful careers.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[#9FBFC5] mb-4">Our Services</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Resume Building</li>
            <li>Mock Interviews</li>
            <li>Career Counseling</li>
            <li>Job Recommendations</li>
            <li>Corporate Training</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[#9FBFC5] mb-4">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhone /> +91 99999 88888
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@bhagyavathi.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Srikakulam, Andhra Pradesh
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-[#9FBFC5] mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[#9FBFC5] transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-[#9FBFC5] transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#9FBFC5] transition">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="max-w-7xl mx-auto mt-6 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Bhagyavathi Group. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
