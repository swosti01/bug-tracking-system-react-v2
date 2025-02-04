import { useState } from "react";
import { Bell, Shield, Settings, Lock, Link, Github, Slack } from "lucide-react";
import { loadSetting } from "../context/SettingContext";
import ToggleSwitch from "../utils/ToggleSwitch";


const userSettings = {
  general: {
    language: "English",
    timeZone: "UTC-5",
    dateFormat: "YYYY-MM-DD"
  },
  notifications: {
    bugStatusUpdates: true,
    mentionsAndComments: true,
    preferredNotificationChannel: ["email", "in-app"]
  },
  security: {
    twoFactorAuthentication: true
  },
  integrations: {
    github: { connected: true },
    slack: { connected: true }
  },
  dataAndPrivacy: {
    dataExport: true,
    showEmailToPublic: false
  }
};

export default function Setting() {
  const { isDark } = loadSetting();
  const [settings, setSettings] = useState(userSettings);

  const toggle2FA = () => {
    setSettings({ ...settings, security: { ...settings.security, twoFactorAuthentication: !settings.security.twoFactorAuthentication } });
  };

  return (
    <div className={`w-full h-full p-6 transition-all ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <h2 className="text-2xl font-semibold flex items-center"><Settings className="mr-2" size={22} />Settings</h2>

      {/* Notifications */}
      <div className="mt-4">
        <h3 className="font-semibold flex items-center"><Bell className="mr-2 text-yellow-500" size={18} />Notifications</h3>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={settings.notifications.bugStatusUpdates} onChange={() => {}} className="form-checkbox" />
          <span>Bug Status Updates</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input type="checkbox" checked={settings.notifications.mentionsAndComments} onChange={() => {}} className="form-checkbox" />
          <span>Mentions & Comments</span>
        </label>
      </div>

      {/* Security */}
      <div className="mt-4">
        <h3 className="font-semibold flex items-center"><Shield className="mr-2 text-red-500" size={18} />Security</h3>
        <div className="flex items-center justify-between">
          <span>Two-Factor Authentication</span>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600" onClick={toggle2FA}>
            {settings.security.twoFactorAuthentication ? "Disable" : "Enable"}
          </button>
        </div>
      </div>

      {/* Integrations */}
      <div className="mt-4">
        <h3 className="font-semibold flex items-center"><Link className="mr-2 text-green-500" size={18} />Integrations</h3>
        <div className="flex items-center justify-between">
          <span className="flex items-center"><Github size={16} className="mr-2" />GitHub</span>
          <button className="px-3 py-1 text-sm rounded-md text-white" style={{ backgroundColor: settings.integrations.github.connected ? "red" : "green" }}>
            {settings.integrations.github.connected ? "Disconnect" : "Connect"}
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center"><Slack size={16} className="mr-2" />Slack</span>
          <button className="px-3 py-1 text-sm rounded-md text-white" style={{ backgroundColor: settings.integrations.slack.connected ? "red" : "green" }}>
            {settings.integrations.slack.connected ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>

      {/* Data & Privacy */}
      <div className="mt-4">
        <h3 className="font-semibold flex items-center"><Lock className="mr-2 text-gray-500" size={18} />Data & Privacy</h3>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={settings.dataAndPrivacy.dataExport} onChange={() => {}} className="form-checkbox" />
          <span>Enable Data Export</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input type="checkbox" checked={settings.dataAndPrivacy.showEmailToPublic} onChange={() => {}} className="form-checkbox" />
          <span>Show Email to Public</span>
        </label>
      </div>
    </div>
  );
}
