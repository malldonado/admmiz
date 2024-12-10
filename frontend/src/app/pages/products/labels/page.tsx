"use client";
import React from 'react';
import Sidebar from '@/app/components/panel/sidebar';
import Navbar from '@/components/panel/navbar';
import Table from '@/components/panel/products/labels/table';
import Input from '@/components/panel/products/labels/input';
import Button from '@/components/panel/products/labels/button';

const Labels: React.FC = () => {
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

export default Labels;
