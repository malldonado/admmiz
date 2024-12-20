"use client";
import React, { useState } from "react";
import { SlPeople } from "react-icons/sl";
import { RxDashboard } from "react-icons/rx";
import {
  TfiAgenda,
  TfiPackage,
  TfiRulerPencil,
  TfiReceipt,
  TfiClipboard,
  TfiWrite,
  TfiComments,
  TfiFiles,
  TfiSettings,
} from "react-icons/tfi";
import { SlChart, SlPieChart, SlWallet, SlNotebook } from "react-icons/sl";
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
    text: "Início",
    link: "/pages/dashboard",
  },
  {
    icon: (
      <SlPeople className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Cadastros",
    link: "",
    subcategories: [
      { text: "Clientes", link: "/pages/customers/clients" },
      { text: "Fornecedores", link: "/pages/customers/employees" },
      { text: "Funcionários", link: "/pages/customers/suppliers" },
      { text: "Transportadoras", link: "/pages/customers/carriers" },
      { text: "Tipos de contatos", link: "/pages/customers/type-contacts" },
      // { text: "Tipos de endereços", link: "/pages/customers/type-address" },
      // { text: "Campos extras", link: "/pages/customers/extra-fields" },
    ],
  },
  {
    icon: (
      <TfiClipboard className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Produtos",
    link: "",
    subcategories: [
      { text: "Gerenciar produtos", link: "/pages/products/product-management" },
      { text: "Valores de venda", link: "/pages/products/sales-values" },
      { text: "Etiquetas", link: "/pages/products/labels" },
      { text: "Grupos de produtos", link: "/pages/products/product-groups" },
      { text: "Unidades de produtos", link: "/pages/products/product-units" },
      { text: "Grades/ Variações", link: "/pages/products/variations" },
      { text: "Campos extras", link: "/pages/products/extra-fields" },
    ],
  },
  {
    icon: (
      <TfiRulerPencil className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Serviços",
    link: "",
    subcategories: [
      { text: "Gerenciar serviços", link: "/pages/services/service-management" },
    ],
  },
  {
    icon: (
      <SlChart className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Orçamentos",
    link: "",
    subcategories: [
      { text: "Produtos", link: "/pages/budgets/products" },
      { text: "Serviços", link: "/pages/budgets/services" },
      { text: "Situações", link: "/pages/budgets/situations" },
      { text: "Campos extras", link: "/pages/budgets/extra-fields" },
      // { text: "Modelo de e-mail", link: "/pages/budgets/email-template" },
      { text: "Configurações", link: "/pages/budgets/settings" },
    ],
  },
  {
    icon: (
      <TfiWrite className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Ordens de Serviços",
    link: "",
    subcategories: [
      { text: "Gerenciar O.S.", link: "/pages/service-orders/manage-os" },
      { text: "Painel", link: "/pages/service-orders/panel" },
      { text: "Situações", link: "/pages/service-orders/situations" },
      { text: "Campos extras", link: "/pages/service-orders/extra-fields" },
      // { text: "Modelo de e-mail", link: "/pages/service-orders/email-template" },
      { text: "Configurações", link: "/pages/service-orders/settings" },
    ],
  },
  {
    icon: (
      <SlPieChart className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Vendas",
    link: "",
    subcategories: [
      { text: "Produtos", link: "/pages/sales/products" },
      { text: "Balcão", link: "/pages/sales/counter" },
      { text: "Serviços", link: "/pages/sales/services" },
      { text: "Situações", link: "/pages/sales/situations" },
      { text: "Canais", link: "/pages/sales/channels" },
      { text: "Campos extras", link: "/pages/sales/extra-fields" },
      // { text: "Modelo de e-mail", link: "/pages/sales/email-template" },
      { text: "Balanças", link: "/pages/sales/scales" },
      { text: "Configurações", link: "/pages/sales/settings" },
    ],
  },
  {
    icon: (
      <TfiPackage className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Estoque",
    link: "",
    subcategories: [
      { text: "Movimentações", link: "/pages/stock/movement" },
      { text: "Ajustes", link: "/pages/stock/adjustments" },
      { text: "Transferências", link: "/pages/stock/transfers" },
      { text: "Cotações", link: "/pages/stock/quotes" },
      { text: "Compras", link: "/pages/stock/shopping" },
      { text: "Trocas e devoluções", link: "/pages/stock/exchange-return" },
      { text: "Situações de compras", link: "/pages/stock/purchasing-situations" },
      { text: "Campos extras", link: "/pages/stock/extra-fields" },
      // { text: "Modelo de e-mail", link: "/pages/stock/email-template" },
      { text: "Configurações", link: "/pages/stock/settings" },
    ],
  },
  {
    icon: (
      <SlWallet className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Financeiro",
    link: "",
    subcategories: [
      { text: "Contas a pagar", link: "/pages/financial/accounts-payable" },
      { text: "Contas a receber", link: "/pages/financial/accounts-receivable" },
      { text: "DRE gerencial", link: "/pages/financial/managerial-dre" },
      { text: "Fluxo de caixa", link: "/pages/financial/cash-flow" },
      { text: "Boletos bancários", link: "/pages/financial/bank-slips" },
      { text: "Caixas", link: "/pages/financial/checkouts" },
      { text: "Contas bancárias", link: "/pages/financial/bank-accounts" },
      { text: "Formas de pagamento", link: "/pages/financial/payment-methods" },
      { text: "Plano de contas", link: "/pages/financial/chart-accounts" },
      { text: "Situações", link: "/pages/financial/situations" },
      { text: "Centros de custos", link: "/pages/financial/cost-centers" },
      { text: "Cociliação bancária", link: "/pages/financial/bank-reconciliation" },
      { text: "Transferências", link: "/pages/financial/transfers" },
      { text: "Campos extras", link: "/pages/financial/extra-fields" },
      // { text: "Modelos de e-mails", link: "/pages/financial/email-templates" },
      { text: "Tabelas de rateios", link: "/pages/financial/allocation-tables" },
      { text: "Configurações", link: "/pages/financial/settings" },
    ],
  },
  {
    icon: (
      <TfiReceipt className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Notas Fiscais",
    link: "",
    subcategories: [
      { text: "Gerenciar NF-e", link: "/pages/invoices/manage-nf-e" },
      { text: "Gerenciar NFS-e", link: "/pages/invoices/manage-nfs-e" },
      { text: "Gerenciar NFC-e", link: "/pages/invoices/manage-nfc-e" },
      { text: "Importar XML", link: "/pages/invoices/import-xml" },
      { text: "Certificado Digital", link: "/pages/invoices/digital-certificate" },
      { text: "Naturezas de operações", link: "/pages/invoices/nature-operations" },
      { text: "Tributações", link: "/pages/invoices/taxation" },
      { text: "Atividades de serviços", link: "/pages/invoices/service-activities" },
      // { text: "Modelos de e-mails", link: "/pages/invoices/email-templates" },
      { text: "Intermediadores", link: "/pages/invoices/intermediaries" },
      { text: "Configurações", link: "/pages/invoices/settings" },
    ],
  },
  {
    icon: (
      <SlNotebook className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Contratos",
    link: "",
    subcategories: [
      { text: "Serviços", link: "/pages/contracts/services" },
      { text: "Locações", link: "/pages/contracts/locations" },
      { text: "Assinaturas", link: "/pages/contracts/signatures" },
      { text: "Situações de contratos", link: "/pages/contracts/contract-situations" },
      { text: "Situações de locações", link: "/pages/contracts/rental-situations" },
      { text: "Campos extra", link: "/pages/contracts/extra-fields" },
      { text: "Configurações", link: "/pages/contracts/settings" },
    ],
  },
  // {
  //   icon: (
  //     <TfiComments className="w-6 h-6 text-white transition duration-75 dark:text-white" />
  //   ),
  //   text: "Atendimentos",
  //   link: "",
  //   subcategories: [
  //     { text: "Atendimentos", link: "/pages/meet/services" },
  //     { text: "Formas", link: "/pages/meet/shapes" },
  //     { text: "Assuntos", link: "/pages/meet/matters" },
  //     { text: "Situações", link: "/pages/meet/situations" },
  //     { text: "Campos extras", link: "/pages/meet/extra-fields" },
  //     { text: "Configurações", link: "/pages/meet/settings" },
  //   ],
  // },
  {
    icon: (
      <TfiFiles className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Relatórios",
    link: "",
    subcategories: [
      { text: "Cadastros", link: "/pages/reports/registrations" },
      { text: "Vendas", link: "/pages/reports/sales" },
      { text: "Ordens de serviços", link: "/pages/reports/service-orders" },
      { text: "Estoque", link: "/pages/reports/stock" },
      { text: "Financeiro", link: "/pages/reports/financial" },
      { text: "Contratos", link: "/pages/reports/contracts" },
      { text: "Notas fiscais", link: "/pages/reports/invoices" },
      { text: "Atendimentos", link: "/pages/reports/services" },
      { text: "Agendamentos", link: "/pages/reports/appointments" },
      { text: "Logs do sistema", link: "/pages/reports/system-logs" }
    ],
  },
  {
    icon: (
      <TfiSettings className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Configurações",
    link: "",
    subcategories: [
      { text: "Gerais", link: "/pages/settings/general" },
      { text: "Usuários", link: "/pages/settings/users" },
      { text: "Dados da empresa", link: "/pages/settings/company-details" },
      { text: "Marca da empresa", link: "/pages/settings/company-brand" },
      { text: "Empresas / Lojas", link: "/pages/settings/companies-stores" },
      { text: "Certificado digital", link: "/pages/settings/digital-certificate" },
      // { text: "Modelos de e-mails", link: "/pages/settings/email-templates" },
      // { text: "Avisos por e-mail", link: "/pages/settings/email-notices" },
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
        className={`lg:w-[260px] h-full mx-auto ${
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
                      className="flex items-center justify-between px-2 py-3 my-2 text-[13px] font-[600] font-main text-white hover:bg-[#315bd4] focus:text-white cursor-pointer"
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
