"use client";
import NextLink from "next/link";
import { FiPlusCircle } from "react-icons/fi";

const Button: React.FC = () => {
  return (
    <NextLink href="/pages/sales/scales/new">
        <button className="px-2 bg-[#315bd4] text-white font-bold w-[150px] h-[50px] ml-4 flex justify-start items-center">
            <FiPlusCircle className='mr-2 text-xl'/>
            <span>Adicionar</span>
        </button>
    </NextLink>
  );
};

export default Button;
