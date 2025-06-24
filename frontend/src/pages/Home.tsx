import React from "react";
import { motion, useAnimation, easeInOut } from "framer-motion";
import poster from "../assets/Poster.jpg";
import Grid from "../components/Grid";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const Home = () => {
  return (
    <>
      <section className="bg-[#0D4D66] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 mt-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Left Text Section */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <motion.h3 variants={itemVariants} className="text-[#9FBFC5] text-lg sm:text-xl font-semibold">
              Best Placements
            </motion.h3>

            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
            >
              Launch your career with <br className="hidden sm:block" /> trusted placement services!
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-200 max-w-md mx-auto md:mx-0 text-sm sm:text-base"
            >
              We connect job seekers and employers through a seamless recruitment process.
              Your future starts with Bhagyavathi Group.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9FBFC5] hover:bg-white text-[#0D4D66] font-bold py-2 px-6 rounded-full transition"
              >
                Get Placed
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-[#0D4D66] py-2 px-6 rounded-full transition"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={poster}
              alt="Placement Poster"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

     
      <Grid />
    </>
  );
};

export default Home;
