import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BugReport, Info } from "@mui/icons-material";
import MiniFeatures from "./landing/MiniFeatures";
import Navbar from "../general/Navbar";

import hero from "../assets/images/hero.jpg";
import Footer from "../general/Footer";
import about from "../assets/images/about.jpg";

const Landing = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white h-[76px] bor">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 md:px-24 flex flex-col-reverse md:flex-row items-center mt-12 bor">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Streamline Your <span className="text-blue-600">Bug Tracking</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Efficiently track and manage software bugs with our powerful bug
            tracking system.
          </p>
          <a
            href="#aboutus"
            className="scrollSmooth mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-400"
          >
            Get Started
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 h-[440px] flex justify-center bor">
          <img
            src={hero}
            alt="Bug Tracking Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </header>

      <section>
        <div
          id="aboutus"
          className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 bor"
        >
          <Card className="max-w-4xl w-full shadow-lg rounded-2xl bg-white p-6">
            <div className="flex justify-center text-center bor">
              <h3 className="text-3xl font-bold text-center text-blue-600">
                About Us
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              {/* Illustrative Image */}
              <img
                src={about}
                alt="Team Working"
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />

              {/* Content Section */}
              <div className="md:w-1/2 p-4">
                <Typography variant="body1" className="text-gray-600 mt-2">
                  Welcome to our Bug Tracking System! We are dedicated to
                  providing an efficient and user-friendly platform for tracking
                  and managing software issues.
                </Typography>
                <Typography variant="body1" className="text-gray-600 mt-2">
                  Our mission is to empower teams with tools that streamline bug
                  reporting, improve collaboration, and ensure high-quality
                  software development.
                </Typography>
              </div>
            </div>
            <div className="flex justify-center md:mt-14 mt-6 bor none">
              <div className="bor">
                <div className="flex justify-start">
                  <h4 className="text-[#FFC107] flex items-center gap-2 text-left text-2xl font-semibold bor">
                    <BugReport className="text-[#FFC107]" /> What We Offer
                  </h4>
                </div>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Real-time bug tracking</li>
                  <li>Seamless collaboration between teams</li>
                  <li>Customizable workflows</li>
                  <li>Insightful analytics and reporting</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 mb-[140px] ">
        <MiniFeatures />
      </section>
      <section></section>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
