import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  name: string;
  position: string;
  department: string;
  mail: string;
  phone: string;
  admissionDate: Date;
  status: "Ativo" | "Inativo" | "Em treinamento";
}

const users: User[] = [
  {
    id: "1",
    name: "João Silva",
    position: "Engenheiro Civil",
    department: "Engenharia",
    mail: "joao@empresa.com	",
    phone: "(11) 1234-5678",
    admissionDate: new Date("2021-04-01"),
    status: "Ativo"
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Nome", "Cargo", "Departamento", "Email", "Telefone", "Data de Admissão", "Status", "Ação"].map(
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
  position,
  department,
  mail,
  phone,
  admissionDate,
  status,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{name}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {position}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {department}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{mail}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{phone}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{admissionDate.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Ativo"
            ? "text-green-700 font-bold"
            : status === "Inativo"
            ? "text-red-700 font-bold"
            : "text-blue-700 font-bold"
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
