import React from "react";
import { Facebook, Twitter, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#E0E0E0] pt-10">
      <div className="container mx-auto px-6 py-5 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-xl font-bold text-stone-400">BugTracker</h2>
          <p className="mt-2 text-sm text-stone-400 ">
            A modern bug tracking system designed for developers and teams to manage issues efficiently.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-stone-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-stone-400 hover:text-stone-200 transition">Home</a></li>
            <li><a href="/features" className="text-stone-400 hover:text-stone-200 transition">Features</a></li>
            <li><a href="/product-guide" className="text-stone-400 hover:text-stone-200 transition">Product Guide</a></li>
            <li><a href="/contact" className="text-stone-400 hover:text-stone-200 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-stone-400">Contact</h3>
          <p className="mt-2 text-sm text-stone-400 ">Email: support@bugtracker.com</p>
          <p className="text-sm text-stone-400 ">Phone: +977 123-4567890</p>
          <p className="text-sm text-stone-400 ">Address: 123 Kumaripati, Lalitpur, Nepal</p>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-stone-400">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-stone-400 hover:text-stone-400 transition">
              <Facebook fontSize="large" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-400 transition">
              <Twitter fontSize="large" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-400 transition">
              <LinkedIn fontSize="large" />
            </a>
            <a href="#" className="text-stone-400 hover:text-stone-400 transition">
              <GitHub fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#333] mt-6 py-4 text-center text-sm bor text-stone-400">
        © {new Date().getFullYear()} BugTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
