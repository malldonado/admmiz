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
      { text: "Tipos de endereços", link: "/pages/customers/type-adress" },
      { text: "Campos extras", link: "/pages/customers/extra-fields" },
    ],
  },
  {
    icon: (
      <TfiClipboard className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Produtos",
    link: "",
    subcategories: [
      { text: "Gerenciar produtos", link: "" },
      { text: "Valores de venda", link: "" },
      { text: "Etiquetas", link: "" },
      { text: "Grupos de produtos", link: "" },
      { text: "Unidades de produtos", link: "" },
      { text: "Grades/ Variações", link: "" },
      { text: "Campos extras", link: "" },
    ],
  },
  {
    icon: (
      <TfiRulerPencil className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Serviços",
    link: "",
    subcategories: [
      { text: "Gerenciar serviços", link: "" },
    ],
  },
  {
    icon: (
      <SlChart className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Orçamentos",
    link: "",
    subcategories: [
      { text: "Produtos", link: "" },
      { text: "Serviços", link: "" },
      { text: "Situações", link: "" },
      { text: "Campos extras", link: "" },
      { text: "Modelo de e-mail", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  {
    icon: (
      <TfiWrite className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Ordens de Serviços",
    link: "",
    subcategories: [
      { text: "Gerenciar O.S.", link: "" },
      { text: "Painel", link: "" },
      { text: "Situações", link: "" },
      { text: "Campos extras", link: "" },
      { text: "Modelo de e-mail", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  {
    icon: (
      <SlPieChart className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Vendas",
    link: "",
    subcategories: [
      { text: "Produtos", link: "" },
      { text: "Balcão", link: "" },
      { text: "Serviços", link: "" },
      { text: "Situações", link: "" },
      { text: "Canais", link: "" },
      { text: "Campos extras", link: "" },
      { text: "Modelo de e-mail", link: "" },
      { text: "Balanças", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  {
    icon: (
      <TfiPackage className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Estoque",
    link: "",
    subcategories: [
      { text: "Movimentações", link: "" },
      { text: "Ajustes", link: "" },
      { text: "Transferências", link: "" },
      { text: "Cotações", link: "" },
      { text: "Compras", link: "" },
      { text: "Trocas e devoluções", link: "" },
      { text: "Situações de compras", link: "" },
      { text: "Campos extras", link: "" },
      { text: "Modelo de e-mail", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  {
    icon: (
      <SlWallet className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Financeiro",
    link: "",
    subcategories: [
      { text: "Contas a pagar", link: "" },
      { text: "Contas a receber", link: "" },
      { text: "DRE gerencial", link: "" },
      { text: "Fluxo de caixa", link: "" },
      { text: "Boletos bancários", link: "" },
      { text: "Caixas", link: "" },
      { text: "Contas bancárias", link: "" },
      { text: "Formas de pagamento", link: "" },
      { text: "Plano de contas", link: "" },
      { text: "Situações", link: "" },
      { text: "Centros de custos", link: "" },
      { text: "Cociliação bancária", link: "" },
      { text: "Transferências", link: "" },
      { text: "Campos extras", link: "" },
      { text: "Modelos de e-mails", link: "" },
      { text: "Modelos de e-mails", link: "" },
      { text: "Tabelas de rateios", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  {
    icon: (
      <TfiReceipt className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Notas Fiscais",
    link: "",
    subcategories: [
      { text: "Gerenciar NF-e", link: "" },
      { text: "Gerenciar NFS-e", link: "" },
      { text: "Gerenciar NFC-e", link: "" },
      { text: "Importar XML", link: "" },
      { text: "Certificado Digital", link: "" },
      { text: "Naturezas de operações", link: "" },
      { text: "Tributações", link: "" },
      { text: "Atividades de serviços", link: "" },
      { text: "Modelos de e-mails", link: "" },
      { text: "Intermediadores", link: "" },
      { text: "Configurações", link: "" },


    ],
  },
  {
    icon: (
      <SlNotebook className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Contratos",
    link: "",
    subcategories: [
      { text: "Serviços", link: "" },
      { text: "Locações", link: "" },
      { text: "Assinaturas", link: "" },
      { text: "Situações de contratos", link: "" },
      { text: "Situações de locações", link: "" },
      { text: "Campos extra", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  {
    icon: (
      <TfiComments className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Atendimentos",
    link: "",
    subcategories: [
      { text: "Atendimentos", link: "" },
      { text: "Formas", link: "" },
      { text: "Assuntos", link: "" },
      { text: "Situações", link: "" },
      { text: "Campos extras", link: "" },
      { text: "Configurações", link: "" },
    ],
  },
  // {
  //   icon: (
  //     <TfiAgenda className="w-6 h-6 text-white transition duration-75 dark:text-white" />
  //   ),
  //   text: "Agenda",
  //   link: "",
  //   subcategories: [
  //     { text: "Preferências do Sistema", link: "/pages/settings/system" },
  //     { text: "Permissões do Usuário", link: "/pages/settings/permissions" },
  //   ],
  // },
  {
    icon: (
      <TfiFiles className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Relatórios",
    link: "",
    subcategories: [
      { text: "Cadastros", link: "" },
      { text: "Vendas", link: "" },
      { text: "Ordens de serviços", link: "" },
      { text: "Estoque", link: "" },
      { text: "Financeiro", link: "" },
      { text: "Contratos", link: "" },
      { text: "Notas fiscais", link: "" },
      { text: "Atendimentos", link: "" },
      { text: "Agendamentos", link: "" },
      { text: "Logs do sistema", link: "" }
    ],
  },
  {
    icon: (
      <TfiSettings className="w-6 h-6 text-white transition duration-75 dark:text-white" />
    ),
    text: "Configurações",
    link: "",
    subcategories: [
      { text: "Gerais", link: "" },
      { text: "Meu plano", link: "" },

      { text: "Usuários", link: "" },
      { text: "Dados da empresa", link: "" },
      { text: "Marca da empresa", link: "" },
      { text: "Empresas / Lojas", link: "" },
      { text: "Certificado digital", link: "" },
      { text: "Modelos de e-mails", link: "" },
      { text: "Avisos por e-mail", link: "" },
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
                      className="flex items-center justify-between px-2 py-3 my-2 text-[13px] font-[600] font-main rounded-lg text-white hover:bg-[#315bd4] focus:text-white cursor-pointer"
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
