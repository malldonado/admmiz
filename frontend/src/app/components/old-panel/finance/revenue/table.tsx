import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  dateRevenue: Date;
  client: string;
  serviceDescription: string;
  value: number;
  days: number;
  revenue: number;
}

const users: User[] = [
  {
    id: "1",
    dateRevenue: new Date("2021-04-01"),
    client: "João Silva",
    serviceDescription: "Projeto Residencial",
    value: 23000.50,
    days: 23,
    revenue: 23000.50,
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-300">
    <tr>
      {["Data da Receita", "Cliente", "Descrição do Serviço", "Valor", "Dias", "Receita (R$)", "Ação"].map(
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
  dateRevenue,
  client,
  serviceDescription,
  value,
  days,
  revenue
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{dateRevenue.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {client}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {serviceDescription}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{value}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{days}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{revenue}</td>
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
