import React from "react";
import Login from "@/components/login/login";
import Navbar from "@/components/navbar/navbar";

const LoginPage: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
