"use client";
import NextLink from "next/link";
import { FiPlusCircle, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const ImportButton: React.FC = () => {
  // Estado para controlar a visibilidade do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-[#315bd4] text-white font-bold w-[200px] h-[50px] ml-4 flex justify-start items-center"
      >
        <FiChevronDown
          className={`ml-2 transform ${isMenuOpen ? "rotate-180" : ""}`}
        />
        <span className="ml-2">Mais Opções</span>
      </button>

      {/* Menu suspenso de subcategorias */}
      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-[200px] bg-white border border-[#ccc] rounded shadow-lg">
          <button className="block px-4 py-2 text-black hover:bg-[#f0f0f0] w-full">
            Importar planilha
          </button>
          <button className="block px-4 py-2 text-black hover:bg-[#f0f0f0] w-full">
            Importar XML
          </button>
          <button className="block px-4 py-2 text-black hover:bg-[#f0f0f0] w-full">
            Exportar clientes
          </button>
          <button className="block px-4 py-2 text-black hover:bg-[#f0f0f0] w-full">
            Excluir clientes
          </button>
        </div>
      )}
    </div>
  );
};

export default ImportButton;
