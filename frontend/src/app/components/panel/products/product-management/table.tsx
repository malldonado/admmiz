import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import {
  RiDeleteBin7Line,
  RiEyeLine,
  RiArrowLeftRightFill,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  code: number;
  name: string;
  value: string;
  stock: string;
}

const users: User[] = [
  {
    id: "1",
    code: 2008282393849,
    name: "Mesa de centro",
    value: "R$ 1200,00",
    stock: "12",
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Código", "Nome", "Valor", "Estoque", "Ações"].map((header) => (
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

const TableRow: FC<User> = ({ code, name, value, stock }) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{code}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{name}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{value}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{stock}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-start items-center">
      <NextLink href="/pages/customers/clients/moviment">
        <RiArrowLeftRightFill className="cursor-pointer text-xl mr-2" />
      </NextLink>
      <NextLink href="/pages/customers/clients/value">
        <RiMoneyDollarCircleLine className="cursor-pointer text-xl mr-2" />
      </NextLink>
      <NextLink href="/pages/customers/clients/edit">
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
