"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const navigationVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.6 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-100 to-red-200"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Container */}
      <motion.div
        className="relative bg-white/70 backdrop-blur-md rounded-xl shadow-xl w-full max-w-5xl p-8 md:p-12"
        variants={containerVariants}
      >
        {/* Navigation */}
        <motion.div
          className="absolute top-4 right-8 flex space-x-6"
          variants={navigationVariants}
        >
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-orange-600"
          >
            Hello
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-orange-600"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 font-medium hover:text-orange-600"
          >
            News
          </a>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              SUMMER <span className="text-orange-500">CAMP'25</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Join the adventure and make memories this summer! 🌟
            </p>
            <form className="mt-6 flex items-center justify-center md:justify-start space-x-2">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-3/4 md:w-auto flex-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="p-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-transform transform"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Sign up
              </motion.button>
            </form>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
            variants={imageVariants}
          >
            <motion.div className="relative w-64 h-64 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/fire.png" alt="Summer Camp" fill />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Highlights */}
        <div className="mt-12 flex justify-around text-gray-600">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-3xl font-bold text-orange-500">23</span>
            <p>Days</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="text-3xl font-bold text-orange-500">8</span>
            <p>Activities</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <span className="text-3xl font-bold text-orange-500">11</span>
            <p>Adventures</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
