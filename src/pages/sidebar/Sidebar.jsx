import { useEffect, useState } from "react";

import { Sun, Moon, Menu, LogOut, User } from "lucide-react";
import { cn } from "../../utils/index";
import { sidebar } from "../../constant";
import { Link } from "react-router-dom";
import { loadSetting, updateSetting } from "../../context/SettingContext";
import Logout from "../../general/Logout";
import { loadDashboard, updateDashboard } from "../../context/DashboardContext";

const Sidebar = () => {
  const { isDark, selectedTeam, user } = loadSetting();
  const { toggleTheme, toggleOpenLogout, getUser } = updateSetting();
  const { notificationCount } = loadDashboard();
  const { listTeamByInvitationByUser } = updateDashboard();

  const roles = ["admin", "users"];
  const username = "Kritesh Thapa";
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const filteredSidebar = sidebar.filter((item) =>
    item.role.some((r) => roles.includes(r))
  );

  useEffect(() => {
    listTeamByInvitationByUser();
    getUser();
  }, []);

  useEffect(()=>{
    // console.log(notificationCount)
  },[])

  return (
    <div
      className={cn(
        "h-full flex flex-col transition-all duration-300 border-r border-gray-700",
        isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <button className="p-4" onClick={toggleCollapse}>
        <Menu className="w-6 h-6" />
      </button>

      <nav className="flex-1">
        {filteredSidebar.map(({ name, link, icon: Icon, teamNeeded }) => (
          <Link
            key={link}
            to={link}
            className={cn(
              "flex  flex-col p-3 rounded-lg overflow-hidden relative bor",
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-300",
              isCollapsed ? "pl-5 mx-0" : "pl-3 mx-2",
              teamNeeded && !selectedTeam ? "none" : ""
            )}
          >
            <div className="flex items-center gap-3 bor">
              <Icon className="w-5 h-5" />
              <span
                className={cn(
                  " w-[200px] overflow-hidden absolute left-12 bor",
                  isCollapsed ? "hidden" : "block"
                )}
              >
                {!isCollapsed && (
                  <span className="flex flex-col relative">
                    <span className="flex items-center relative bor">
                      {name}
                      {name == "Invitation" && notificationCount>0 && (
                        <span
                          className={cn(
                            "ml-3 flexmid h-5 w-5 border text-sm rounded transition-all duration-300",
                            isDark
                              ? "bg-gray-800 text-gray-100 border-stone-500"
                              : "bg-gray-100 text-gray-800 border-stone-500"
                          )}
                        >
                          {notificationCount}
                        </span>
                      )}
                    </span>
                  </span>
                )}
              </span>
            </div>

            {!isCollapsed && selectedTeam && name == "Team" && (
              <div className={cn("text-xs pl-9 pt-1 bor ")}>{selectedTeam}</div>
            )}
          </Link>
        ))}
      </nav>

      <div className={cn("border-t border-gray-700 flex flex-col pb-4")}>
        <button
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg relative bor",
            isDark ? "hover:bg-gray-800" : "hover:bg-gray-200",
            isCollapsed ? "pl-5 mx-0" : "pl-3 mx-2"
          )}
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {!isCollapsed && (
            <span
              className={cn(
                "w-[200px] overflow-hidden absolute left-12 text-left",
                isCollapsed ? "hidden" : "block"
              )}
            >
              Toggle Theme
            </span>
          )}
        </button>
        <button
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg bor relative bor",
            isDark ? "hover:bg-gray-800" : "hover:bg-gray-300",
            isCollapsed ? "pl-5 mx-0" : "pl-3 mx-2"
          )}
          onClick={toggleOpenLogout}
        >
          <LogOut className="w-5 h-5" />

          {!isCollapsed && (
            <span
              className={cn(
                "w-[200px] overflow-hidden absolute left-12 text-left bor",
                isCollapsed ? "hidden" : "block"
              )}
            >
              Logout
            </span>
          )}
        </button>
        <div
          className={cn(
            "flex items-center gap-3 p-3 relative",
            isCollapsed ? "pl-5 mx-0" : "pl-3 mx-2"
          )}
        >
          <User className="w-6 h-6" />
          {!isCollapsed && (
            <div
              className={cn(
                "w-[200px] overflow-hidden absolute left-12 bor",
                isCollapsed ? "hidden" : "block"
              )}
            >
              <p className="text-sm font-bold">{user && user.name}</p>
              <p className="text-xs text-gray-500">User</p>
            </div>
          )}
        </div>
      </div>
      {/* <Logout isOpen={true}/> */}
    </div>
  );
};

export default Sidebar;
