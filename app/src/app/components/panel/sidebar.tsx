"use client";
import React, { useState } from 'react';
import Logo from '../../images/logoWhite.svg';
import { SlPeople } from "react-icons/sl";
import { IoShirtOutline } from "react-icons/io5";
import { FiSettings } from 'react-icons/fi';
import { RxDashboard } from "react-icons/rx";
import { LiaTruckSolid, LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { LuClipboardList, LuWarehouse } from "react-icons/lu";
import NextLink from 'next/link';

interface NavbarItem {
  icon: JSX.Element;
  text: string;
  link: string;
}

const NavbarItems: NavbarItem[] = [
  {
    icon: <RxDashboard className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    icon: <LiaTruckSolid className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Suppliers',
    link: '/suppliers',
  },
  {
    icon: <SlPeople className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Customers',
    link: '/customers',
  },
  {
    icon: <HiOutlineRectangleStack className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Units',
    link: '/units',
  },
  {
    icon: <LuClipboardList className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Category',
    link: '/category',
  },
  {
    icon: <IoShirtOutline className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Product',
    link: '/product',
  },
  {
    icon: <MdOutlineAttachMoney className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Purchase',
    link: '/purchase',
  },
  {
    icon: <LiaFileInvoiceDollarSolid className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Invoice',
    link: '/invoice',
  },
  {
    icon: <LuWarehouse className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Manage Stock',
    link: '/stock',
  },
  {
    icon: <FiSettings className="w-6 h-6 text-white transition duration-75 dark:text-white" />,
    text: 'Settings',
    link: '/settings',
  },
];

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="font-main h-full">
      <div className={`lg:w-[256px] h-screen mx-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transform transition-transform duration-300 ease-in-out`}>
        <div className="w-full h-full">
          <div className="px-3 py-4 overflow-y-auto h-full bg-[#192231] flex flex-col">
            <div className="lg:hidden flex justify-between items-center mb-4">
              <NextLink href="/panel">
                  {/* <img className="w-[150px] ml-2" src={Logo} alt="" /> */}
              </NextLink>
              <button onClick={toggleSidebar} className="text-white focus:outline-none lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isSidebarOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
            <ul className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
              {NavbarItems.map((item, index) => (
                <li key={index}>
                  <NextLink href={item.link}>
                    <div
                      className="flex items-center px-2 py-3 my-2 text-[14px] font-[600] font-main rounded-lg text-white hover:bg-[#e76121] focus:text-white cursor-pointer"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div className="group" onMouseEnter={(e) => e.currentTarget.querySelector('svg')?.classList.add('text-white')} onMouseLeave={(e) => e.currentTarget.querySelector('svg')?.classList.remove('text-white')}>
                        {item.icon}
                      </div>
                      <span className="ml-3">{item.text}</span>
                    </div>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
