"use client";
import React from "react";

const Input: React.FC = () => {
  return (
    <div className="w-[300px] ml-4">
      <input
        id="inputField"
        type="text"
        placeholder="Pesquise algum produto..."
        className="w-full p-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
      />
    </div>
  );
};

export default Input;
