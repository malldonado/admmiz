"use client";
import React, { useState } from "react";
import { SlPeople } from "react-icons/sl";
import { MdOutlineInventory2, MdTaskAlt, MdOutlineAttachMoney } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiProjectorScreenChart } from "react-icons/pi";
import NextLink from "next/link";

interface Subcategory {
  text: string;
  link: string;
}

interface NavbarItem {
  icon: JSX.Element;
  text: string;
  link: string;
  subcategories?: Subcategory[];
}

const NavbarItems: NavbarItem[] = [
  {
    icon: (
      <RxDashboard className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Dashboard",
    link: "/pages/dashboard",
  },
  {
    icon: (
      <PiProjectorScreenChart className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Projects",
    link: "",
    subcategories: [
      { text: "All Projects", link: "/pages/project/all" },
      { text: "New Project", link: "/pages/project/new" },
      { text: "Project Reports", link: "/pages/project/reports" },
    ],
  },
  {
    icon: (
      <LiaFileInvoiceDollarSolid className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Budgets",
    link: "",
    subcategories: [
      { text: "Manage Budgets", link: "/pages/budgets/manage" },
      { text: "Pending Budgets", link: "/pages/budgets/pending" },
      { text: "Budget Comparison", link: "/pages/budgets/comparison" },
    ],
  },
  {
    icon: (
      <MdOutlineAttachMoney className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Finance",
    link: "",
    subcategories: [
      { text: "Expenses", link: "/pages/finance/expenses" },
      { text: "Revenues", link: "/pages/finance/revenues" },
      { text: "Financial Reports", link: "/pages/finance/reports" },
    ],
  },
  {
    icon: (
      <HiOutlineArchiveBox className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Materials and Stock",
    link: "",
    subcategories: [
      { text: "Inventory", link: "/pages/stock/inventory" },
      { text: "Purchase Orders", link: "/pages/stock/purchase" },
      { text: "Suppliers", link: "/pages/stock/suppliers" },
    ],
  },
  {
    icon: (
      <SlPeople className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Contributors",
    link: "",
    subcategories: [
      { text: "Team", link: "/pages/contributors/team" },
      { text: "Hours Worked", link: "/pages/contributors/hoursworked" },
      { text: "Responsibilities", link: "/pages/contributors/responsibilities" },
    ],
  },
  {
    icon: (
      <MdTaskAlt className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Tasks",
    link: "",
    subcategories: [
      { text: "Active Tasks", link: "/pages/tasks/active" },
      { text: "New Task", link: "/pages/tasks/new" },
      { text: "Agenda", link: "/pages/tasks/agenda" },
    ],
  },
  {
    icon: (
      <IoDocumentTextOutline className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Documents",
    link: "",
    subcategories: [
      { text: "Files", link: "/pages/documents/files" },
      { text: "Recent Documents", link: "/pages/documents/recent" },
      { text: "License Management", link: "/pages/documents/license" },
    ],
  },
  {
    icon: (
      <HiOutlineDocumentReport className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Reports",
    link: "",
    subcategories: [
      { text: "Project Reports", link: "/pages/reports/project" },
      { text: "Financial Reports", link: "/pages/reports/finance" },
      { text: "Stock Reports", link: "/pages/reports/stock" },
    ],
  },
  {
    icon: (
      <FiSettings className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Settings",
    link: "",
    subcategories: [
      { text: "System Preferences", link: "/pages/settings/system" },
      { text: "User Permissions", link: "/pages/settings/permissions" },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubcategories, setOpenSubcategories] = useState<string | null>(
    null
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubcategories = (text: string) => {
    setOpenSubcategories(openSubcategories === text ? null : text);
  };

  return (
    <div className="font-main h-full">
      <div
        className={`lg:w-[256px] h-screen mx-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transform transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full h-full">
          <div className="px-3 py-4 overflow-y-auto h-full bg-[#192231] flex flex-col">
            <ul className={`lg:block ${isSidebarOpen ? "block" : "hidden"}`}>
              {NavbarItems.map((item, index) => (
                <li key={index}>
                  <NextLink href={item.link}>
                    <div
                      className="flex items-center justify-between px-2 py-3 my-2 text-[14px] font-[600] font-main rounded-lg text-white hover:bg-[#315bd4] focus:text-white cursor-pointer"
                      onClick={() => {
                        setIsSidebarOpen(false);
                        if (item.subcategories) toggleSubcategories(item.text);
                      }}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className="ml-3">{item.text}</span>
                      </div>
                      {item.subcategories && (
                        <svg
                          className={`w-4 h-4 transform ${
                            openSubcategories === item.text ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>
                  </NextLink>
                  {item.subcategories && openSubcategories === item.text && (
                    <ul className="pl-8">
                      {item.subcategories.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NextLink href={subItem.link}>
                            <div
                              className="flex items-center px-2 py-2 my-1 text-[14px] font-[500] text-white hover:bg-[#315bd4] focus:text-white cursor-pointer"
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              <span className="ml-3">{subItem.text}</span>
                            </div>
                          </NextLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
