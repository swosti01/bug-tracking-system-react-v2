import { useState, useEffect } from "react";
import { Bug, FileText, Calendar, ChevronDown, Save } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { cn } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

const priorities = ["Low", "Medium", "High", "Critical"];
const severities = ["Minor", "Major", "Critical", "Blocker", "Trival"];
const resolutions = ["Unresolved", "Fixed", "WontFix", "Duplicate"];
const statuses = [
  "Rejected",
  "New",
  "Verified",
  "Reopened",
  "Closed",
  "Deferred",
  "In",
  "Assigned",
];

export default function ReportDetails() {
  const navigate = useNavigate()
  const { id } = useParams();
  const { isDark, selectedTeamId } = loadSetting();
  const { teamDetail, reportDetail, userEmail } = loadDashboard();
  const { getReportDetail, getTeamById, updateReportPart, deleteReport } =
    updateDashboard();
  const [isTeamLeader, setIsTeamLeader] = useState(false);
  const [bugReport, setBugReport] = useState({});
  const [formbugReport, setFormbugReport] = useState({
    title: "",
    description: "",
    teamId: selectedTeamId,
    priority: "",
    severity: "",
    stepsToReproduce: "",
    version: "",
    environment: "",
    dueDate: "",
    newFileUploaded: false,
    removeFileIds: [],
    files: [],
  });

  const handleChange = (e) => {
    setBugReport({ ...reportDetail, [e.target.name]: e.target.value });
    setFormbugReport({ ...formbugReport, [e.target.name]: e.target.value });
  };

  const handelSubmit = () => {
    const newFormData = new FormData();
    const bugReportBlob = new Blob([JSON.stringify(formbugReport)], {
      type: "application/json",
    });

    newFormData.append("reportRequest", bugReportBlob, "data.json");
    console.log("formbugReport", formbugReport);
    updateReportPart(newFormData, formbugReport.id);
  };
  useEffect(() => {
    getTeamById();
    getReportDetail(id);
  }, []);

  useEffect(() => {
    console.log(reportDetail);
    setBugReport({ ...reportDetail });
    setFormbugReport({
      id: reportDetail.id,
      title: reportDetail.title,
      description: reportDetail.description,
      teamId: selectedTeamId,
      status: reportDetail.status,
      priority: reportDetail.priority,
      severity: reportDetail.severity,
      stepsToReproduce: reportDetail.stepsToReproduce,
      version: reportDetail.version,
      environment: reportDetail.environment,
      dueDate: reportDetail.dueDate,

      newFileUploaded: false,
      removeFileIds: [],
      files: [],
    });
  }, [reportDetail]);

  // const { , teamDetail, emailList } = loadDashboard();
  //   const { getTeamById, listEmail, deleteTeam } = updateDashboard();
  //   const [isTeamLeader, setIsTeamLeader] = useState(false);

  //   useEffect(() => {
  //     getTeamById(id);
  //     listEmail();
  //   }, []);

  useEffect(() => {
    setIsTeamLeader(
      teamDetail.leader ? teamDetail.leader.email == userEmail : false
    );
    console.log(teamDetail);
  }, [teamDetail]);

  return (
    <div
      className={`w-full h-full p-6 pb-16 transition-all overflow-y-auto duration-300 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {bugReport && (
        <>
          <h2 className="text-2xl font-semibold flex items-center">
            <Bug className="mr-2" size={22} /> Bug Report Details
          </h2>

          {/* Report Details */}
          <div className="mt-4 space-y-3">
            <DetailItem label="Title" value={bugReport.title} />
            <DetailItem
              label="Description"
              value={bugReport.description}
              nextLine={true}
            />
            <DetailItem
              label="Steps to Reproduce"
              value={bugReport.stepsToReproduce}
              nextLine={true}
              split={true}
            />
            <DetailItem
              label="Environment"
              value={bugReport.environment}
              nextLine={true}
            />
            <DetailItem label="Version" value={bugReport.version} />
            {/* <DetailItem label="Assigned Team" value={bugReport.team} /> */}
            <DetailItem
              label="Due Date"
              value={bugReport.dueDate}
              icon={<Calendar size={18} />}
            />
          </div>

          {/* Editable Fields */}
          <div className="flex flex-col gap-y-5 mt-6 bor">
            <Dropdown
              label="Priority"
              name="priority"
              options={priorities}
              value={bugReport.priority}
              onChange={handleChange}
            />
            <Dropdown
              label="Severity"
              name="severity"
              options={severities}
              value={bugReport.severity}
              onChange={handleChange}
            />
            {/* <Dropdown
              label="Resolution"
              name="resolution"
              options={resolutions}
              value={bugReport.resolution}
              onChange={handleChange}
            /> */}
            <Dropdown
              label="Status"
              name="status"
              options={statuses}
              value={bugReport.status}
              onChange={handleChange}
            />
          </div>
          <div>
            {/* {bugReport.fileIds && bugReport.fileIds.length} */}
            <ul className="mt-2">
              {bugReport.fileIds &&
                bugReport.fileIds.map((fileId, index) => (
                  <li key={index}>
                    <a
                      href={`http://localhost:8080/image/${fileId}`}
                      download
                      className="text-blue-600 dark:text-blue-400 underline"
                    >
                      Download File {index + 1}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Save Button */}
          <div className="flex gap-5 w-full mt-6">
            <button
              className=" bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700"
              onClick={handelSubmit}
            >
              <Save size={18} /> Save Changes
            </button>
            <div className=" bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 cursor-pointer" onClick={()=>{navigate("/dashboard/update-report/"+id)}}>
              Update
            </div>
            {isTeamLeader ? (
              <div
                className="bor px-6 py-1.5 text-stone-100 bg-red-500 hover:bg-red-500 rounded-md cursor-pointer "
                onClick={() => {
                  deleteReport(id);
                }}
              >
                Delete Report
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Detail Item Component
const DetailItem = ({ label, value, icon = null, nextLine, split }) => {
  const { isDark } = loadSetting();
  return (
    <div
      className={cn(
        "flex items-center transition-all duration-300",
        isDark ? "text-gray-300" : "text-gray-900"
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <p className="text-base font-semibold">
        {label}&nbsp;{nextLine && <br />}
        <span
          className={cn(
            "font-normal tracking-wide transition-all duration-300",
            isDark ? "text-gray-400" : "text-gray-800"
          )}
        >
          {split
            ? value
              ? value
                  .split("\n")
                  .map((line, index) => <span key={index}>{line}</span>)
              : value
            : value}
        </span>
      </p>
    </div>
  );
};

// Dropdown Component
const Dropdown = ({ label, name, options, value, onChange }) => {
  const { isDark } = loadSetting();
  function capitalizeFirstLetter(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  }
  return (
    <div className="flex justify-between w-2/5 bor">
      <label className="flex items-center text-base font-medium pb-1">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          value={capitalizeFirstLetter(value)}
          onChange={onChange}
          className={cn(
            " p-2 border rounded-md transition-all duration-300 w-[200px]",
            isDark
              ? "bg-gray-900 text-gray-200 border-gray-700"
              : "bg-gray-100 text-gray-800 border-gray-400"
          )}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* <ChevronDown className="absolute top-3 right-3 text-gray-500" size={16} /> */}
      </div>
    </div>
  );
};

/*




*/
