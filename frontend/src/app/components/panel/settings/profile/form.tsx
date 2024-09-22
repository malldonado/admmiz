"use client";
import { FC, useState } from "react";

const Profile: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? null : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para submissão do formulário
  };

  const renderInputField = (
    id: string,
    label: string,
    name: string,
    type: string,
    value: string
  ) => (
    <div className="sm:col-span-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={name}
          value={value}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4 outline-none focus:outline-none"
        />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="pb-6 mx-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            {renderInputField("name", "Name", "name", "text", formData.name)}
            {renderInputField("email", "Email address", "email", "email", formData.email)}
            {renderInputField("password", "Password", "password", "password", formData.password)}
            {renderInputField("password", "New Password", "password", "newPassword", formData.newPassword)}

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {/* <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" /> */}
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  value={formData.image}
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-x-6 mx-20">
        <button
          type="submit"
          className="rounded-md bg-[#315bd4] px-9 py-3 text-sm font-semibold text-white shadow-sm"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Profile;
