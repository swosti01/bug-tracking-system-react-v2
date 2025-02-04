import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadSetting, updateSetting } from "../context/SettingContext";
import { cn } from "../utils";

const Logout = ({ isOpen }) => {
  const { isDark } = loadSetting();
  const { toggleOpenLogout, handelLogout } = updateSetting();
  const onConfirm = () => {
    handelLogout();
    window.location.reload();
  };
  const onCancel = () => {
    console.log("logout no");
    toggleOpenLogout();
  };
  // const isOpen = true;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4`}
        >
          <div
            className={`rounded-2xl p-6 shadow-lg w-full max-w-md ${
              isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <h2 className="text-xl font-semibold">Confirm Logout</h2>
            <p className="mt-2 text-sm">Are you sure you want to log out?</p>
            <div className="mt-4 flex justify-end gap-3">
              <div
                className={cn(
                  "px-5 py-2 rounded-md cursor-pointer bg-red-500 hover:bg-red-600 text-white font-medium",
                  isDark ? "text-stone-100" : "text-stone-100"
                )}
                onClick={onConfirm}
              >
                Logout
              </div>
              <div
                className={cn(
                  "px-5 py-2 bg-transparent rounded-md cursor-pointer border font-medium",
                  isDark
                    ? "border-stone-100 hover:bg-stone-200 hover:text-stone-900"
                    : "border-stone-400 hover:bg-stone-300"
                )}
                onClick={onCancel}
              >
                Cancel
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Logout;
