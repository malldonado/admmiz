import React from "react";
import Login from "@/components/auth/login";
import Navbar from "@/components/navbar/navbar";

const LoginPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
