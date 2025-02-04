import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";

import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";
import NotFound from "./general/NotFound";
import ColorPalette from "./general/ColorPalette";
import Features from "./pages/Features";
import ProductGuide from "./pages/ProductGuide";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Team from "./dashboard/Team";
import ReportBug from "./dashboard/ReportBug";
import Reports from "./dashboard/Reports";
import Setting from "./dashboard/Setting";
import Account from "./dashboard/Account";
import Notification from "./dashboard/Notification";
import { SettingProvider } from "./context/SettingContext";
import ReportDetails from "./dashboard/ReportDetails";
import UpdateReport from "./dashboard/UpdateReport";
import { DashboardProvider } from "./context/DashboardContext";
import TeamDetails from "./dashboard/TeamDetails";
import Invitation from "./dashboard/Invitation";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SettingProvider>
          <DashboardProvider>
            <Routes>
              ColorPalette
              <Route path="/" element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="product-guide" element={<ProductGuide />} />
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
              <Route path="color" element={<ColorPalette />} />
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="team" element={<Team />} />
                <Route path="team/:id" element={<TeamDetails />} />
                <Route path="report-bug" element={<ReportBug />} />
                <Route path="reports" element={<Reports />} />
                <Route path="report/:id" element={<ReportDetails />} />
                <Route path="update-report/:id" element={<UpdateReport />} />
                <Route path="invitation" element={<Invitation />} />
                <Route path="notification" element={<Notification />} />
                <Route path="account" element={<Account />} />
                <Route path="setting" element={<Setting />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DashboardProvider>
        </SettingProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
