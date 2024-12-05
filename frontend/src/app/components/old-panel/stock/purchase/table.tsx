import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  supplier: string;
  itemDescription: string;
  quantity: number;
  orderDate: Date;
  deliveryDate: Date;
  status: "Aguardando" | "Entregue" | "Cancelada" | "Em Andamento";
  total: number;
}

const users: User[] = [
  {
    id: "1",
    supplier: "Fornecedor A	",
    itemDescription: "Concreto",
    quantity: 120,
    orderDate: new Date("2021-04-01"),
    deliveryDate: new Date("2021-04-01"),
    status: "Entregue",
    total: 42450.55
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Título", "Descrição", "Status", "Início", "Dias", "Receita (R$)", "Total (R$)", "Ação"].map(
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
  supplier,
  itemDescription,
  quantity,
  orderDate,
  deliveryDate,
  status,
  total,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{supplier}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {itemDescription}
    </td>

    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {quantity}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{orderDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{deliveryDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Entregue"
            ? "text-green-700 font-bold"
            : status === "Cancelada"
            ? "text-red-700 font-bold"
            : "text-blue-700 font-bold"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{total}</td>
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
