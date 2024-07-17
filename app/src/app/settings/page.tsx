"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';

const SettingsPage: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">

      </div>
    </div>
  );
}

export default SettingsPage;
