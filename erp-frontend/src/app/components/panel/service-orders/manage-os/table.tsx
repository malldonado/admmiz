import { FC, useState } from "react";
import { FiChevronDown, FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line, RiEyeLine } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  client: string;
  input: Date;
  output: Date;
  situation: "Em aberto" | "Fechado";
  value: string;
}

const users: User[] = [
  {
    id: "1",
    client: "Matheus",
    input: new Date(),
    output: new Date(),
    situation: "Fechado",
    value: "R$ 100.00"
  },
];

// Tabela de cabeçalho
const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Cliente", "Entrada", "Saída", "Situação", "Valor", ""].map((header) => (
        <th
          key={header}
          scope="col"
          className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-black"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const inputDate = users.map(user => {
  const day = String(user.input.getUTCDate()).padStart(2, '0');
  const month = String(user.input.getUTCMonth() + 1).padStart(2, '0');
  const year = user.input.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
});

const outDate = users.map(user => {
  const day = String(user.output.getUTCDate()).padStart(2, '0');
  const month = String(user.output.getUTCMonth() + 1).padStart(2, '0');
  const year = user.output.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
});

// Linha da tabela com as ações
const TableRow: FC<User> = ({ client, situation, value }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <tr>
      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{client}</td>
      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{inputDate}</td>
      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{outDate}</td>
      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{situation}</td>
      <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{value}</td>
      <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-end items-center">
        <NextLink href={`/pages/service-orders/manage-os/edit`}>
          <FiEdit className="cursor-pointer text-lg mr-2" />
        </NextLink>
        <RiEyeLine className="cursor-pointer text-xl mr-2" />
        <RiDeleteBin7Line className="cursor-pointer text-xl" />
        <FiChevronDown
          onClick={toggleMenu}
          className={`cursor-pointer ml-2 text-xl transform ${isMenuOpen ? "rotate-180" : ""}`}
        />
      </td>
      {isMenuOpen && (
        <div className="absolute right-2 m-2 w-[200px] bg-white border border-[#ccc] rounded shadow-lg h-[300px] overflow-y-scroll">
          {[
            "Imprimir A4",
            "Imprimir cupom",
            "Imprimir etiqueta",
            "Alterar situação",
            "Enviar por WhatsApp",
            "Enviar por e-mail",
            "Emitir NFS-e",
            "Emitir NF-e",
            "Emitir NFC-e",
            "Adicionar atividade",
            "Agendar compromisso",
            "Copiar OS",
            "Realizar devolução",
            "Ordem de produção",
            "Gerar assinatura digital"
          ].map((action) => (
            <button
              key={action}
              className="block px-4 py-2 text-black hover:bg-[#f0f0f0] w-full"
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </tr>
  );
};

// Componente da tabela
const Table: FC = () => (
  <section className="px-4 mx-auto w-full mt-4">
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block w-full py-2 align-middle">
          <div className="overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200">
              <TableHeader />
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-transparent dark:divide-gray-200">
                {users.map((user) => (
                  <TableRow key={user.id} {...user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Table;
