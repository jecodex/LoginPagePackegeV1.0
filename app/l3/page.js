"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image and Text */}
      <motion.div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/travel.png')" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <motion.h1
            className="text-4xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Travelista Tours
          </motion.h1>
          <motion.p
            className="text-lg mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          >
            Travel is the only purchase that enriches you in ways beyond
            material wealth
          </motion.p>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
        <motion.img
          src="/flighticon.png"
          alt="Flight Icon"
          className="mb-4"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        />
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome
        </motion.h2>
        <p className="text-gray-600 mb-6">Login with Email</p>
        <form className="w-3/4 space-y-4">
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="email">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="yourname@mail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot your password?
            </a>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Login
          </motion.button>
        </form>
        <div className="my-6 text-center text-gray-600">OR</div>
        <div className="flex space-x-4">
          {["/google.svg", "/facebook.svg", "/github.svg"].map((icon, idx) => (
            <motion.button
              key={idx}
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src={icon} alt="Social Icon" />
            </motion.button>
          ))}
        </div>
        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
}
