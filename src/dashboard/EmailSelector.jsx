import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { cn } from "../utils";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";
import { useParams } from "react-router-dom";

export default function EmailSelector() {
  const { id } = useParams();
  const { isDark } = loadSetting();
  const { emailList } = loadDashboard();
  const { listEmail, inviteToTeam } = updateDashboard();
  const [input, setInput] = useState("");
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.trim()) {
      setFilteredEmails(
        emailList.filter(
          (email) => email.includes(value) && !selectedEmails.includes(email)
        )
      );
    } else {
      setFilteredEmails([]);
    }
  };

  const handleSelect = (email) => {
    if (!selectedEmails.includes(email)) {
      setSelectedEmails([...selectedEmails, email]);
      setInput("");
      setFilteredEmails([]);
    }
  };

  const handleRemove = (email) => {
    setSelectedEmails(selectedEmails.filter((e) => e !== email));
  };

  const handelInvite = () => {
    console.log(selectedEmails);
    const formData = { teamId: id, emailList: selectedEmails };
    console.log("formData", formData);
    inviteToTeam(formData);
  };

  useEffect(() => {
    listEmail();
  }, []);

  return (
    <div
      className={`w-full auto transition-all duration-300 relative bor bg-transparent ${
        isDark ? " text-white" : " text-gray-900"
      } rounded-lg shadow-lg`}
    >
      <div
        className={cn(
          "flex flex-wrap gap-2 border p-2 rounded-lg bor transition-all duration-300",
          isDark
            ? "bg-gray-800 text-gray-100 border-gray-700"
            : "bg-white text-gray-900 border-gray-300"
        )}
      >
        {selectedEmails.map((email) => (
          <div
            key={email}
            className={cn(
              "flex items-center px-2 py-1 rounded-lg border transition-all duration-300",
              isDark
                ? "bg-gray-900 text-gray-200 border-gray-700"
                : "bg-gray-200 text-gray-800 border-gray-400"
            )}
          >
            {email}
            <button
              onClick={() => handleRemove(email)}
              className={cn(
                "ml-2",
                isDark ? "text-stone-100" : "text-stone-900"
              )}
            >
              <X size={16} />
            </button>
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="flex-1 outline-none bg-transparent px-2 py-1 text-sm "
          placeholder="Enter email..."
        />
      </div>
      {filteredEmails.length > 0 && (
        <div className="flex absolute w-full h-[240px]">
          <ul
            className={`hideScroll border mt-2 rounded-lg absolute w-full h-full overflow-auto ${
              isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            {filteredEmails.map((email) => (
              <li
                key={email}
                className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                onClick={() => handleSelect(email)}
              >
                {email}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-5 bor">
        <button
          className=" py-1.5 px-10 bg-[#1976D2] text-[#E0E0E0] rounded-lg hover:bg-[#1565C0] transition-colors shadow-lg"
          onClick={handelInvite}
        >
          Invite
        </button>
      </div>
    </div>
  );
}
