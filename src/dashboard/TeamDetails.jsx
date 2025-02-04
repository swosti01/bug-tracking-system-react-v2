import React, { useEffect, useState } from "react";
import { loadSetting } from "../context/SettingContext";
import { useParams } from "react-router-dom";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";
import EmailSelector from "./EmailSelector";
const TeamDetails = ({}) => {
  const { id } = useParams();
  const { isDark } = loadSetting();
  const { userEmail, teamDetail, emailList } = loadDashboard();
  const { getTeamById, listEmail, deleteTeam } = updateDashboard();
  const [isTeamLeader, setIsTeamLeader] = useState(false);

  useEffect(() => {
    getTeamById(id);
    listEmail();
  }, []);

  useEffect(() => {
    setIsTeamLeader(
      teamDetail.leader ? teamDetail.leader.email == userEmail : false
    );
    console.log(teamDetail);
  }, [teamDetail]);

  return (
    <div
      className={`hideScroll p-6 h-full w-full overflow-y-auto ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {teamDetail && (
        <div className="flex ">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">{teamDetail.name}</h2>
            <p className="mt-2 text-sm text-gray-400 none">ID: {teamDetail.id}</p>
            <p className="mt-4">{teamDetail.description}</p>
            <p className="mt-4 text-sm">
              Created At: {new Date(teamDetail.createdAt).toLocaleString()}
            </p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Team Leader</h3>
              <p>{teamDetail.leader && teamDetail.leader.name}</p>
            </div>

            <div className="bor mt-6">
              <EmailSelector />
            </div>
            <div className="flex bor pt-5">
              {isTeamLeader ? (
                <div
                  className="bor px-6 py-1.5 text-stone-100 bg-red-500 hover:bg-red-500 rounded-md cursor-pointer "
                  onClick={deleteTeam}
                >
                  Delete Team
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-1/2">
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Team Members</h3>
              <ul className="mt-2 list-disc pl">
                {teamDetail.teamMembers && teamDetail.teamMembers.length > 0 ? (
                  teamDetail.teamMembers.map((member) => (
                    <li key={member.id} className="pl-5">
                      {member.name}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No team members</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDetails;
