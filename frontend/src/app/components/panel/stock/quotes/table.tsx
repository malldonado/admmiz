import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import {
  RiDeleteBin7Line,
  RiEyeLine
} from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  date: Date;
  delivery: string;
  suppliers: string;
  situations: "Não enviado";
}

const users: User[] = [
  {
    id: "1",
    date: new Date(),
    delivery: "0,00",
    suppliers: "Fornecedor",
    situations: "Não enviado"
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Data", "Entrega", "Fornecedores", "Situação", ""].map((header) => (
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

const TableRow: FC<User> = ({ date, delivery, suppliers, situations }) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{date.getDate()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{delivery}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{suppliers}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{situations}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-end items-center">
      <NextLink href="/pages/stock/quotes/edit">
        <FiEdit
          className="cursor-pointer text-lg mr-2
      "
        />
      </NextLink>
      <RiEyeLine
        className="cursor-pointer text-xl mr-2
    "
      />
      <RiDeleteBin7Line
        className="cursor-pointer text-xl
    "
      />
    </td>
  </tr>
);

const Table: FC = () => {
  return (
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
};

export default Table;
