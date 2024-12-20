"use client";
import React from "react";
import Sidebar from "@/app/components/panel/sidebar";
import Navbar from "@/components/panel/navbar";
import Form from "@/components/panel/customers/type-contacts/new/form";

const CustomersTypeContactsEdit: React.FC = () => {
  return (
    <div className="h-screen m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white overflow-y-scroll">
        <Navbar />
        <div className="flex justify-start items-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CustomersTypeContactsEdit;