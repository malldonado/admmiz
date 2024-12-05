import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

interface User {
  id: string;
  project: string;
  revenue: string;
  expenditure: string;
  profit: string;
  reportDate: Date;
  status: "Pago" | "Em aberto";
}

const users: User[] = [
  {
    id: "1",
    project: "Construção de Edifício",
    revenue: "R$ 2.000.000",
    expenditure: "R$ 1.500.000",
    profit: "R$ 500.000",
    reportDate: new Date("2021-04-01"),
    status: "Pago",
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Projeto", "Receita", "Despesa", "Lucro", "Data do Relatório", "Status de Pagamento", "Ação"].map(
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
  project,
  revenue,
  expenditure,
  profit,
  reportDate,
  status
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{project}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {revenue}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {expenditure}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{profit}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{reportDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Pago"
            ? "text-green-700 font-bold"
            : "text-blue-700 font-bold"
        }`}
      >
        {status}
      </div>
    </td>
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
