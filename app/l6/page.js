"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-100">
      {/* Animated Container */}
      <motion.div
        className="flex w-4/5 max-w-6xl rounded-lg bg-white shadow-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section with Animation */}
        <motion.div
          className="hidden lg:flex flex-1 justify-center items-center bg-orange-200"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/bird.png"
            alt="3D Illustration"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-1 flex-col items-center justify-center p-10"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.h1
            className="text-3xl font-bold text-orange-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Logo
          </motion.h1>
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          {/* Form */}
          <form className="w-full max-w-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="username@gmail.com"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <a
              href="#"
              className="block text-right text-sm text-orange-500 hover:underline"
            >
              Forgot Password?
            </a>
            <motion.button
              type="submit"
              className="mt-4 w-full rounded-md bg-orange-500 py-2 text-white font-semibold hover:bg-orange-600"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign in
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-6 text-gray-400">Or Continue With</div>

          {/* Social Buttons */}
          <div className="flex space-x-4">
            <motion.img
              src="/google.svg"
              alt="Google"
              width={40}
              height={40}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.img
              src="/github.svg"
              alt="Github"
              width={40}
              height={40}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.img
              src="/facebook.svg"
              alt="Facebook"
              width={40}
              height={40}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>

          {/* Register */}
          <p className="mt-6 text-sm">
            Don’t have an account yet?{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Register for free
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
