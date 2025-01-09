export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-100 to-red-200">
      {/* Main Container */}
      <div className="relative bg-white/70 backdrop-blur-md rounded-xl shadow-xl w-full max-w-5xl p-8 md:p-12">
        {/* Navigation */}
        <div className="absolute top-4 right-8 flex space-x-6">
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
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              SUMMER <span className="text-orange-500">CAMP'25</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Join the adventure and make memories this summer! 🌟
            </p>
            <form className="mt-6 flex items-center justify-center md:justify-start space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-3/4 md:w-auto flex-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
              <button
                type="submit"
                className="p-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-transform transform hover:scale-105"
              >
                Sign up
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 rounded-full bg-orange-100 flex items-center justify-center shadow-lg">
              {/* Animated Fire */}
              <div className="relative">
                <div className="absolute bg-orange-500 w-16 h-16 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bg-orange-300 w-12 h-12 rounded-full blur-md"></div>
                <div className="relative bg-orange-400 w-10 h-10 rounded-full animate-bounce"></div>
              </div>
              <div className="absolute bottom-0 flex space-x-2">
                <div className="w-10 h-2 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-2 bg-gray-700 rounded-full"></div>
                <div className="w-10 h-2 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Highlights */}
        <div className="mt-12 flex justify-around text-gray-600">
          <div className="text-center">
            <span className="text-3xl font-bold text-orange-500">23</span>
            <p>Days</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-orange-500">8</span>
            <p>Activities</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-orange-500">11</span>
            <p>Adventures</p>
          </div>
        </div>
      </div>
    </div>
  );
}
