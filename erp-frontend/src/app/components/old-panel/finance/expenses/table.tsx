import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  date: Date;
  description: string;
  category: "Materias" | "Serviços Profissionais" | "Equipamentos";
  value: number;
  paymentMethod: "Cartão de Crédito" | "Transferência Bancária" | "Boleto";
  associatedProject: string;
}

const users: User[] = [
  {
    id: "1",
    date: new Date("2021-04-01"),
    description: "Materiais de Construção",
    category: 'Equipamentos',
    value: 23000.50,
    paymentMethod: "Cartão de Crédito",
    associatedProject: "Construção de Edifício A",
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Data", "Descrição", "Categoria", "Valor", "Forma de Pagamento", "Projeto Associado", "Ação"].map(
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
  date,
  description,
  category,
  value,
  paymentMethod,
  associatedProject,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{date.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {description}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
        {category}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{value}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{paymentMethod}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{associatedProject}</td>
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
