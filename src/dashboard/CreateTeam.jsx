import React, { useState } from "react";
import { loadSetting } from "../context/SettingContext";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

const CreateTeamModal = ({ isOpen, onClose }) => {
  const { isDark } = loadSetting();
  const { createTeam } = updateDashboard();
  const theme = isDark ? "dark" : "light";
  const bgColor =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const inputBg =
    theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black";

  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (!teamName.trim()) {
      setError("Team name is required.");
      return;
    }
    console.log("Creating team:", { teamName, description });

    createTeam({ name: teamName, description: description });

    setTeamName("");
    setDescription("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`p-6 rounded-lg shadow-lg w-96 ${bgColor}`}>
        <h2 className="text-xl font-medium mb-4">Create Team</h2>
        <input
          type="text"
          placeholder="Team Name"
          className={`w-full p-2 mb-2 rounded ${inputBg}`}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <textarea
          placeholder="Description"
          className={`w-full h-24 p-2 mb-4 rounded resize-none ${inputBg}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-start space-x-3">
          <button
            onClick={handleCreate}
            className="px-4 py-2 rounded bg-blue-500 text-white"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-500 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const CreateTeam = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <CreateTeamModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CreateTeam;
