"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  // Animation Variants
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
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side with the image */}
      <motion.div
        className="hidden md:flex flex-1 relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://images.unsplash.com/photo-1638718358942-ea45a721867b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Lighthouse"
          className="h-screen w-full object-cover"
        />
        <p className="absolute bottom-4 left-4 text-white text-sm">
          Power by BlackRise Themes
        </p>
      </motion.div>

      {/* Right side with the form */}
      <motion.div
        className="flex flex-1 items-center justify-center bg-gray-50"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-md px-6">
          <div className="mb-8 text-center">
            {/* Logo Image */}
            <motion.img
              src="/logo.png" // Replace with your logo image URL
              alt="UI Your Logo"
              className="mx-auto h-16 w-16" // Adjust size as needed
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.h1
              className="mt-4 text-2xl font-bold text-gray-800"
              variants={logoVariants}
            >
              UI Unicorn
            </motion.h1>
            <motion.p
              className="mt-2 text-sm text-gray-600"
              variants={logoVariants}
            >
              Nice to see you again
            </motion.p>
          </div>
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email or phone number
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <motion.button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign in
            </motion.button>
            <div className="mt-4 flex items-center justify-between">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-2 text-sm text-gray-500">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>
            <motion.button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border bg-gray-100 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="/google.svg" // Replace with your Google icon
                alt="Google"
                className="h-5 w-5"
              />
              Sign in with Google
            </motion.button>
          </motion.form>
          <motion.div
            className="mt-6 text-center text-sm text-gray-500"
            variants={formVariants}
          >
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Sign up now
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
