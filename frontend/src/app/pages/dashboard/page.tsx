"use client";
import React from "react";
import Sidebar from "@/app/components/panel/sidebar";
import Sales from "@/components/panel/dashboard/sales";
import Table from "@/components/panel/dashboard/table";
import Navbar from "@/components/panel/navbar";

const DashboardPage: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">
        <Navbar />
        <Sales />
        <Table />
      </div>
    </div>
  );
};

export default DashboardPage;
