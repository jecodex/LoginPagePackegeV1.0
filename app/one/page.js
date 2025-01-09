"use client";
import { motion } from "framer-motion";

// by blackrise themes

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      {/* Main Container */}
      <motion.div
        className="bg-white rounded-lg shadow-lg flex overflow-hidden w-[90%] max-w-4xl"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Left Section with Image */}
        <motion.div
          className="hidden md:block w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <img
            src="/1.jpg" // Replace with your image path
            alt="Hot Air Balloon"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Section with Form */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Form Header */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Create your Free Account
          </h2>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter your Full Name here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your Email here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your Password here"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <motion.button
              className="w-full bg-yellow-400 text-white font-bold py-2 rounded-md hover:bg-yellow-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Account
            </motion.button>
          </form>

          {/* Login Section */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="#" className="text-yellow-400 font-semibold">
              Log in
            </a>
          </p>

          {/* Social Login */}
          <div className="flex items-center justify-between mt-6">
            <hr className="w-1/4" />
            <span className="text-gray-400">OR</span>
            <hr className="w-1/4" />
          </div>
          <div className="flex justify-around mt-4">
            <motion.button
              className="flex items-center space-x-2 px-4 py-2 border rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/google.svg" alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </motion.button>
            <motion.button
              className="flex items-center space-x-2 px-4 py-2 border rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
              <span>Sign up with GitHub</span>
            </motion.button>
          </div>

          {/* Footer */}
          <p className="text-xs text-center text-gray-400 mt-6">
            Reserved directs to Leo Barreto
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
