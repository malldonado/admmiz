"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';
import Navbar from '@/components/panel/navbar';
import Button from '@/components/panel/customers/suppliers/button';
import Input from '@/components/panel/customers/suppliers/input';
import Table from '@/components/panel/customers/suppliers/table';

const CustomersSuppliers: React.FC = () => {
  return (
    <div className="h-full m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white">
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

export default CustomersSuppliers;
