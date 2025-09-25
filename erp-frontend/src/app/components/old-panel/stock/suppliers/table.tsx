import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  supplierName: string;
  contact: string;
  phone: string;
  mail: string;
  street: string;
  city: string;
  state: string;
  status: "Ativo" | "Inativo";
}

const users: User[] = [
  {
    id: "1",
    supplierName: "Fornecedor A",
    contact: "João Silva",
    phone: "(19) 989999000",
    mail: 'contato@mail.com.br',
    street: 'Frederico Penachione, 302',
    city: "Americana",
    state: "SP",
    status: "Ativo"
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Nome do Fornecedor", "Contato", "Telefone", "Email", "Endereço", "Cidade", "Estado", "Status", "Ações"].map(
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
  supplierName,
  contact,
  phone,
  mail,
  street,
  city,
  state,
  status
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{supplierName}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {contact}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {phone}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{mail}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{street}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{city}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{state}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Ativo"
            ? "text-green-700 font-bold"
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
