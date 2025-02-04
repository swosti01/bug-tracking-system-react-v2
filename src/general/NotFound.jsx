import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/images/not_found.png"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#424242]">
      {/* Illustration */}
      <img src={notFound} alt="Bug Illustration" className="w-64 md:w-80 " />

      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#1976D2]">404</h1>
      <p className="text-lg md:text-xl text-[#FFC107] mt-2">Oops! Page not found.</p>
      <p className="text-md md:text-lg text-[#424242] mt-2">
        Looks like you found a bug! Let's get you back on track.
      </p>
      <Link
        to="/"
        className="mt-4 bg-[#1976D2] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#1565C0] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
