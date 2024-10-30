import { FC } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import NextLink from "next/link";

interface User {
  id: string;
  task: string;
  responsible: string;
  startDate: Date;
  term: Date;
  status: "Em andamento" | "Terminado" | "Parado";
  priority: string;
  progress: string;
}

const users: User[] = [
  {
    id: "1",
    task: "Revisão Estrutural",
    responsible: "João Silva",
    startDate: new Date("2021-04-01"),
    term: new Date("2021-04-01"),
    status: 'Em andamento',
    priority: 'Alta',
    progress: '60%'
  }
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Nome da Tarefa", "Responsável", "Data de Início", "Prazo", "Status", "Prioridade", "Progresso (%)", "Ação"].map(
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
  task,
  responsible,
  startDate,
  term,
  status,
  priority,
  progress,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{task}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {responsible}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {startDate.toDateString()}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{term.toDateString()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={` ${
          status === "Em andamento"
            ? "text-green-700 font-bold"
            : status === "Terminado"
            ? "text-red-700 font-bold"
            : "text-blue-700 font-bold"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{priority}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{progress}</td>
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
