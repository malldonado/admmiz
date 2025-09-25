"use client";
import { FiPlusCircle, FiXCircle } from "react-icons/fi";
import NextLink from "next/link";

const Form: React.FC = () => {
  return (
    <div className="ml-4">
        <span className="block mb-1">Nome*</span>
        <input
          id="inputField"
          type="text"
          placeholder="Nome"
          className="p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 w-[500px]"
        />
      <div className="flex justify-start gap-4 mt-4">
        <button className="px-2 bg-[#315bd4] text-white font-bold w-[150px] h-[50px] flex justify-center items-center">
          <FiPlusCircle className="mr-2 text-xl" />
          <span>Adicionar</span>
        </button>
        <NextLink href="/pages/customers/type-contacts">
          <button className="px-2 bg-[#315bd4] text-white font-bold w-[150px] h-[50px] flex justify-center items-center">
            <FiXCircle className="mr-2 text-xl" />
            <span>Cancelar</span>
          </button>
        </NextLink>
      </div>
    </div>
  );
};

export default Form;
