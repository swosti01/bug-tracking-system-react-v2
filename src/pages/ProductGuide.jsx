import React from "react";
import { Button } from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import { faqData } from "../constant/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import guide from "../assets/images/guide.jpg";
const ProductGuide = () => {
  return (
    <div>
      <section className="h-[74px]">
        <Navbar />
      </section>
      {/* Section1 */}
      <section>
        <div className="bg-gray-100 p-6 md:px-40 rounded-md shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Bug Reporting System Guide
          </h2>
          <div className="flex flex-col md:flex-row gap-5 mb-10 ">
            <div className="flex justify-center h-[300px] w-full md:w-1/2 ">
              <img src={guide} className="h-full p-4 rounded-xl bg-gray-200" />
            </div>
            <div className="flex items-center w-full md:w-1/2 px-6 md:px-10">
              <p className="text-gray-700 leading-7">
                The Bug Reporting System is a tool that allows users to report,
                track, and resolve bugs efficiently. It's a centralized platform
                designed for Admins, Developers, and Testers to collaborate
                seamlessly in managing bugs and improving product quality.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-md shadow-sm w-full md:w-1/2  bor">
              <BugReportIcon sx={{ color: "#1976D2" }} className="text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Reporting a Bug
                </h3>
                <p className="text-gray-600 mt-2 mb-4">
                  To report a bug, navigate to the "Report Bug" section. Fill
                  out the form with a title, description, severity, and
                  priority. Optionally, you can attach screenshots or logs to
                  help developers better understand the issue.
                </p>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#1976D2" }}
                  className="mt-4 -z-0"
                >
                  Report Bug
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-md shadow-sm w-full md:w-1/2  bor">
              <SearchIcon sx={{ color: "#1976D2" }} className="text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Tracking Bugs
                </h3>
                <p className="text-gray-600 mt-2 mb-4">
                  Use the search functionality to filter and find bugs by ID,
                  status, or priority. You can view detailed information about
                  each bug, including its description, severity, and current
                  status.
                </p>
                <Button
                  variant="outlined"
                  sx={{ color: "#1976D2", borderColor: "#1976D2" }}
                  className="mt-4"
                >
                  Search Bugs
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-md shadow-sm w-full md:w-1/2 ">
              <NotificationsIcon
                sx={{ color: "#FFC107" }}
                className="text-4xl"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Stay Notified
                </h3>
                <p className="text-gray-600 mt-2 mb-4">
                  Get notifications for status changes, new comments, or
                  assignments. Stay up-to-date on the progress of your bugs and
                  ensure you're alerted when action is required.
                </p>
                <Button
                  variant="outlined"
                  sx={{ color: "#FFC107", borderColor: "#FFC107" }}
                  className="mt-4"
                >
                  Enable Notifications
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-md shadow-sm w-full md:w-1/2 ">
              <PersonAddIcon sx={{ color: "#4CAF50" }} className="text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Assign Bugs
                </h3>
                <p className="text-gray-600 mt-2 mb-4">
                  Admins and managers can assign bugs to developers or teams.
                  Once a bug is assigned, the responsible person will be
                  notified to ensure it is resolved efficiently.
                </p>
                <Button
                  variant="outlined"
                  sx={{ color: "#4CAF50", borderColor: "#4CAF50" }}
                  className="mt-4"
                >
                  Assign Bug
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div className="bg-gray-100 p-6 md:px-40 rounded-md shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Product Guide
          </h2>

          <div className="space-y-6 px-6 md:px-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Log In</h3>
              <p className="text-gray-600">
                Enter your username/email and password. Access is based on your
                role (Admin, Developer, Tester).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Report a Bug
              </h3>
              <p className="text-gray-600">
                Navigate to the "Report Bug" section and fill in the required
                fields:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Title</li>
                <li>Description (Steps to reproduce, environment, etc.)</li>
                <li>Severity (e.g., Critical, Major, Minor)</li>
                <li>Priority (e.g., High, Medium, Low)</li>
                <li>Optionally, attach screenshots or logs.</li>
              </ul>
              <p className="text-gray-600 mt-2">
                Submit the report once completed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Track a Bug
              </h3>
              <p className="text-gray-600">
                Use search filters to find bugs by ID, status, or priority. View
                bug details and update the status.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Update Bug Status
              </h3>
              <p className="text-gray-600">
                Change the bug status as it progresses (e.g., from Open to In
                Progress, Resolved). Update notes and log actions taken.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Assign a Bug
              </h3>
              <p className="text-gray-600">
                Admins/Managers assign bugs to developers or teams and ensure
                the responsible person is notified.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Comment & Collaborate
              </h3>
              <p className="text-gray-600">
                Add comments for discussions or updates related to the bug.
                Review the activity log for changes made.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Search & Filter Bugs
              </h3>
              <p className="text-gray-600">
                Use search and filters to find bugs based on status, severity,
                assignee, etc. Receive notifications for status changes,
                assignments, or new comments.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Close or Resolve Bugs
              </h3>
              <p className="text-gray-600">
                Once a bug is fixed, change its status to Resolved or Closed.
                Ensure all steps and fixes are documented.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Monitor & Generate Reports
              </h3>
              <p className="text-gray-600">
                Track overall progress through dashboards or reports. Use the
                data for analysis or project retrospectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section3 */}
      <section>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <HelpOutlineIcon
                    sx={{ color: "#1976D2" }}
                    className="text-4xl"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-[140px]">
        <Footer />
      </section>
    </div>
  );
};

export default ProductGuide;
