import { useEffect, useState } from "react";
import { Upload, X, Sun, Moon } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../utils/index";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

const UpdateReport = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const { isDark, selectedTeamId } = loadSetting();
  const { teamDetail, reportDetail, userEmail } = loadDashboard();
  const { getReportDetail,updateReport, getTeamById, updateReportPart, deleteReport } =
    updateDashboard();

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
    title: "",
    description: "",
    teamId: selectedTeamId,
    priority: "",
    severity: "",
    status: "",
    stepsToReproduce: "",
    version: "",
    environment: "",
    dueDate: null,
    newFileUploaded: false,
    removeFileIds: [],
    fileIds: [],
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
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };
  const removeOldFile = (id) => {
    let rmvFiles = formData.removeFileIds;
    rmvFiles.push(id);
    console.log("rmvFiles", rmvFiles);
    setFormData({ ...formData, removeFileIds: rmvFiles });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "title",
      "description",
      // "teamId",
      "priority",
      "severity",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    console.log("newErrors", newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Form Data:", formData);

        const formDataCopy = {
          ...formData,
          newFileUploaded: formData.files.length > 0,
        };
        delete formDataCopy.files;
        console.log("tersary form Data and copy:",formData,"copy",formDataCopy);

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
        updateReport(newFormData,id);
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  function capitalizeFirstLetter(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  }

  useEffect(() => {
    getReportDetail(id);
  }, []);

  useEffect(() => {
    console.log(reportDetail);
    setFormData({
      id:id,
      title: reportDetail.title,
      description: reportDetail.description,
      teamId: selectedTeamId,
      priority: capitalizeFirstLetter(reportDetail.priority),
      severity: capitalizeFirstLetter(reportDetail.severity),
      status: capitalizeFirstLetter(reportDetail.status),
      stepsToReproduce: reportDetail.stepsToReproduce,
      version: reportDetail.version,
      environment: reportDetail.environment,
      dueDate: null,
      newFileUploaded: false,
      removeFileIds: [],
      fileIds: reportDetail.fileIds,
      files: [],
    });
  }, [reportDetail]);

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
        Update Bug Report
      </h2>
      {formData && (
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
              "flex flex-col gap-5 px-2 transition-all duration-300 cursor-pointer bor",
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
              "flex flex-col gap-5 px-2 transition-all duration-300 cursor-pointer bor",
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
              <p className="text-[#D32F2F] text-sm mt-1">
                {errors.description}
              </p>
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

          {/* Dropdown Selections */}
          <div className="px-2 grid grid-cols-1 md:grid-cols-3 gap-2 bor">
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

            <div>
              <label
                className={cn(
                  "block mb-2 transition-all duration-300",
                  isDark ? "text-gray-200" : "text-gray-800"
                )}
              >
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                  isDark
                    ? "bg-gray-800 text-gray-100 border-gray-700"
                    : "bg-stone-100 text-gray-900 border-gray-400"
                )}
              >
                <option value="">Select Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {errors.status && (
                <p className="text-[#D32F2F] text-sm mt-1">{errors.status}</p>
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
                disabled={formData.files.length >= 10}
              />
            </label>

            <div className="mt-4 space-y-2 bor">
              {formData.fileIds &&
                formData.fileIds.map((file, index) => (
                  <div key={index}>
                    {!formData.removeFileIds.includes(file) && (
                      <div
                        key={index}
                        className={cn(
                          "flex justify-between w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                          isDark
                            ? "bg-gray-800 text-gray-100 border-gray-700"
                            : "bg-stone-100 text-gray-900 border-gray-400"
                        )}
                      >
                        <span className="">Old File {index + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeOldFile(file)}
                          className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <div className="mt-2 space-y-2">
              {formData.files.map((file, index) => (
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
            <button
              type="reset"
              className=" py-2 px-10 bg-[#1976D2] text-[#E0E0E0] rounded-lg hover:bg-[#1565C0] transition-colors shadow-lg none"
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateReport;
