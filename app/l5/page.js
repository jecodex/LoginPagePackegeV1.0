"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Left side with the animated image */}
      <motion.div
        className="hidden md:flex flex-1 relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1513275384675-1b69ffeab427?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Travel Background"
          className="h-screen w-full object-cover"
        />
        <motion.div
          className="absolute bottom-10 left-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1 } }}
        >
          <h1 className="text-4xl font-bold tracking-wider">
            Explore the World
          </h1>
          <p className="mt-2 text-sm font-light">
            Powered by <span className="font-semibold">BlackRise Themes</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Right side with the animated form */}
      <motion.div
        className="flex flex-1 items-center justify-center px-8"
        variants={formContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="w-full max-w-md bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-blur-lg p-6 space-y-6"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <motion.div
            className="text-center"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/logo.png" // Replace with your logo URL
              alt="Logo"
              className="mx-auto h-16 w-16"
            />
            <h1 className="mt-4 text-3xl font-bold text-white tracking-wide">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              Log in to continue your journey.
            </p>
          </motion.div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 rounded-lg bg-black bg-opacity-50 border border-gray-700 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-2 rounded-lg bg-black bg-opacity-50 border border-gray-700 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-700 text-purple-600 focus:ring-purple-600"
                />
                Remember me
              </label>
              <a href="#" className="hover:underline text-purple-400">
                Forgot Password?
              </a>
            </div>
            <motion.button
              type="submit"
              className="mt-4 w-full px-4 py-2 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign In
            </motion.button>
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="text-sm text-gray-300">OR</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>
            <motion.button
              type="button"
              className="mt-4 flex items-center justify-center w-full gap-2 px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <img src="/google.svg" alt="Google Logo" className="h-5 w-5" />
              Continue with Google
            </motion.button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign up now
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
