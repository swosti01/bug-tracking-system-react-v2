import React from "react";
import { loadSetting } from "../context/SettingContext";


const ToggleSwitch = ({ value, setValue }) => {
  const { isDark } = loadSetting();
  const theme = isDark ? "dark" : "light";
  const bgColor =
    theme === "dark"
      ? "bg-gray-600 peer-checked:bg-blue-400"
      : "bg-gray-300 peer-checked:bg-blue-500";
  const knobColor = theme === "dark" ? "bg-gray-200" : "bg-white";

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue(!value)}
        className="sr-only peer"
      />
      <div
        className={`w-11 h-6 ${bgColor} rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:${knobColor} after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5`}
      ></div>
    </label>
  );
};

export default ToggleSwitch;
