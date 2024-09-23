import { FC } from "react";

interface User {
  id: string;
  name: string;
  mobile_number: string;
  email: string;
  address: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Matheus Maldonado",
    mobile_number: "Web Developer",
    email: "matheusmaldonado@me.com",
    address: 'Avenida Paulista, 1000, São Paulo, SP',
  },
  {
    id: "2",
    name: "Nathalia Silva",
    mobile_number: "Python Developer",
    email: "matheusmaldonado@me.com",
    address: 'Avenida Paulista, 1000, São Paulo, SP',
  },
  {
    id: "3",
    name: "Rafael Souza",
    mobile_number: "React Developer",
    email: "matheusmaldonado@me.com",
    address: 'Avenida Paulista, 1000, São Paulo, SP',
  },
  {
    id: "4",
    name: "Matheus Maldonado",
    mobile_number: "Web Developer",
    email: "matheusmaldonado@me.com",
    address: 'Avenida Paulista, 1000, São Paulo, SP',
  },
  {
    id: "5",
    name: "Nathalia Silva",
    mobile_number: "Python Developer",
    email: "matheusmaldonado@me.com",
    address: 'Avenida Paulista, 1000, São Paulo, SP',
  },
];

const TableHeader: FC = () => (
  <thead className="bg-gray-50 dark:bg-gray-200">
    <tr>
      {["Name", "Mobile Number", "Email", "Address", "Action"].map((header) => (
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

const TableRow: FC<User> = ({ name, mobile_number, email, address }) => (
  <tr>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{name}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{mobile_number}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{email}</td>
    <td className="px-4 py-4 text-sm text-black whitespace-nowrap">{address}</td>
  </tr>
);

const Table: FC = () => {
  return (
    <section className="container px-4 mx-auto w-full mt-4">
      <div className="mb-2">
        <span className="text-[#192231] font-bold text-xl">All Customers</span>
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
