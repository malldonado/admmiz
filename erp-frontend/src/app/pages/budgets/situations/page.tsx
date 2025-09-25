"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';
import Navbar from '@/components/panel/navbar';
import Button from '@/components/panel/budgets/situations/button';
import Input from '@/components/panel/budgets/situations/input';
import Table from '@/components/panel/budgets/situations/table';

const BudgetsSituations: React.FC = () => {
  return (
    <div className="h-screen m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white overflow-y-scroll">
        <Navbar/>
        <div className='flex justify-start items-center'>
          <Button/>
          <Input/>
        </div>
        <Table/>
      </div>
    </div>
  );
}

export default BudgetsSituations;
