import { FC } from "react";

interface User {
  id: string;
  name: string;
  position: string;
  status: "Active" | "Deactive";
  age: number;
  date: Date;
  salary: number;
}

const users: User[] = [
  {
    id: "1",
    name: "Matheus Maldonado",
    position: "Web Developer",
    status: "Active",
    age: 23,
    date: new Date("2021-04-01"),
    salary: 42450,
  },
  {
    id: "2",
    name: "Nathalia Silva",
    position: "Python Developer",
    status: "Deactive",
    age: 28,
    date: new Date("2023-08-15"),
    salary: 45000,
  },
  {
    id: "3",
    name: "Rafael Souza",
    position: "React Developer",
    status: "Active",
    age: 32,
    date: new Date("2022-02-25"),
    salary: 34400,
  },
  {
    id: "4",
    name: "Matheus Maldonado",
    position: "Web Developer",
    status: "Active",
    age: 23,
    date: new Date("2021-04-01"),
    salary: 42450,
  },
  {
    id: "5",
    name: "Nathalia Silva",
    position: "Python Developer",
    status: "Deactive",
    age: 28,
    date: new Date("2023-08-15"),
    salary: 45000,
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-50 dark:bg-gray-200">
    <tr>
      {["Name", "Position", "Status", "Age", "Start date", "Salary"].map((header) => (
        <th
          key={header}
          scope="col"
          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-black"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const TableRow: FC<User> = ({ name, position, status, age, date, salary }) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{name}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{position}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          status === "Active" ? "text-white font-bold dark:bg-green-400" : "text-white font-bold dark:bg-red-400"
        }`}
      >
        {status}
      </div>
    </td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{age}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{date.getDate()}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{salary}</td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="container px-4 mx-auto w-full mt-4">
      <div className="mb-6">
        <span className="text-[#192231] font-bold text-2xl">Latest Transactions</span>
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
