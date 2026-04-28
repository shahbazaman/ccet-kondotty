"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { 
  FiLogOut, FiImage, FiFileText, FiUsers, FiClock, 
  FiMapPin, FiBriefcase, FiSettings, FiCalendar 
} from "react-icons/fi";

// Import manager components
import GalleryManager from "./components/GalleryManager";
import NewsManager from "./components/NewsManager";
import ClubsManager from "./components/ClubsManager";
import MilestonesManager from "./components/MilestonesManager";
import CalendarManager from "./components/CalendarManager";
import FacultyManager from "./components/FacultyManager";
import SettingsManager from "./components/SettingsManager";
import JobsManager from "./components/JobsManager";

type Tab = "gallery" | "news" | "clubs" | "milestones" | "calendar" | "faculty" | "settings" | "jobs";

const tabs = [
  { id: "gallery" as Tab, label: "Gallery", icon: <FiImage size={18} /> },
  { id: "news" as Tab, label: "News & Events", icon: <FiFileText size={18} /> },
  { id: "clubs" as Tab, label: "Clubs & Forums", icon: <FiUsers size={18} /> },
  { id: "milestones" as Tab, label: "Milestones", icon: <FiClock size={18} /> },
  { id: "calendar" as Tab, label: "Academic Calendar", icon: <FiCalendar size={18} /> },
  { id: "faculty" as Tab, label: "Faculty", icon: <FiUsers size={18} /> },
  { id: "jobs" as Tab, label: "Career Jobs", icon: <FiBriefcase size={18} /> },
  { id: "settings" as Tab, label: "Contact Settings", icon: <FiSettings size={18} /> },
];

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("gallery");

  const handleLogout = async () => {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
      await signOut({ redirect: false });
      toast.success("Logged out successfully");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="font-heading text-xl font-bold text-primary">CCET Admin Dashboard</h1>
              <p className="text-xs text-gray-500">Welcome, {session?.user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <FiLogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6 overflow-x-auto">
          <div className="flex gap-2 p-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          {activeTab === "gallery" && <GalleryManager />}
          {activeTab === "news" && <NewsManager />}
          {activeTab === "clubs" && <ClubsManager />}
          {activeTab === "milestones" && <MilestonesManager />}
          {activeTab === "calendar" && <CalendarManager />}
          {activeTab === "faculty" && <FacultyManager />}
          {activeTab === "jobs" && <JobsManager />}
          {activeTab === "settings" && <SettingsManager />}
        </div>
      </div>
    </div>
  );
}