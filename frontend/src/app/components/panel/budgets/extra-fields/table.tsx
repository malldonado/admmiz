import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line, RiEyeLine } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  name: string;
  type: string;
  display_print: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Campo",
    type: "Texto",
    display_print: "Quando preenchindo"
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {[
        "Nome",
        "Tipo",
        "Exibir na impressão",
        "",
      ].map((header) => (
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

const TableRow: FC<User> = ({
  id,
  name,
  type,
  display_print
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {name}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {type}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {display_print}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap flex justify-end items-center">
      <NextLink href="/pages/budgets/extra-fields/edit">
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
