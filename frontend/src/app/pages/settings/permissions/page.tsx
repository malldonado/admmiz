"use client";
import React from "react";
import Sidebar from "@/app/components/panel/sidebar";
import Profile from "@/components/panel/settings/profile/form";
import Navbar from "@/components/panel/navbar";

const SettingsPermissions: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
};

export default SettingsPermissions;
