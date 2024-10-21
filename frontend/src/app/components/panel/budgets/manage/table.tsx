import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  title: string;
  start: Date;
  maturity: Date;
  estimatedValue: number;
  realValue: number;
  status: "Em planejamento" | "Concluído" | "Pendente";
}

const users: User[] = [
  {
    id: "1",
    title: "Construção de Edifício A",
    start: new Date("2021-04-01"),
    maturity: new Date("2021-04-01"),
    estimatedValue: 23000.50,
    realValue: 23000.50,
    status: "Em planejamento",
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Título", "Data de Criação", "Data de Vencimento", "Valor Estimado", "Valor Real", "Status", "Ação"].map(
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
  title,
  start,
  maturity,
  estimatedValue,
  realValue,
  status,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{title}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {start.toDateString()}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {maturity.toDateString()}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{estimatedValue}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{realValue}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Concluído"
            ? "text-green-700 font-bold"
            : status === "Em planejamento"
            ? "text-blue-700 font-bold"
            : "text-red-700 font-bold"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-start items-center">
      <NextLink href='/pages/project/edit'>
        <FiEdit
          className="cursor-pointer text-lg mr-2
      "
        />
      </NextLink>
      <RiDeleteBin7Line className="cursor-pointer text-xl
    "/>
    </td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="px-4 mx-auto w-full mt-4">
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
