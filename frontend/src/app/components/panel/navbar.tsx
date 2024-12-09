"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getTitle = () => {
    switch (pathname) {
      case "/pages/dashboard":
        return "Início";
      case "/pages/customers/clients":
        return "Clientes";
      case "/pages/customers/clients/new":
        return "Novo Cliente";
      case "/pages/customers/clients/edit":
        return "Editando Cliente";
      case "/pages/customers/employees":
        return "Fornecedores";
      case "/pages/customers/employees/new":
        return "Novo Fornecedor";
      case "/pages/customers/employees/edit":
        return "Editando Fornecedor";
      case "/pages/customers/suppliers":
        return "Funcionários";
      case "/pages/customers/suppliers/new":
        return "Novo Funcionário";
      case "/pages/customers/suppliers/edit":
        return "Editando Funcionário";
      case "/pages/customers/carriers":
        return "Transportadoras";
      case "/pages/customers/carriers/new":
        return "Nova Transportadora";
      case "/pages/customers/carriers/edit":
        return "Editando Transportadora";
      case "/pages/customers/type-contacts":
        return "Tipos de Contatos";
      case "/pages/customers/type-address":
        return "Tipos de Endereços";
      case "/pages/customers/extra-fields":
        return "Campos Extras";
      case "/pages/products/product-management":
        return "Gerenciar Produtos";
      case "/pages/products/sales-values":
        return "Valores de Venda";
      case "/pages/products/sales-values/new":
        return "Novos Valores de Venda";
      case "/pages/products/labels":
        return "Etiquetas";
      case "/pages/products/labels/new":
        return "Nova Etiqueta";
      case "/pages/products/product-groups":
        return "Grupos de Produtos";
      case "/pages/products/product-units":
        return "Unidades de Produtos";
      case "/pages/products/variations":
        return "Grades / Variações";
      case "/pages/products/extra-fields":
        return "Campos Extras";
      case "/pages/services/service-management":
        return "Gerenciar Serviços";
      case "/pages/budgets/products":
        return "Produtos";
      case "/pages/budgets/services":
        return "Serviços";
      case "/pages/budgets/situations":
        return "Situações";
      case "/pages/budgets/extra-fields":
        return "Campos Extras";
      case "/pages/budgets/email-template":
        return "Modelo de e-mail";
      case "/pages/budgets/settings":
        return "Configurações";
      case "/pages/service-orders/manage-os":
        return "Gerenciar O.S";
      case "/pages/service-orders/panel":
        return "Painel";
      case "/pages/service-orders/situations":
        return "Situações";
      case "/pages/service-orders/extra-fields":
        return "Campos Extras";
      case "/pages/service-orders/email-template":
        return "Modelo de e-mail";
      case "/pages/service-orders/settings":
        return "Configurações";
      case "/pages/sales/products":
        return "Produtos";
      case "/pages/sales/counter":
        return "Balcão";
      case "/pages/sales/services":
        return "Serviços";
      case "/pages/sales/situations":
        return "Situações";
      case "/pages/sales/channels":
        return "Canais";
      case "/pages/sales/extra-fields":
        return "Campos Extras";
      case "/pages/sales/email-template":
        return "Modelo de e-mail";
      case "/pages/sales/scales":
        return "Balanças";
      case "/pages/sales/settings":
        return "Configurações";
      case "/pages/stock/movement":
        return "Movimentações";
      case "/pages/stock/adjustments":
        return "Ajustes";
      case "/pages/stock/transfers":
        return "Transferências";
      case "/pages/stock/quotes":
        return "Cotações";
      case "/pages/stock/shopping":
        return "Compras";
      case "/pages/stock/exchange-return":
        return "Trocas e Devoluções";
      case "/pages/stock/purchasing-situations":
        return "Situações de Compras";
      case "/pages/stock/extra-fields":
        return "Campos Extras";
      case "/pages/stock/email-template":
        return "Modelo de e-mail";
      case "/pages/stock/settings":
        return "Configurações";
      case "/pages/financial/accounts-payable":
        return "Contas a Pagar";
      case "/pages/financial/accounts-receivable":
        return "Contas a Receber";
      case "/pages/financial/managerial-dre":
        return "DRE Gerencial";
      case "/pages/financial/cash-flow":
        return "Fluxo de Caixa";
      case "/pages/financial/bank-slips":
        return "Boletos Bancários";
      case "/pages/financial/checkouts":
        return "Caixas";
      case "/pages/financial/bank-accounts":
        return "Contas Bancárias";
      case "/pages/financial/payment-methods":
        return "Formas de Pagamento";
      case "/pages/financial/chart-accounts":
        return "Plano de Contas";
      case "/pages/financial/situations":
        return "Situações";
      case "/pages/financial/cost-centers":
        return "Centros de Custos";
      case "/pages/financial/bank-reconciliation":
        return "Cociliação Bancária";
      case "/pages/financial/transfers":
        return "Transferências";
      case "/pages/financial/extra-fields":
        return "Campos Extras";
      case "/pages/financial/email-templates":
        return "Modelos de e-mails";
      case "/pages/financial/allocation-tables":
        return "Tabelas de Rateios";
      case "/pages/financial/settings":
        return "Configurações";
      case "/pages/invoices/manage-nf-e":
        return "Gerenciar NF-e";
      case "/pages/invoices/manage-nfs-e":
        return "Gerenciar NFS-e";
      case "/pages/invoices/manage-nfc-e":
        return "Gerenciar NFC-e";
      case "/pages/invoices/import-xml":
        return "Importar XML";
      case "/pages/invoices/digital-certificate":
        return "Certificado Digital";
      case "/pages/invoices/nature-operations":
        return "Naturezas de Operações";
      case "/pages/invoices/taxation":
        return "Tributações";
      case "/pages/invoices/service-activities":
        return "Atividades de Serviços";
      case "/pages/invoices/email-templates":
        return "Modelos de e-mails";
      case "/pages/invoices/intermediaries":
        return "Intermediadores";
      case "/pages/invoices/settings":
        return "Configurações";
      case "/pages/contracts/services":
        return "Serviços";
      case "/pages/contracts/locations":
        return "Locações";
      case "/pages/contracts/signatures":
        return "Assinaturas";
      case "/pages/contracts/contract-situations":
        return "Situações de Contratos";
      case "/pages/contracts/rental-situations":
        return "Situações de Locações";
      case "/pages/contracts/extra-fields":
        return "Campos Extra";
      case "/pages/contracts/settings":
        return "Configurações";
      case "/pages/meet/services":
        return "Atendimentos";
      case "/pages/meet/shapes":
        return "Formas";
      case "/pages/meet/matters":
        return "Assuntos";
      case "/pages/meet/situations":
        return "Situações";
      case "/pages/meet/extra-fields":
        return "Campos Extras";
      case "/pages/meet/settings":
        return "Configurações";
      default:
        return "";
    }
  };

  if (!mounted) return null; // Evita renderizar o componente até que o roteador esteja montado

  return (
    <div className="flex flex-wrap">
      <div className="h-8 bg-[#005fff] w-full text-white flex justify-center items-center">
          Sua versão de demonstração expira em 10 dias
      </div>
      <div className="mb-2 mx-auto w-full bg-white h-20">
        <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-5 px-4">
          <div className="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
            <span className="my-0 flex text-dark flex-col justify-center text-[#192231] font-bold text-2xl">
              {getTitle()}
            </span>
          </div>
          <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
            <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
              <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <span
                onClick={() => {
                  const input = document.querySelector(
                    "input"
                  ) as HTMLInputElement;
                  if (input) input.value = "";
                }}
                className="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
            <div className="relative lg:hidden flex items-center sm:ml-2 ml-auto">
              <a
                href="javascript:void(0)"
                className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                onClick={() => {
                  document
                    .querySelector(".group/sidebar")
                    ?.classList.toggle("-translate-x-full");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </a>
            </div>
            <div className="relative flex items-center ml-2 lg:ml-4">
              <Link
                href="/pages/settings/system"
                className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
            </div>
            <Link
              href="/pages/settings/permissions"
              className="flex items-center justify-center ml-2 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl lg:ml-4 text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
            >
              <Image
                src="/img/profile.svg"
                alt="Profile"
                className="rounded-xl"
                width={45}
                height={45}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
