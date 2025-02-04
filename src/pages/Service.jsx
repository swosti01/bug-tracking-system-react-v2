import React from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import servicePic from "../assets/images/service2.jpg";
import BugReportIcon from "@mui/icons-material/BugReport";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskIcon from "@mui/icons-material/Task";
import LockIcon from "@mui/icons-material/Lock";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Service = () => {
  return (
    <div>
      <section className="h-[74px]">
        <Navbar />
      </section>
      {/* Section1 */}
      <section>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto my-8 md:my-20">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bor">
            {/* Left Section: Text Content */}
            <div className="text-center md:text-left bor w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Bug Tracking System
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Our Bug Tracking System helps you manage, track, and resolve
                bugs efficiently. With this service, you can report bugs,
                monitor progress, collaborate with your team, and ensure bugs
                are fixed before the product goes live.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're an admin, developer, or tester, our platform
                enables seamless bug management from start to finish.
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="w-full md:w-1/3 bor">
              <img
                src={servicePic}
                alt="Bug Tracking"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
              Start Reporting Bugs
            </button>
          </div>
        </div>
      </section>
      {/* Section2 */}
      <section>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Core Bug Tracking Services
          </h2>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Bug Reporting Service */}
            <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-6">
                <BugReportIcon fontSize="large" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Bug Reporting Service
                </h3>
                <p className="text-gray-700">
                  Allows users to submit new bugs with necessary details such as
                  title, description, severity, and priority.
                </p>
              </div>
            </div>

            {/* Bug Assignment Service */}
            <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-6">
                <AssignmentIcon fontSize="large" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Bug Assignment Service
                </h3>
                <p className="text-gray-700">
                  Assigns bugs to developers or specific teams for resolution,
                  ensuring that the right people are working on the issue.
                </p>
              </div>
            </div>

            {/* Bug Status Management Service */}
            <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-6">
                <TaskIcon fontSize="large" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  Bug Status Management Service
                </h3>
                <p className="text-gray-700">
                  Manages and updates the status of bugs, such as Open, In
                  Progress, Resolved, and Closed, to track the progress.
                </p>
              </div>
            </div>

            {/* User Authentication & Role Management Service */}
            <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-6">
                <LockIcon fontSize="large" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">
                  User Authentication & Role Management Service
                </h3>
                <p className="text-gray-700">
                  Handles user login and manages roles such as Admin, Developer,
                  and Tester to control access and permissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section3 */}
      <section>
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-6xl mx-auto mt-8 pb-[100px]">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Collaboration & Tracking Services
          </h2>

          {/* Services List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Comment & Collaboration Service */}
            <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 none">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                <CommentIcon fontSize="large" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Comment & Collaboration Service
              </h3>
              <p className="text-gray-700 text-center">
                Enables users to add and manage comments for each bug,
                facilitating collaboration and communication within the team.
              </p>
            </div>

            {/* Notification Service */}
            <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                <NotificationsIcon fontSize="large" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Notification Service
              </h3>
              <p className="text-gray-700 text-center">
                Sends notifications via email or in-app alerts when there are
                updates, changes, or new assignments related to bugs.
              </p>
            </div>

            {/* Search & Filter Service */}
            <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                <SearchIcon fontSize="large" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Search & Filter Service
              </h3>
              <p className="text-gray-700 text-center">
                Provides search and filtering capabilities to easily find bugs
                based on specific criteria such as status, severity, and
                assignee.
              </p>
            </div>

            {/* Attachment Management Service */}
            <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                <AttachFileIcon fontSize="large" />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Attachment Management Service
              </h3>
              <p className="text-gray-700 text-center">
                Allows users to upload and manage files such as screenshots,
                logs, or documents attached to bug reports, making
                troubleshooting easier.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section4 */}
      <section>
        <div className="py-20 px-8 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen pb-[140px]">
          <h2 className="text-s3xl font-bold text-blue-600 mb-6 text-center">
            Monitoring & Integration Services
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Activity Log Service */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 space-y-6 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                <AccessTimeIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Activity Log Service
              </h3>
              <p className="text-base text-gray-600 text-center">
                Tracks and logs every action performed on a bug, including
                status changes, comments, and updates.
              </p>
            </div>

            {/* Reporting & Analytics Service */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 space-y-6 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <BarChartIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Reporting & Analytics Service
              </h3>
              <p className="text-base text-gray-600 text-center">
                Generates reports and provides insights on bug trends, team
                performance, and overall project health.
              </p>
            </div>

            {/* Integration Service */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 space-y-6 transform hover:scale-105 none">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center text-white">
                <GitHubIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Integration Service
              </h3>
              <p className="text-base text-gray-600 text-center">
                Integrates with other project management or development tools
                (e.g., Jira, GitHub) to synchronize bug information.
              </p>
            </div>

            {/* Bug Lifecycle Management Service */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 space-y-6 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white">
                <AutorenewIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Bug Lifecycle Management Service
              </h3>
              <p className="text-base text-gray-600 text-center">
                Manages the entire lifecycle of a bug from submission through
                resolution and closure.
              </p>
            </div>

            {/* Access Control & Permissions Service */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 space-y-6 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                <LockIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Access Control & Permissions Service
              </h3>
              <p className="text-base text-gray-600 text-center">
                Restricts access to sensitive features and bugs based on user
                roles and permissions.
              </p>
            </div>

            {/* Dashboard & Visualization Service */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 space-y-6 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                <DashboardIcon fontSize="large" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                Dashboard & Visualization Service
              </h3>
              <p className="text-base text-gray-600 text-center">
                Displays an interactive dashboard with bug statistics, trends,
                and project health metrics.
              </p>
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

export default Service;
