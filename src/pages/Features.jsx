import React from "react";
import {
  Timeline,
  PriorityHigh,
  Lock,
  AdminPanelSettings,
  People,
  VerifiedUser,
  Assignment,
  BugReport,
  CloudUpload,
  Description,
  PeopleAlt,
  Chat,
  Search,
  AttachFile,
  Notifications,
} from "@mui/icons-material";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";
const Features = () => {
  return (
    <div className="">
      <section className="h-[74px]">
        <Navbar />
      </section>
      {/* Section 1 */}
      <section className="bor">
        <div className="bg-white text-[#424242] py-16 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#1976D2] flex justify-center items-center space-x-3">
                <BugReport className="text-[#FFC107] w-12 h-12" />
                <span className="font-bold">Bug Reporting</span>
              </h2>
              <p className="text-lg mt-4 text-[#757575]">
                Easily submit and track bug reports with all necessary details.
              </p>
            </div>

            {/* Feature Details */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Description className="text-[#1976D2] w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Detailed Bug Reports
                    </h3>
                    <p className="text-md mt-1">
                      Users can provide a detailed description, including steps
                      to reproduce the issue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CloudUpload className="text-[#FFC107] w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold">File Attachments</h3>
                    <p className="text-md mt-1">
                      Upload screenshots, logs, or additional documents to help
                      with debugging.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section: Example Bug Report */}
              <div className="bg-[#E0E0E0] p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-[#1976D2]">
                  Example Bug Report
                </h3>
                <p className="text-sm mt-2">
                  <span className="font-bold">Title:</span> "Login Button Not
                  Working"
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold">Description:</span> When I click
                  on the login button, nothing happens. No errors in the
                  console.
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold">Steps to Reproduce:</span>
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Go to the login page.</li>
                  <li>Enter valid credentials.</li>
                  <li>Click the login button.</li>
                  <li>Observe that nothing happens.</li>
                </ul>
                <p className="text-sm mt-2">
                  <span className="font-bold">Priority:</span> High
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="bor">
        <div className="bg-white text-[#424242] py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#1976D2] flex justify-center items-center space-x-3">
                <Assignment className="text-[#FFC107] w-12 h-12" />
                <span className="font-bold">Bug Tracking & Management</span>
              </h2>
              <p className="text-lg mt-4 text-[#757575]">
                Track, manage, and prioritize bugs efficiently for a smoother
                workflow.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bug Tracking */}
              <div className="bg-[#E0E0E0] p-6 rounded-lg shadow-md border-t-4 border-[#1976D2]">
                <div className="flex items-center space-x-4">
                  <Assignment className="text-[#1976D2] w-10 h-10" />
                  <h3 className="text-xl font-semibold">Unique Bug ID</h3>
                </div>
                <p className="mt-2 text-md">
                  Each bug is assigned a{" "}
                  <span className="font-bold">unique ID</span> for easy tracking
                  and reference.
                </p>
              </div>

              {/* Status Management */}
              <div className="bg-[#E0E0E0] p-6 rounded-lg shadow-md border-t-4 border-[#4CAF50]">
                <div className="flex items-center space-x-4">
                  <Timeline className="text-[#4CAF50] w-10 h-10" />
                  <h3 className="text-xl font-semibold">Status Lifecycle</h3>
                </div>
                <p className="mt-2 text-md">
                  Bugs move through <span className="font-bold">stages</span>:
                  Open → In Progress → Resolved → Closed.
                </p>
              </div>

              {/* Priority & Severity */}
              <div className="bg-[#E0E0E0] p-6 rounded-lg shadow-md border-t-4 border-[#FF9800]">
                <div className="flex items-center space-x-4">
                  <PriorityHigh className="text-[#FF9800] w-10 h-10" />
                  <h3 className="text-xl font-semibold">Priority & Severity</h3>
                </div>
                <p className="mt-2 text-md">
                  Categorize bugs by{" "}
                  <span className="font-bold">
                    Low, Medium, High, or Critical
                  </span>{" "}
                  based on impact.
                </p>
              </div>
            </div>

            {/* Bug Lifecycle Table */}
            <div className="mt-12 bg-[#E0E0E0] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#1976D2]">
                Bug Lifecycle Stages
              </h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                {/* Open */}
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#FF9800]">
                  <h4 className="text-md font-semibold text-[#FF9800]">Open</h4>
                  <p className="text-sm mt-2">
                    Bug is reported and awaiting review.
                  </p>
                </div>

                {/* In Progress */}
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#1976D2]">
                  <h4 className="text-md font-semibold text-[#1976D2]">
                    In Progress
                  </h4>
                  <p className="text-sm mt-2">
                    Bug is assigned and being fixed.
                  </p>
                </div>

                {/* Resolved */}
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#4CAF50]">
                  <h4 className="text-md font-semibold text-[#4CAF50]">
                    Resolved
                  </h4>
                  <p className="text-sm mt-2">
                    Bug is fixed and ready for verification.
                  </p>
                </div>

                {/* Closed */}
                <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-[#D32F2F]">
                  <h4 className="text-md font-semibold text-[#D32F2F]">
                    Closed
                  </h4>
                  <p className="text-sm mt-2">
                    Bug is verified and marked as closed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bor">
        <div className="bg-white text-[#424242] py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#1976D2] flex justify-center items-center space-x-3">
                <Lock className="text-[#FFC107] w-12 h-12" />
                <span className="font-bold">User Authentication & Roles</span>
              </h2>
              <p className="text-lg mt-4 text-[#757575]">
                Secure access with different user roles and permissions.
              </p>
            </div>

            {/* Feature Details */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <VerifiedUser className="text-[#1976D2] w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Secure Authentication
                    </h3>
                    <p className="text-md mt-1">
                      Implements{" "}
                      <span className="font-bold">
                        JWT-based authentication
                      </span>{" "}
                      to ensure <span className="font-bold">secure</span> and{" "}
                      <span className="font-bold">reliable access</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <AdminPanelSettings className="text-[#FFC107] w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Role-Based Access Control (RBAC)
                    </h3>
                    <p className="text-md mt-1">
                      Assigns user roles such as{" "}
                      <span className="font-bold">
                        Admin, Developer, Tester
                      </span>
                      , ensuring access control.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <People className="text-[#4CAF50] w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Multi-User Management
                    </h3>
                    <p className="text-md mt-1">
                      Supports <span className="font-bold">multiple users</span>{" "}
                      with <span className="font-bold">custom permissions</span>
                      , preventing unauthorized actions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Lock className="text-[#D32F2F] w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Session Management
                    </h3>
                    <p className="text-md mt-1">
                      Ensures{" "}
                      <span className="font-bold">
                        session expiration, password policies, and security
                        measures
                      </span>{" "}
                      to protect user data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Roles Table */}
            <div className="mt-12 bg-[#E0E0E0] p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-[#1976D2]">
                User Roles Overview
              </h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Admin */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-md font-semibold text-[#D32F2F]">
                    Admin
                  </h4>
                  <p className="text-sm mt-2">
                    Full system access, user management, and settings control.
                  </p>
                </div>

                {/* Developer */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-md font-semibold text-[#4CAF50]">
                    Developer
                  </h4>
                  <p className="text-sm mt-2">
                    Can manage and resolve bugs, assign issues, and track
                    progress.
                  </p>
                </div>

                {/* Tester */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-md font-semibold text-[#FFC107]">
                    Tester
                  </h4>
                  <p className="text-sm mt-2">
                    Can report bugs, add comments, and verify fixes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="bor">
        <div className="bg-white text-[#424242] py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#1976D2] flex justify-center items-center space-x-3">
                <PeopleAlt className="text-[#FFC107] w-12 h-12" />
                <span className="font-bold">Bug Assignment & Management</span>
              </h2>
              <p className="text-lg mt-4 text-[#757575]">
                Efficiently assign, track, and manage bugs with seamless
                collaboration.
              </p>
            </div>

            {/* Feature Sections */}
            <div className="mt-12 space-y-8">
              {/* Bug Assignment */}
              <div className="flex flex-col md:flex-row items-center bg-[#E0E0E0] p-6 rounded-lg shadow-md border-l-4 border-[#1976D2]">
                <PeopleAlt className="text-[#1976D2] w-16 h-16" />
                <div className="md:ml-6 text-center md:text-left">
                  <h3 className="text-xl font-semibold">Bug Assignment</h3>
                  <p className="mt-2 text-md">
                    Assign bugs to specific{" "}
                    <span className="font-bold">developers</span> or{" "}
                    <span className="font-bold">teams</span> for better
                    accountability.
                  </p>
                </div>
              </div>

              {/* Comments & Activity Logs */}
              <div className="flex flex-col md:flex-row items-center bg-[#E0E0E0] p-6 rounded-lg shadow-md border-l-4 border-[#4CAF50] none">
                <Chat className="text-[#4CAF50] w-16 h-16" />
                <div className="md:ml-6 text-center md:text-left">
                  <h3 className="text-xl font-semibold">
                    Comments & Activity Logs
                  </h3>
                  <p className="mt-2 text-md">
                    Discuss bugs with team members and maintain a{" "}
                    <span className="font-bold">history of changes</span>.
                  </p>
                </div>
              </div>

              {/* Search & Filtering */}
              <div className="flex flex-col md:flex-row items-center bg-[#E0E0E0] p-6 rounded-lg shadow-md border-l-4 border-[#FF9800]">
                <Search className="text-[#FF9800] w-16 h-16" />
                <div className="md:ml-6 text-center md:text-left">
                  <h3 className="text-xl font-semibold">Search & Filtering</h3>
                  <p className="mt-2 text-md">
                    Easily <span className="font-bold">filter</span> bugs by{" "}
                    <span className="font-bold">
                      status, severity, or assignee
                    </span>{" "}
                    for better tracking.
                  </p>
                </div>
              </div>

              {/* Attachments */}
              <div className="flex flex-col md:flex-row items-center bg-[#E0E0E0] p-6 rounded-lg shadow-md border-l-4 border-[#D32F2F]">
                <AttachFile className="text-[#D32F2F] w-16 h-16" />
                <div className="md:ml-6 text-center md:text-left">
                  <h3 className="text-xl font-semibold">Attachments</h3>
                  <p className="mt-2 text-md">
                    Upload <span className="font-bold">screenshots</span> or{" "}
                    <span className="font-bold">logs</span> to help developers
                    debug faster.
                  </p>
                </div>
              </div>

              {/* Notifications */}
              <div className="flex flex-col md:flex-row items-center bg-[#E0E0E0] p-6 rounded-lg shadow-md border-l-4 border-[#FFC107]">
                <Notifications className="text-[#FFC107] w-16 h-16" />
                <div className="md:ml-6 text-center md:text-left">
                  <h3 className="text-xl font-semibold">Notifications</h3>
                  <p className="mt-2 text-md">
                    Get real-time{" "}
                    <span className="font-bold">
                      email or system notifications
                    </span>{" "}
                    for bug updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Features;
