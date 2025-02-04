import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { loadSetting } from "../context/SettingContext";
import Logout from "../general/Logout";

const Dashboard = () => {
  const { token, loggedIn, openLogout } = loadSetting();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div className="flex hw-100">
      <div className="bor">{loggedIn && <Sidebar />}</div>
      {loggedIn && (
        <div className="flex flex-1">
          <Outlet />
          <Logout isOpen={openLogout} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
