import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { loadSetting, updateSetting } from "./SettingContext";
import { showSuccessMessage, showDangerMessage } from "../utils/notification";
import { useNavigate } from "react-router-dom";

const DashboardContext = React.createContext();
const DashboardContextUpdate = React.createContext();

export const loadDashboard = () => {
  return useContext(DashboardContext);
};

export const updateDashboard = () => {
  return useContext(DashboardContextUpdate);
};

export const DashboardProvider = ({ children }) => {
  const navigate = useNavigate();
  const { selectedTeamId } = loadSetting();
  const { setSelectedTeamId, setSelectedTeam } = updateSetting();
  const [token, setToken] = useState(localStorage.getItem("u1Token") || null);
  const bearerToken = token ? `Bearer ${JSON.parse(token)}` : "";
  const header = { headers: { Authorization: bearerToken } };
  const [userEmail, setUserEmail] = useState(
    extractEmailFromJWT(token) || null
  );

  const [teamList, setTeamList] = useState([]);
  const [userTeamInvitationList, setUserTeamInvitationList] = useState([]);
  const [teamDetail, setTeamDetail] = useState([]);

  const [emailList, setEmailList] = useState([]);

  const [notificationList, setNotificationList] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const [reportList, setReportList] = useState([]);
  const [reportDetail, setReportDetail] = useState([]);
  // CRUD | [create] [list, detail] [update] [delete]

  const createTeam = (formData) => {
    const url = `http://localhost:8080/user/team/create-team`;
    axios
      .post(url, formData, header)
      .then((res) => {
        // console.log("team list res", res.data);
        listTeam();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const listTeam = () => {
    const url = `http://localhost:8080/user/team/list-team`;
    axios
      .get(url, header, header)
      .then((res) => {
        // console.log("team list res", res.data);
        setTeamList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const listTeamByInvitationByUser = () => {
    const url = `http://localhost:8080/user/team/list-team-invitation-bu-user`;
    axios
      .get(url, header, header)
      .then((res) => {
        // console.log("team invitation list res", res.data);
        setNotificationCount(res.data ? res.data.length : 0);
        setUserTeamInvitationList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getTeamById = (id) => {
    const url = `http://localhost:8080/user/team/get-team-by-id/${selectedTeamId}`;
    axios
      .get(url, header, header)
      .then((res) => {
        setTeamDetail(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const listEmail = () => {
    const url = `http://localhost:8080/list-user`;
    axios
      .get(url, header, header)
      .then((res) => {
        const tempEmailList = res.data
          .map((user) => user.email) // Extract emails
          .filter(
            (email, index, self) => email && self.indexOf(email) === index
          ) // Remove duplicates
          .sort(); // Sort alphabetically
        // console.log("tempEmailList", tempEmailList);
        setEmailList(tempEmailList);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const inviteToTeam = (formData) => {
    const url = `http://localhost:8080/user/team/invite-users-to-team`;
    axios
      .post(url, formData, header)
      .then((res) => {
        // console.log("invite to team res", res.data);
        showSuccessMessage("Invitation sent successfully");
        // getTeamById(selectedTeamId);
      })
      .catch((err) => {
        console.log("err", err);
        showDangerMessage("Failed to sent invitation");
      });
  };

  const handelTeamInvite = (teamId, accept) => {
    const url = `http://localhost:8080/user/team/${
      accept ? "accept" : "decline"
    }-team-invitation/${teamId}`;
    console.log("url", url);
    axios
      .get(url, header, header)
      .then((res) => {
        console.log("invitation res", res.data);
        listTeamByInvitationByUser();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const listNotification = () => {
    const url = `http://localhost:8080/user/notification/list-notification`;
    axios
      .get(url, header, header)
      .then((res) => {
        setNotificationList(res.data);
        // console.log("notificatino list", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const createReport = (formData) => {
    const url = `http://localhost:8080/user/report/create-report`;
    axios
      .post(url, formData, header)
      .then((res) => {
        console.log("create report", res.data);
        listReport();
        showSuccessMessage("Report created succesfully");
      })
      .catch((err) => {
        console.log("err", err);
        showDangerMessage("Report failed created");
      });
  };

  const listReport = () => {
    const url = `http://localhost:8080/user/report/list-report-by-team/${selectedTeamId}`;
    // const url = `http://localhost:8080/user/report/list-report-by-team/8878b4ef-5c0a-43fd-bc4e-c5ae11c6c3e5`;
    axios
      .get(url, header, header)
      .then((res) => {
        console.log("report list res", res.data);
        setReportList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getReportDetail = (id) => {
    const url = `http://localhost:8080/user/report/get-report-by-id/${id}`;
    axios
      .get(url, header, header)
      .then((res) => {
        // const nextLine = res.data.stepsToReproduce.replace(/\n/g, <br/>);
        // setReportDetail({...res.data,stepsToReproduce:<>{nextLine}</>});
        setReportDetail(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const updateReportPart = (formData, reportId) => {
    const url = `http://localhost:8080/user/report/update-report-part`;
    axios
      .post(url, formData, header)
      .then((res) => {
        console.log("update report", res.data);
        getReportDetail(reportId);
        showSuccessMessage("Report updated succesfully");
      })
      .catch((err) => {
        console.log("err", err);
        showDangerMessage("Report failed to update");
      });
  };

  const deleteTeam = () => {
    const url = `http://localhost:8080/user/team/delete-team/${selectedTeamId}`;
    axios
      .post(url, header, header)
      .then((res) => {
        console.log("delete team", res.data);
        showSuccessMessage("Team deleted succesfully");
        listTeam();
        setSelectedTeamId(0);
        setSelectedTeam("");
        navigate("/dashboard/team");
      })
      .catch((err) => {
        console.log("err", err);
        showDangerMessage("Failed to delete team");
      });
  };

  const deleteReport = (id) => {
    const url = `http://localhost:8080/user/report/remove-report/${id}`;
    axios
      .post(url, header, header)
      .then((res) => {
        console.log("delete team", res.data);
        showSuccessMessage("Report deleted succesfully");
        navigate("/dashboard/reports");
      })
      .catch((err) => {
        console.log("err", err);
        showDangerMessage("Failed to delete report");
      });
  };

  const updateReport = (formData, reportId) => {
    const url = `http://localhost:8080/user/report/update-report`;
    axios
      .post(url, formData, header)
      .then((res) => {
        console.log("update report", res.data);
        getReportDetail(reportId);
        showSuccessMessage("Report updated succesfully");
      })
      .catch((err) => {
        console.log("err", err);
        showDangerMessage("Report failed to update");
      });
  };

  // useEffect(()=>{
  //   listTeam()
  // },[])
  function extractEmailFromJWT(token) {
    try {
      const base64Url = token.split(".")[1]; // Get the payload part
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const decodedPayload = JSON.parse(atob(base64)); // Decode and parse JSON
      return decodedPayload.sub; // 'sub' usually contains the email
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        userEmail,
        teamList,
        userTeamInvitationList,
        teamDetail,
        emailList,
        notificationCount,
        notificationList,
        reportList,
        reportDetail,
      }}
    >
      <DashboardContextUpdate.Provider
        value={{
          listTeam,
          listTeamByInvitationByUser,
          getTeamById,
          handelTeamInvite,
          createTeam,
          deleteTeam,
          listEmail,
          inviteToTeam,
          listNotification,
          createReport,
          listReport,
          getReportDetail,
          updateReportPart,
          deleteReport,
          updateReport,
        }}
      >
        {children}
      </DashboardContextUpdate.Provider>
    </DashboardContext.Provider>
  );
};
