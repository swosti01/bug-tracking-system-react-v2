import { useEffect, useState } from "react";
import { Upload, X, CalendarClock, Sun, Moon } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { useNavigate } from "react-router-dom";
import { cn } from "../utils/index";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

const ReportBug = () => {
  const navigate = useNavigate();
  const [fileCount, setFileCount] = useState(0);
  const [errors, setErrors] = useState({});
  const { isDark, selectedTeamId } = loadSetting();

  const { createReport } = updateDashboard();

  const teams = ["Frontend", "Backend", "DevOps", "QA"];
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

  const [formData, setFormData] = useState({
    // title: "Hello Bug",
    // description: "Idk listining to song",
    // teamId: selectedTeamId,
    // priority: "Low",
    // severity: "Critical",
    // stepsToReproduce: "1.cat\n2.dog\n3.eagle",
    // version: "v1.3.6",
    // environment: "Windows Chrome",
    // dueDate: new Date().toISOString().slice(0, 16).replace("T", "T"),
    // newFileUploaded: false,
    // removeFileIds: [],
    // files: [],
    title: "",
    description: "",
    teamId: selectedTeamId,
    priority: "",
    severity: "",
    stepsToReproduce: "",
    version: "",
    environment: "",
    dueDate: null,
    newFileUploaded: false,
    removeFileIds: [],
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = 10 - formData.files.length;
    const newFiles = files.slice(0, remainingSlots);
    setFormData((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
    setFileCount(fileCount + 1);
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
    setFileCount(fileCount - 1);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "title",
      "description",
      "teamId",
      "priority",
      "severity",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    //reportRequest && files
    try {
      e.preventDefault();
      if (validateForm()) {
        console.log("intial form Data:", formData);
        const formDataCopy = {
          ...formData,
          newFileUploaded: formData.files.length > 0,
        };
        delete formDataCopy.files;
        console.log(
          "tersary form Data and copy:",
          formData,
          "copy",
          formDataCopy
        );

        const newFormData = new FormData();
        const reportRequestBlob = new Blob([JSON.stringify(formDataCopy)], {
          type: "application/json",
        });

        newFormData.append("reportRequest", reportRequestBlob, "data.json");
        if (formData.files && Array.isArray(formData.files)) {
          formData.files.forEach((file) => {
            newFormData.append("files", file);
          });
        }
        console.log("start loop");
        for (let [key, value] of newFormData.entries()) {
          console.log("lol", key, value);
        }
        console.log("end loop");
        createReport(newFormData);
        resetForm();
      }
    } catch (e) {
      console.log("Err", e);
    }

    // console.log("Form Data:", formData);
  };

  const resetForm = () => {
    setFormData({
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
  };

  return (
    <div
      className={cn(
        "h-full w-full overflow-auto p-6 pb-32 transition-colors duration-300",
        isDark
          ? "bg-gray-900 text-gray-200 border-gray-700"
          : "bg-white text-gray-800 border-gray-400"
      )}
    >
      <h2
        className={`text-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Bug Report
      </h2>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex flex-col gap-3 p-3 rounded-lg border mt-2 transition-all duration-300 bor",
          isDark
            ? "bg-gray-800 border-gray-700"
            : "bg-stone-200 border-gray-400"
        )}
      >
        {/* Title and Version */}

        <div
          className={cn(
            "flex flex-col px-2 transition-all duration-300 cursor-pointer bor",
            isDark ? "text-gray-200" : "text-gray-800"
          )}
        >
          <label className="block mb-2">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-stone-100 text-gray-900 border-gray-400"
            )}
            placeholder="Report title..."
          />
          {errors.title && (
            <p className="text-[#D32F2F] text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col px-2 transition-all duration-300 cursor-pointer bor",
            isDark ? "text-gray-200" : "text-gray-800"
          )}
        >
          <label className="block mb-2">Version</label>
          <input
            name="version"
            value={formData.version}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-stone-100 text-gray-900 border-gray-400"
            )}
            placeholder="Version..."
          />
        </div>

        {/* Description */}
        <div className="flex flex-col px-2 bor">
          <label
            className={cn(
              "block mb-2 transition-all duration-300",
              isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={cn(
              "w-full h-[120px] resize-none overflow-auto px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 m-0 bor",
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-stone-100 text-gray-900 border-gray-400"
            )}
            placeholder="Description..."
          />
          {errors.description && (
            <p className="text-[#D32F2F] text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col px-2 bor">
          <label
            className={cn(
              "block mb-2 transition-all duration-300",
              isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            Steps To Reproduce
          </label>
          <textarea
            name="stepsToReproduce"
            value={formData.stepsToReproduce}
            onChange={handleChange}
            className={cn(
              "w-full h-[120px] resize-none overflow-auto px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-stone-100 text-gray-900 border-gray-400"
            )}
            placeholder="Steps To Reproduce..."
          />
          {errors.stepsToReproduce && (
            <p className="text-[#D32F2F] text-sm mt-1">
              {errors.stepsToReproduce}
            </p>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col px-2 transition-all duration-300 cursor-pointer bor",
            isDark ? "text-gray-200" : "text-gray-800"
          )}
        >
          <label className="block mb-2">Environment</label>
          <input
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-stone-100 text-gray-900 border-gray-400"
            )}
            placeholder="Environment..."
          />
          {errors.environment && (
            <p className="text-[#D32F2F] text-sm mt-1">{errors.environment}</p>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col px-2 transition-all duration-300 cursor-pointer bor",
            isDark ? "text-gray-200" : "text-gray-800"
          )}
        >
          <label className="block mb-2">Version</label>
          <input
            name="version"
            value={formData.version}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
              isDark
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-stone-100 text-gray-900 border-gray-400"
            )}
            placeholder="Version..."
          />
          {errors.version && (
            <p className="text-[#D32F2F] text-sm mt-1">{errors.version}</p>
          )}
        </div>

        {/* Dropdown Selections */}
        <div className="px-2 grid grid-cols-1 md:grid-cols-3 gap-2 bor">
          <div className="none">
            <label
              className={cn(
                "block mb-2 transition-all duration-300",
                isDark ? "text-gray-200" : "text-gray-800"
              )}
            >
              Team
            </label>
            <select
              name="teamId"
              value={formData.teamId}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-700"
                  : "bg-stone-100 text-gray-900 border-gray-400"
              )}
            >
              <option value="">Select Team</option>
              {teams.map((teamId) => (
                <option key={teamId} value={teamId}>
                  {teamId}
                </option>
              ))}
            </select>
            {errors.teamId && (
              <p className="text-[#D32F2F] text-sm mt-1">{errors.teamId}</p>
            )}
          </div>

          <div className="">
            <label
              className={cn(
                "block mb-2 transition-all duration-300",
                isDark ? "text-gray-200" : "text-gray-800"
              )}
            >
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-700"
                  : "bg-stone-100 text-gray-900 border-gray-400"
              )}
            >
              <option value="">Select Priority</option>
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
            {errors.priority && (
              <p className="text-[#D32F2F] text-sm mt-1">{errors.priority}</p>
            )}
          </div>

          <div>
            <label
              className={cn(
                "block mb-2 transition-all duration-300",
                isDark ? "text-gray-200" : "text-gray-800"
              )}
            >
              Severity
            </label>
            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                isDark
                  ? "bg-gray-800 text-gray-100 border-gray-700"
                  : "bg-stone-100 text-gray-900 border-gray-400"
              )}
            >
              <option value="">Select Severity</option>
              {severities.map((severity) => (
                <option key={severity} value={severity}>
                  {severity}
                </option>
              ))}
            </select>
            {errors.severity && (
              <p className="text-[#D32F2F] text-sm mt-1">{errors.severity}</p>
            )}
          </div>
        </div>

        {/* File Upload */}
        <div className="px-2 bor">
          <label
            className={cn(
              "block mb-2 transition-all duration-300",
              isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            Attach Files (max 10)
          </label>
          <label className="flex items-center justify-center w-full p-4 border-2 border-dashed border-[#1976D2] rounded-lg cursor-pointer hover:bg-[#1976D2]/10 transition-colors">
            <Upload className="w-6 h-6 mr-2 text-[#1976D2] dark:text-[#FF9800]" />
            <span className="text-[#1976D2] dark:text-[#FF9800]">
              Click to upload
            </span>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
              //              // disabled={formData.files ? formData.files.length >= 10 : false}
            />
          </label>

          <div className="mt-4 space-y-2">
            {formData.files &&
              formData.files.map((file, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex justify-between w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                    isDark
                      ? "bg-gray-800 text-gray-100 border-gray-700"
                      : "bg-stone-100 text-gray-900 border-gray-400"
                  )}
                >
                  <span className="">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            className=" py-2 px-10 bg-[#1976D2] text-[#E0E0E0] rounded-lg hover:bg-[#1565C0] transition-colors shadow-lg"
          >
            Submit
          </button>
          {/* <button
            type="reset"
            className=" py-2 px-10 bg-[#1976D2] text-[#E0E0E0] rounded-lg hover:bg-[#1565C0] transition-colors shadow-lg none"
          >
            Reset
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ReportBug;
