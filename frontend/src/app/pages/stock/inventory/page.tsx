"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';
import Navbar from '@/components/panel/navbar';
import Table from '@/components/panel/stock/inventory/table';
import Button from '@/components/panel/stock/inventory/button';

const StockInventory: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">
        <Navbar/>
        <Button/>
        <Table/>
      </div>
    </div>
  );
}

export default StockInventory;
