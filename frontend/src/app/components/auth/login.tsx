"use client";
import Link from 'next/link';
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";

const LoginComponent: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="h-screen grid grid-cols-1 lg:grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-2 text-base text-gray-600">
            Dont have an account?{" "}
              <Link href="/pages/auth/register">
                <span className="font-medium text-[#0b1e40] transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                 Sign up here
                </span>
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdAlternateEmail className="w-6 h-6" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email to get started"
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
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-[#0b1e40] focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                <Link href="/pages/dashboard">
                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r bg-[#0b1e40] focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="w-6 h-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
