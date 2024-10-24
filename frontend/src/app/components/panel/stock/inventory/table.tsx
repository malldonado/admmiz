import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  itemDescription: string;
  quantity: number;
  measure: string;
  location: string;
  acquisitionDate: Date;
  status: "Em uso" | "Disponível" | "Manutenção";
}

const users: User[] = [
  {
    id: "1",
    itemDescription: "Concreto",
    quantity: 12,
    measure: "m³",
    location: 'Almoxarifado',
    acquisitionDate: new Date("2021-04-01"),
    status: 'Disponível',
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Descrição do Item", "Quantidade", "Unidade de Medida", "Localização", "Data de Aquisição", "Status", "Ação"].map(
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
  itemDescription,
  quantity,
  measure,
  location,
  acquisitionDate,
  status
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{itemDescription}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {quantity}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {measure}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{location}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{acquisitionDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{status}</td>
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
