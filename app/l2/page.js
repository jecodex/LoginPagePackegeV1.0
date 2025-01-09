"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="max-w-md w-full p-8" variants={itemVariants}>
          <h1 className="text-3xl font-bold text-center mb-4">LOGIN</h1>
          <p className="text-sm text-center text-gray-500 mb-8">
            How to get started lorem ipsum dolor at?
          </p>

          {/* Login Form */}
          <motion.form className="space-y-4" variants={itemVariants}>
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <motion.button
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login Now
            </motion.button>
          </motion.form>

          <motion.p
            className="text-center text-sm text-gray-500 mt-4"
            variants={itemVariants}
          >
            Login with Others
          </motion.p>

          {/* Social Login */}
          <motion.div
            className="mt-4 flex flex-col gap-4"
            variants={containerVariants}
          >
            <motion.button
              className="flex items-center justify-center bg-gray-100 py-2 rounded-lg border hover:bg-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Login with Google
            </motion.button>
            <motion.button
              className="flex items-center justify-center bg-gray-100 py-2 rounded-lg border hover:bg-gray-200"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src="/facebook.svg"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Login with Facebook
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="hidden md:flex w-1/2 bg-blue-500 items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 70 }}
      >
        <motion.div
          className="text-white text-center p-8 max-w-md"
          initial={{ scale: 0.9, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Very good works are waiting for you Login Now!!!
          </h2>
          <img
            src="/1.jpg"
            alt="Promotion"
            className="w-40 h-40 mx-auto rounded-full mb-4"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
