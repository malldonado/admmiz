"use client";
import React from "react";
import Sidebar from "@/app/components/panel/sidebar";
import Sales from "@/components/panel/dashboard/sales";
import Table from "@/components/panel/dashboard/table";
import Navbar from "@/components/panel/navbar";
import { Chart2 } from "@/components/panel/dashboard/chart2";
import { Chart3 } from "@/components/panel/dashboard/chart3";
import Tasks from "@/components/panel/dashboard/tasks";

const DashboardPage: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">
        <Navbar />
        <Sales />
        <div className="flex justify-between">
          <div className="w-[80%]">
            <span className="text-[#192231] font-bold text-2xl ml-[15px]">
              Finanças
            </span>
            <div className="mb-6 w-[100%] flex">
              <div className="w-full">
                <Chart2 />
              </div>
              <div className="w-full">
                <Chart3 />
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="mb-6">
              <span className="text-[#192231] font-bold text-2xl">
                Tarefas Ativas
              </span>
              <Tasks/>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default DashboardPage;
