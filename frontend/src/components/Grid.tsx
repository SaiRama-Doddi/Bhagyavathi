import React from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaStar, FaCogs } from "react-icons/fa";
import img1 from "../assets/Poster.jpg";
import img2 from "../assets/Poster.jpg";
import img3 from "../assets/Poster.jpg";
import img4 from "../assets/Poster.jpg";
import img5 from "../assets/Poster.jpg";

const RecruitmentProcess = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-24 bg-white text-center">
      {/* Heading */}
      <motion.h4
        className="text-sm text-[#0D4D66] font-semibold mb-2 uppercase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        // We are Bhagyavathi Group
      </motion.h4>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D4D66] mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Our Recruitment Process - Your Path to Productivity
      </motion.h2>

      {/* Circular Images */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`step-${index + 1}`}
            className="w-32 h-32 rounded-full object-cover shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
          />
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto text-[#0D4D66]">
        {[
          {
            icon: (
              <FaRegCheckCircle className="text-3xl mb-4 mx-auto text-[#0D4D66]" />
            ),
            title: "Value",
            text: "We consistently deliver high-quality, cost-effective services that exceed expectations and provide unparalleled service.",
            hover:
              "hover:bg-[#9FBFC5] hover:text-[#0D4D66] border-[#9FBFC5]",
          },
          {
            icon: (
              <FaStar className="text-3xl mb-4 mx-auto text-[#0D4D66]" />
            ),
            title: "Quality",
            text: "We ensure adherence to RPO processes by assigning a knowledgeable team leader to guarantee deliverable quality.",
            hover:
              "hover:bg-gradient-to-r from-[#0D4D66] to-[#9FBFC5] hover:text-white border-[#0D4D66]",
          },
          {
            icon: (
              <FaCogs className="text-3xl mb-4 mx-auto text-[#0D4D66]" />
            ),
            title: "Efficiency",
            text: "We leverage our tech expertise to provide HR solutions that reduce costs and increase ROI for our customers.",
            hover:
              "hover:bg-[#0D4D66] hover:text-white border-[#9FBFC5]",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={`bg-white border rounded-lg p-6 shadow transition ${card.hover}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {card.icon}
            <h4 className="text-xl font-bold mb-2">{card.title}</h4>
            <p className="text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentProcess;
