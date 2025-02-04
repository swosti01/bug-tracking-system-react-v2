import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { loadSetting } from "../context/SettingContext";

const Home = () => {
  const { token, loggedIn } = loadSetting();
  // const [token, setToken] = useState(localStorage.getItem("u1Token") || null);
  // const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard/team");
    }
  }, []);

  return <div className="bor"><Landing/></div>;
};

export default Home;
