import React from "react";
import {
  BugReport,
  Speed,
  Group,
  Notifications,
  Security,
  Dashboard,
} from "@mui/icons-material";

const features = [
  {
    icon: <BugReport className="text-blue-600 text-5xl" />,
    title: "Comprehensive Bug Tracking",
    description:
      "Easily track, prioritize, and resolve bugs with an intuitive dashboard.",
  },
  {
    icon: <Speed className="text-green-600 text-5xl" />,
    title: "Real-Time Performance Monitoring",
    description:
      "Monitor application performance and identify issues instantly.",
  },
  {
    icon: <Group className="text-purple-600 text-5xl" />,
    title: "Team Collaboration",
    description:
      "Work together with your team seamlessly in a shared bug tracking workspace.",
  },
  {
    icon: <Notifications className="text-yellow-600 text-5xl" />,
    title: "Instant Alerts & Notifications",
    description:
      "Get notified in real-time about bug status updates and new reports.",
  },
  {
    icon: <Security className="text-red-600 text-5xl" />,
    title: "Enterprise-Grade Security",
    description:
      "Ensure data protection with role-based access and encrypted storage.",
  },
  {
    icon: <Dashboard className="text-indigo-600 text-5xl" />,
    title: "Customizable Dashboards",
    description:
      "Personalize your bug tracking dashboard with widgets and filters.",
  },
];

const MiniFeatures = () => {
  return (
    <section className="container mx-auto px-6 mt-12">
      <h3 className="text-3xl font-bold text-center text-gray-900">
        Why Choose Us?
      </h3>
      <div className="mt-8 grid md:grid-cols-3 gap-8 z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h4 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h4>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniFeatures;
