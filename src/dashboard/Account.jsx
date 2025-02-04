import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Bug,
  CheckCircle,
  FileText,
  Github,
  Link,
  Slack,
  Shield,
} from "lucide-react";
import { loadSetting, updateSetting } from "../context/SettingContext";
import userPic from "../assets/images/userPic.jpg"

const userData = {
  id: "user_12345",
  fullName: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  profilePicture: "https://example.com/profile/johndoe.jpg",
  role: "Developer",
  accessLevel: "Manage Bugs",
  statistics: {
    bugsReported: 25,
    bugsAssigned: 10,
    bugsResolved: 18,
  },
  lastActive: "2025-01-31T12:45:00Z",
  preferences: {
    notificationMethod: "email",
    subscribedProjects: ["Project A", "Project B"],
  },
  additionalInfo: {
    bio: "Full-stack developer specializing in bug fixing and system optimization.",
    linkedAccounts: {
      github: "https://github.com/johndoe",
      jira: "https://jira.example.com/johndoe",
      slack: "@johndoe",
    },
    assignedTeam: "Backend Team",
  },
};

export default function Account() {
  const { isDark, user } = loadSetting();
  const { getUser } = updateSetting();
  const [formattedLastActive, setFormattedLastActive] = useState("");

  useEffect(() => {
    getUser();
    setFormattedLastActive(new Date(userData.lastActive).toLocaleString());
  }, []);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <div
      className={`w-full h-full p-6  transition-all ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <img
          src={userPic}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-semibold">{user && user.name}</h2>
          <p className="text-sm text-gray-500">@{user && user.email}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Mail size={18} className="text-blue-500" />
          <p className="text-sm">{user && user.email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Shield size={18} className="text-green-500" />
          <p className="text-sm">
            {userData.role} - {userData.accessLevel}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FileText size={18} className="text-yellow-500" />
          <p className="text-sm">Last Active: {formattedLastActive}</p>
        </div>
      </div>

      {/* Bug Statistics */}
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="p-3 rounded-lg bg-blue-600 text-white">
          <Bug size={20} />
          <p className="text-sm">Reported</p>
          <p className="text-lg font-semibold">
            {userData.statistics.bugsReported}
          </p>
        </div>
        <div className="p-3 rounded-lg bg-orange-500 text-white">
          <Bug size={20} />
          <p className="text-sm">Assigned</p>
          <p className="text-lg font-semibold">
            {userData.statistics.bugsAssigned}
          </p>
        </div>
        <div className="p-3 rounded-lg bg-green-500 text-white">
          <CheckCircle size={20} />
          <p className="text-sm">Resolved</p>
          <p className="text-lg font-semibold">
            {userData.statistics.bugsResolved}
          </p>
        </div>
      </div>

      {/* Subscribed Projects */}
      <div className="mt-4">
        <h3 className="font-semibold">Subscribed Projects:</h3>
        <p className="text-sm text-gray-500">
          {userData.preferences.subscribedProjects.join(", ")}
        </p>
      </div>

      {/* Linked Accounts */}
      <div className="mt-4">
        <h3 className="font-semibold">Linked Accounts:</h3>
        <div className="flex space-x-4 mt-2">
          <a
            href={userData.additionalInfo.linkedAccounts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center space-x-1"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={userData.additionalInfo.linkedAccounts.jira}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center space-x-1"
          >
            <Link size={18} />
            <span>Jira</span>
          </a>
          <p className="text-blue-500 flex items-center space-x-1">
            <Slack size={18} />
            <span>{userData.additionalInfo.linkedAccounts.slack}</span>
          </p>
        </div>
      </div>

      {/* User Bio */}
      <div className="mt-4">
        <h3 className="font-semibold">Bio:</h3>
        <p className="text-sm text-gray-500">{userData.additionalInfo.bio}</p>
      </div>
    </div>
  );
}
