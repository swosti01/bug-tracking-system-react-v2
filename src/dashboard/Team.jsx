import { useEffect, useState } from "react";
import { Search, Star, PlusCircle, FileBox } from "lucide-react";
import { cn } from "../utils/index";
import { loadSetting, updateSetting } from "../context/SettingContext";
import { useNavigate } from "react-router-dom";
import CreateTeam from "./CreateTeam";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

const MiniTeam = ({ teamId, name, leader, memberCount }) => {
  const navigate = useNavigate();
  const { isDark } = loadSetting();
  const { setSelectedTeam, setSelectedTeamId } = updateSetting();

  const handelTeamSelection = () => {
    setSelectedTeam(name);
    setSelectedTeamId(teamId);
    navigate("/dashboard/team/" + teamId);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-[200px] h-[80px] border rounded-md p-2 transition-all duration-300 cursor-pointer",
        isDark
          ? "bg-gray-900 text-gray-200 border-gray-700"
          : "bg-gray-100 text-gray-800 border-gray-400"
      )}
      onClick={handelTeamSelection}
    >
      <div className={cn("font-medium")}>{name}</div>
      <div
        className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-500")}
      >
        {leader}
      </div>
      <div
        className={cn(
          "flex justify-between text-xs",
          isDark ? "text-gray-400" : "text-gray-500"
        )}
      >
        <div>Count: {memberCount}</div>
        <div>
          <Star size={16} className="text-amber-400 none" />
        </div>
      </div>
    </div>
  );
};

const TeamGroup = ({ teamsData, title, display, toggleCreateTeam }) => {
  const { isDark } = loadSetting();
  return (
    <div className={cn("flex-1 min-w-[250px]", display ? "" : "hidden")}>
      <h2
        className={`text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {title}{" "}
        {title === "Starred" && <Star size={16} className="text-amber-400" />}
      </h2>
      <div
        className={cn(
          "flex flex-wrap gap-3 p-3 rounded-lg border mt-2 transition-all duration-300",
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
        )}
      >
        {teamsData && teamsData.length > 0 ? (
          teamsData.map((item, index) => (
            <div key={index}>
              <MiniTeam
                key={index}
                teamId={item.id}
                name={item.name}
                leader={item.leader.name}
                memberCount={item.teamMembers.length}
              />
            </div>
          ))
        ) : (
          <>
            {true && (
              <p className="flex justify-center items-center w-[200px] h-[80px] text-gray-500">
                No teams available
              </p>
            )}
          </>
        )}
        {title === "Workspace" && (
          <div
            className={cn(
              "flexmid flex-col w-[200px] h-[80px] border rounded-md p-2 transition-all duration-300 cursor-pointer",
              isDark
                ? "bg-gray-900 text-gray-200 border-gray-700 hover:border-gray-950"
                : "bg-gray-100 text-gray-800 border-gray-400 hover:border-gray-500"
            )}
            onClick={toggleCreateTeam}
          >
            Create New Team
          </div>
        )}
      </div>
    </div>
  );
};
export default function Team({}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = loadSetting();

  const [search, setSearch] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);

  const { teamList } = loadDashboard();
  const { listTeam } = updateDashboard();
  const { setSelectedTeam, setSelectedTeamId } = updateSetting();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      setFilteredTeams(
        teamsData.filter((team) =>
          team.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredTeams([]);
    }
  };

  const toggleCreateTeam = () => {
    setIsOpen(!isOpen);
  };

  const handelTeamSelection = (team) => {
    console.log("selected team ", team);
    setSelectedTeam(team.name);
    setSelectedTeamId(team.id);
    navigate("/dashboard/team/" + team.id);
  };
  useEffect(() => {
    listTeam();
  }, []);

  useEffect(() => {
    setFilteredTeams(teamList ? teamList : []);
  }, [teamList]);

  return (
    <div
      className={cn(
        "hideScroll p-6 h-full w-full flex flex-col overflow-auto pb-32 transition-all duration-300 relative",
        isDark ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      )}
    >
      <div className="w-full">
        {/* Search Bar */}
        <div className="relative mb-4 bor">
          <Search
            className={cn(
              "absolute left-3 top-2.5 transition-all duration-300",
              isDark ? "text-gray-400" : "text-gray-500"
            )}
            size={20}
          />
          <input
            type="text"
            placeholder="Search team..."
            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-white text-gray-900 border-gray-300"
            }`}
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Search Results */}
        <div className="w-full relative bor -mt-3">
          {search && (
            <div
              className={cn(
                "w-full py-3 rounded-lg shadow-md absolute border transition-all duration-300",
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              )}
            >
              {filteredTeams.length > 0 ? (
                filteredTeams.map((team) => (
                  <div
                    key={team.id}
                    className={cn(
                      "py-1 cursor-pointer px-3 mb-1 bor",
                      isDark
                        ? "hover:bg-gray-700 "
                        : "hover:bg-stone-200"
                    )}
                    onClick={() => {
                      handelTeamSelection(team);
                    }}
                  >
                    {team.name}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No teams found</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 bor mt-5 transition-all duration-300">
        {/* <TeamGroup title="Templates" teamsData={teamsData} display={false} />
        <TeamGroup title="Starred" teamsData={teamsData} display={false} />
        <TeamGroup title="Recent" teamsData={teamsData} display={false} /> */}
        <TeamGroup
          title="Workspace"
          teamsData={teamList}
          display={true}
          toggleCreateTeam={toggleCreateTeam}
        />
      </div>
      <div
        className={cn(
          "flex justify-center items-center fixed h-16 w-16 bottom-10 right-10 cursor-pointer rounded-full border transition-all duration-300",
          isDark
            ? "bg-gray-900 text-gray-200 border-gray-700"
            : "bg-gray-100 text-gray-800 border-gray-400"
        )}
        onClick={toggleCreateTeam}
      >
        <FileBox size={40} />
      </div>
      <CreateTeam isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
