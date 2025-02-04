import axios from "axios";
import React, { useContext, useState } from "react";
import { showSuccessMessage, showDangerMessage } from "../utils/notification";
import { useNavigate } from "react-router-dom";

const SettingContext = React.createContext();
const SettingContextUpdate = React.createContext();

export const loadSetting = () => {
  return useContext(SettingContext);
};

export const updateSetting = () => {
  return useContext(SettingContextUpdate);
};

export const SettingProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("u1Token") || null);
  const bearerToken = token ? `Bearer ${JSON.parse(token)}` : "";
  const header = { headers: { Authorization: bearerToken } };
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("u1Token") || false
  );
  const [user, setUser] = useState(null);

  const [openLogout, setOpenLogout] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState("");

  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const toggleOpenLogout = () => {
    setOpenLogout(!openLogout);
  };
  const handelLogout = () => {
    setToken(false);
    setLoggedIn(false);
    localStorage.removeItem("u1Token");
    navigate("/");
  };

  function setAuthFormData(formData, isSignUp) {
    const url = isSignUp
      ? "http://localhost:8080/signUp"
      : "http://localhost:8080/signIn";
    axios
      .post(url, formData)
      .then((res) => {
        console.log(isSignUp ? "Sign Up" : "Sign In", res.data);

        if (isSignUp) {
          showSuccessMessage("Signed In Successfully. Please Log In");
        } else {
          localStorage.setItem("u1Token", JSON.stringify(res.data.token));
          setToken(JSON.stringify(res.data.token));

          // setUserEmail()
          setLoggedIn(true);
          showSuccessMessage("Logged In Successfully");
          navigate("/dashboard/team");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("err", err);
        console.log(err.response.data);
        if (err.status == 401 && err.response.data.detail) {
          showDangerMessage(err.response.data.detail);
        }
        if (err.status == 401 && err.response.data.message) {
          showDangerMessage(err.response.data.message);
        }
      });
  }

  const getUser = () => {
    const url = `http://localhost:8080/user/get-me`;
    axios
      .get(url, header, header)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <SettingContext.Provider
      value={{
        isDark,
        token,
        loggedIn,
        selectedTeamId,
        selectedTeam,
        openLogout,
        user,
      }}
    >
      <SettingContextUpdate.Provider
        value={{
          toggleTheme,
          setSelectedTeamId,
          setSelectedTeam,
          setAuthFormData,
          toggleOpenLogout,
          handelLogout,
          getUser,
        }}
      >
        {children}
      </SettingContextUpdate.Provider>
    </SettingContext.Provider>
  );
};
