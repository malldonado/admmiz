"use client";
import Link from 'next/link';
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const RegisterComponent: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="h-screen grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Inscrever-se
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Já tem uma conta?{" "}
              <Link href="/pages/auth/login">
                <span className="font-medium text-[#0b1e40] transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                  Login
                </span>
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-base font-medium text-gray-900"
                  >
                    Nome completo
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaRegUserCircle className="w-6 h-6" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Digite seu nome completo"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#0b1e40] focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Endereço de e-mail
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdAlternateEmail className="w-6 h-6" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Insira o e-mail para começar"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#0b1e40] focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <TbPasswordFingerprint className="w-6 h-6" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Digite sua senha"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#0b1e40] focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <Link href="/pages/dashboard">
                  <button
                    type="submit"
                    className="mt-3 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r bg-[#0b1e40] focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Registrar
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
