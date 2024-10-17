"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';
import Navbar from '@/components/panel/navbar';
import { Chart } from '@/components/panel/expenses/chart';
import { Chart2 } from '@/components/panel/expenses/chart2';
import { Chart3 } from '@/components/panel/expenses/chart3';
import Table from '@/components/panel/finance/revenue/table';

const FinanceRevenues: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">
        <Navbar />
        <div className='flex'>
          <Chart />
          <Chart2 />
          <Chart3 />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default FinanceRevenues;
