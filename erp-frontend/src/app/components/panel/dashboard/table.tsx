import { FC } from "react";

interface User {
  id: string;
  title: string;
  description: string;
  status: "Em andamento" | "Terminado" | "Parado";
  start: Date;
  days: number;
  revenue: number;
  value: number;
}

const users: User[] = [
  {
    id: "1",
    title: "Casa Alphaville",
    description: "Projeto residencial envolvendo a construção de uma casa moderna...",
    status: "Em andamento",
    start: new Date("2021-04-01"),
    days: 23,
    revenue: 23000.50,
    value: 42450.55
  },
  {
    id: "2",
    title: "Casa Alphaville",
    description: "Projeto residencial envolvendo a construção de uma casa moderna...",
    status: "Parado",
    start: new Date("2023-08-15"),
    days: 28,
    revenue: 23000.50,
    value: 45000,
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-300 dark:bg-gray-200">
    <tr>
      {["Título", "Descrição", "Status", "Início", "Dias", "Receita (R$)", "Total (R$)"].map(
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
  title,
  description,
  status,
  start,
  days,
  revenue,
  value,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{title}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {description}
    </td>
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
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {start.toDateString()}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{days}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{revenue}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{value}</td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="px-4 mx-auto w-full mt-4">
      <div className="mb-6">
        <span className="text-[#192231] font-bold text-2xl">
          Progresso dos Projetos
        </span>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-300">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-300">
                <TableHeader />
                <tbody className="bg-white divide-y divide-gray-300 dark:bg-transparent dark:divide-gray-300">
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
