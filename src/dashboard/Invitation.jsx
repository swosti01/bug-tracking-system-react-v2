import { useEffect, useState } from "react";
import { Mail, MailOpen, Trash2 } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { cn } from "../utils";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

export default function Invitation() {
  const { isDark } = loadSetting();
  const { userTeamInvitationList } = loadDashboard();
  const { listTeamByInvitationByUser, handelTeamInvite } = updateDashboard();

  const acceptTeam = (id) => {
    handelTeamInvite(id, true);
  };

  const declineTeam = (id) => {
    handelTeamInvite(id, false);
  };

  useEffect(() => {
    listTeamByInvitationByUser();
  }, []);

  return (
    <div
      className={`flex flex-col w-full h-full p-6 transition-all ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Invitation</h2>
      <div
        className={`hideScroll border rounded-lg divide-y transition-all overflow-y-auto ${
          isDark
            ? "border-gray-700 divide-gray-700"
            : "border-gray-300 divide-gray-200"
        }`}
      >
        {userTeamInvitationList && userTeamInvitationList.length === 0 ? (
          <p className="p-4 text-center text-gray-500">No invitation</p>
        ) : (
          userTeamInvitationList.map(
            ({ id, name, leader, readNotification }) => (
              <div
                key={id}
                className={`p-4 flex items-center justify-between transition-all ${
                  isDark
                    ? readNotification
                      ? "bg-gray-800"
                      : "bg-gray-900"
                    : readNotification
                    ? "bg-gray-100"
                    : "bg-white"
                }`}
              >
                <div>
                  <h3
                    className={cn(
                      "text-sm font-medium transition-all duration-300",
                      isDark ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {name}
                  </h3>
                  <p className="text-xs text-gray-500 pr-2">
                    You are invited to join the Team by {leader.name}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex items-center space-x-3",
                    isDark ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  <button
                    onClick={() => acceptTeam(id)}
                    className={cn(
                      "text-sm py-[1px] px-4 rounded-md border hover:border-blue-500 hover:bg-blue-300 hover:text-blue-500 transition-all",
                      isDark ? "border-white" : "border-gray-800 "
                    )}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => declineTeam(id)}
                    className={cn(
                      "text-sm py-[1px] px-4 rounded-md border hover:border-red-500 hover:bg-red-300 hover:text-red-500 transition-all",
                      isDark ? "border-white" : "border-gray-800"
                    )}
                  >
                    Decline
                  </button>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
