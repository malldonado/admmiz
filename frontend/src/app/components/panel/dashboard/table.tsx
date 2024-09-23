import { FC } from "react";

interface User {
  id: string;
  title: string;
  description: string;
  status: "In progress" | "Finished" | "Stopped";
  start: Date;
  days: number;
  value: number;
}

const users: User[] = [
  {
    id: "1",
    title: "House Alphaville",
    description: "House the 2000 sq. ft. house",
    status: "In progress",
    start: new Date("2021-04-01"),
    days: 23,
    value: 42450,
  },
  {
    id: "2",
    title: "Nathalia Silva",
    description: "Python Developer",
    status: "Finished",
    start: new Date("2023-08-15"),
    days: 28,
    value: 45000,
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-50 dark:bg-gray-200">
    <tr>
      {["Title", "Description", "Status", "Start", "Days", "Value (R$)"].map(
        (header) => (
          <th
            key={header}
            scope="col"
            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
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
  value,
}) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{title}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {description}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          status === "In progress"
            ? "text-white font-bold dark:bg-green-400"
            : status === "Finished"
            ? "text-white font-bold dark:bg-red-400"
            : "text-white font-bold dark:bg-yellow-400"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      {start.toDateString()}
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{days}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{value}</td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="container px-4 mx-auto w-full mt-4">
      <div className="mb-6">
        <span className="text-[#192231] font-bold text-2xl">
          Project Progress
        </span>
      </div>
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
