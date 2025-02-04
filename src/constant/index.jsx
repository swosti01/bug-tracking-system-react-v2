import {
  Home,
  Bug,
  Search,
  Settings,
  Users,
  Bell,
  MailOpen,
  FilePlus,
  Component,
  ClipboardMinus,
  FileStack,
  LogOut,
} from "lucide-react";

const palettes = [
  {
    title: "Professional Dark Mode",
    colors: {
      Primary: "#1E1E2E (Deep Indigo)",
      Secondary: "#282A36 (Dark Grey)",
      Accent: "#FF79C6 (Pink)",
      Text: "#F8F8F2 (White)",
      Success: "#50FA7B (Neon Green)",
      Warning: "#F1FA8C (Yellow)",
      Error: "#FF5555 (Red)",
    },
  },
  {
    title: "Soft Pastel Theme",
    colors: {
      Primary: "#A1C3D1 (Pastel Blue)",
      Secondary: "#F4EAE6 (Soft Cream)",
      Accent: "#D8A7B1 (Muted Pink)",
      Text: "#3D3B40 (Dark Grey)",
      Success: "#A3E4DB (Mint Green)",
      Warning: "#F9D976 (Golden Yellow)",
      Error: "#FF6961 (Salmon Red)",
    },
  },
  {
    title: "High Contrast & Vibrant",
    colors: {
      Primary: "#0D1117 (Dark Navy)",
      Secondary: "#161B22 (Charcoal Grey)",
      Accent: "#FF6F61 (Bright Coral)",
      Text: "#F0F6FC (Off White)",
      Success: "#2EA043 (Bright Green)",
      Warning: "#FFD700 (Gold)",
      Error: "#D73A49 (Crimson Red)",
    },
  },
  {
    title: "Sleek Material UI Style",
    colors: {
      Primary: "#1976D2 (Material Blue)",
      Secondary: "#424242 (Dark Grey)",
      Accent: "#FFC107 (Amber)",
      Text: "#E0E0E0 (Light Grey)",
      Success: "#4CAF50 (Green)",
      Warning: "#FF9800 (Orange)",
      Error: "#D32F2F (Red)",
    },
  },
  {
    title: "Earthy & Minimalist",
    colors: {
      Primary: "#4E6E58 (Forest Green)",
      Secondary: "#D9BF77 (Warm Beige)",
      Accent: "#B5525C (Muted Rose)",
      Text: "#FFF7EB (Ivory)",
      Success: "#6A994E (Olive Green)",
      Warning: "#F2C14E (Goldenrod)",
      Error: "#E63946 (Brick Red)",
    },
  },
];

export const navigation = [
  { title: "Home", link: "/", loggedIn: false, display: true },
  { title: "Features", link: "/features", loggedIn: false, display: true },
  {
    title: "Product Guide",
    link: "/product-guide",
    loggedIn: false,
    display: true,
  },
  { title: "Service", link: "/service", loggedIn: false, display: true },
  { title: "Contact Us", link: "/contact", loggedIn: false, display: true },
  { title: "Dashboard", link: "/dashboard", loggedIn: true, display: true },
];

export const faqData = [
  {
    question: "What is a Bug Tracking System?",
    answer:
      "A tool that helps manage, track, and resolve bugs or issues within a software project.",
  },
  {
    question: "How do I report a bug?",
    answer:
      "Go to the 'Report Bug' section, fill in the title, description, severity, priority, and attach any relevant files. Then, submit the bug report.",
  },
  {
    question: "How can I search for a specific bug?",
    answer:
      "Use the search bar or filters to search by bug ID, status, severity, or assignee.",
  },
  {
    question: "What does each bug status mean?",
    answer:
      "Open: Bug has been reported but not yet worked on. In Progress: Bug is being worked on. Resolved: Bug is fixed or addressed but not yet verified. Closed: Bug is fixed and verified as resolved.",
  },
  {
    question: "Can I change the priority or severity of a bug?",
    answer:
      "Yes, only admins or authorized users can update the priority or severity of a bug as needed.",
  },
  {
    question: "How do I assign a bug to someone?",
    answer:
      "Admins or managers can assign bugs to developers or teams via the bug details page.",
  },
  {
    question: "Can I add comments to a bug?",
    answer:
      "Yes, you can add comments to communicate progress, updates, or ask for clarifications.",
  },
  {
    question: "What happens when a bug is resolved?",
    answer:
      "Once resolved, the bug status changes to 'Resolved.' It can then be tested by the QA team, and once verified, it will be marked as 'Closed.'",
  },
  {
    question: "How are users notified about updates?",
    answer:
      "Users receive notifications when a bug’s status changes, when it’s assigned to them, or when new comments are added.",
  },
  {
    question: "Can I attach files to a bug report?",
    answer:
      "Yes, you can attach files such as screenshots, logs, or other relevant documents when reporting a bug or updating it.",
  },
  {
    question: "How can I filter bugs by their status?",
    answer:
      "Use the filters on the bug dashboard to narrow down the bugs by status (Open, In Progress, Resolved, Closed) and other parameters.",
  },
  {
    question: "Can I track the history of a bug?",
    answer:
      "Yes, the system maintains an activity log that shows the history of status changes, comments, and other updates related to the bug.",
  },
  {
    question: "How do I close a bug?",
    answer:
      "After confirming the bug is fixed and verified, change its status to 'Closed.'",
  },
  {
    question: "Can multiple users work on the same bug?",
    answer:
      "Yes, multiple users can collaborate through comments, but the bug can only be assigned to one person at a time.",
  },
  {
    question: "Can I generate reports from the bug tracking system?",
    answer:
      "Yes, the system may provide options for generating reports on bug statistics, progress, or overall project health.",
  },
];

export const sidebar = [
  {
    name: "Team",
    link: "team",
    icon: Component,
    role: ["user", "admin"],
    teamNeeded: false,
    display: true,
  },
  {
    name: "Report Bug",
    link: "report-bug",
    icon: Bug,
    role: ["user", "admin"],
    teamNeeded: true,
    display: true,
  },
  {
    name: "Reports",
    link: "reports",
    icon: FileStack,
    role: ["user", "admin"],
    teamNeeded: true,
    display: true,
  },
  {
    name: "Invitation",
    link: "invitation",
    icon: MailOpen,
    role: ["user", "admin"],
    teamNeeded: false,
    display: true,
  },
  {
    name: "Notification",
    link: "notification",
    icon: Bell,
    role: ["user", "admin"],
    teamNeeded: false,
    display: true,
  },
  {
    name: "Account",
    link: "account",
    icon: Users,
    role: ["user", "admin"],
    teamNeeded: false,
    display: true,
  },
  {
    name: "Setting",
    link: "setting",
    icon: Settings,
    role: ["user", "admin"],
    teamNeeded: false,
    display: true,
  },
];
