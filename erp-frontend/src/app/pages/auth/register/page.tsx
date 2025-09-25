import React from "react";
import Navbar from "@/components/navbar/navbar";
import Register from "@/components/auth/register";

const RegisterPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;
