import { useEffect, useState } from "react";
import { Mail, MailOpen, Trash2 } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import { cn } from "../utils";
import { loadDashboard, updateDashboard } from "../context/DashboardContext";

const notificationsData = [
  {
    id: 1,
    title: "New Bug Assigned",
    message: "A new bug has been assigned to you.",
    type: "info",
    read: false,
  },
  {
    id: 2,
    title: "System Update",
    message: "Version 1.2.3 is now available.",
    type: "update",
    read: false,
  },
  {
    id: 3,
    title: "Bug Resolved",
    message: "Bug #103 has been fixed.",
    type: "success",
    read: false,
  },
];

export default function Notifications() {
  const { isDark } = loadSetting();
  const { notificationList } = loadDashboard();
  const { listNotification } = updateDashboard();
  const [notifications, setNotifications] = useState(notificationsData);

  const toggleRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  useEffect(() => {
    listNotification();
  }, []);
  useEffect(() => {
    console.log(notificationList);
  }, [notificationList]);
  return (
    <div
      className={`flex flex-col w-full h-full p-6 transition-all ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <div
        className={`hideScroll border rounded-lg divide-y transition-all overflow-y-auto ${
          isDark
            ? "border-gray-700 divide-gray-700"
            : "border-gray-300 divide-gray-200"
        }`}
      >
        {notificationList && notificationList.length === 0 ? (
          <p className="p-4 text-center text-gray-500">No notifications</p>
        ) : (
          notificationList.map(({ id,content,teamSender, title, message, readNotification }) => (
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
                  {teamSender}
                </h3>
                <p className="text-xs text-gray-500">{content}</p>
              </div>
              <div
                className={cn(
                  "flex items-center space-x-3",
                  isDark ? "text-gray-200" : "text-gray-800"
                )}
              >
                <button
                  onClick={() => toggleRead(id)}
                  className="hover:text-blue-500 transition-all"
                >
                  {readNotification ? <MailOpen size={18} /> : <Mail size={18} />}
                </button>
                <button
                  onClick={() => deleteNotification(id)}
                  className="hover:text-red-500 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
