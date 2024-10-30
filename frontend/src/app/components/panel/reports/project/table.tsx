import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

interface User {
  id: string;
  name: string;
  client: string;
  status: "Em andamento" | "Terminado" | "Parado";
  startDate: Date;
  endDate: Date;
  budgeting: string;
  responsibly: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Construção de Edifício",
    client: "Cliente A",
    status: "Em andamento",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-04-01"),
    budgeting: "R$ 1.500.000",
    responsibly: "João da Silva"
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Nome do Projeto", "Cliente", "Status do Projeto", "Data de Início", "Data de Término", "Orçamento", "Responsável", "Ação"].map(
        (header) => (
          <th
            key={header}
            scope="col"
            className="px-4 py-3.5 text-base font-normal text-left rtl:text-right text-black"
          >
            {header}
          </th>
        )
      )}
    </tr>
  </thead>
);

const TableRow: FC<User> = ({
  name,
  client,
  status,
  startDate,
  endDate,
  budgeting,
  responsibly,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{name}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {client}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Em andamento"
            ? "text-green-700 font-bold"
            : status === "Terminado"
            ? "text-red-700 font-bold"
            : "text-blue-700 font-bold"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {startDate.toDateString()}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{endDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{budgeting}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{responsibly}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-start items-center">
      <HiOutlineDocumentReport className="cursor-pointer text-xl mr-2" />
      <FiEdit className="cursor-pointer text-xl mr-2" />
      <RiDeleteBin7Line className="cursor-pointer text-xl" />
    </td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="container px-4 mx-auto w-full mt-4">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-200 md:rounded-xl">
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
};

export default Table;
