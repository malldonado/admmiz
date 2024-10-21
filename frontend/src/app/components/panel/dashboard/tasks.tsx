import { FC } from "react";

interface User {
  id: string;
  title: string;
}

const users: User[] = [
  {
    id: "1",
    title: "Casa Alphaville",
  },
  {
    id: "2",
    title: "Criação da documentação",
  },
  {
    id: "3",
    title: "Medição do terreno",
  },
  {
    id: "4",
    title: "Comprar equipamentos",
  },
];

const TableHeader: FC = () => (
  <thead className="bg-[#e5e7eb] text-black">
    <tr>
      {["Título"].map(
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
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{title}</td>
  </tr>
);

const Tasks: FC = () => {
  return (
    <section className="pr-4 mx-auto w-full mt-4">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block w-full py-2 align-middle">
            <div className="overflow-hidden border border-gray-300 md:rounded-xl">
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

export default Tasks;
