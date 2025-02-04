import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import AuthModal from "../pages/auth/AuthModal";
import { navigation } from "../constant/index";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const isLoggedIn = false; // Replace with auth logic

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md fixed bor w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#1976D2]">
          BugTracker
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6">
          {navigation
            .filter((item) => item.display && (isLoggedIn || !item.loggedIn))
            .map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-gray-700 hover:text-[#1976D2] transition"
                  onClick={scrollToTop}
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>

        {/* Sign Up Button */}
        <button
          className="hidden md:block bg-[#1976D2] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setAuthModalOpen(true)}
        >
          Sign Up
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md p-4 space-y-3">
          {navigation
            .filter((item) => item.display && (isLoggedIn || !item.loggedIn))
            .map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="block text-gray-700 hover:text-[#1976D2] transition"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          <li>
            <button
              className="block w-full bg-[#1976D2] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => setAuthModalOpen(true)}
            >
              Sign Up
            </button>
          </li>
        </ul>
      )}

      {/* Auth Modal */}

      {authModalOpen && (
        <div className="z-50">
          <AuthModal closeModal={() => setAuthModalOpen(false)} />{" "}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
