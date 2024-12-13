"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';
import Navbar from '@/components/panel/navbar';
import Table from '@/components/panel/customers/clients/table';
import Button from '@/components/panel/customers/clients/button';
import ImportButton from '@/components/panel/customers/clients/ImportButton';
import Input from '@/components/panel/customers/clients/input';

const CustomersClients: React.FC = () => {
  return (
    <div className="h-screen m-0 p-0 overflow-hidden flex justify-center contain bg-[#192231]">
      <Sidebar />
      <div className="relative h-auto w-full bg-white overflow-y-scroll">
        <Navbar/>
        <div className='flex justify-start items-center'>
          <Button/>
          <ImportButton/>
          <Input/>
        </div>
        <Table/>
      </div>
    </div>
  );
}

export default CustomersClients;
