import Header from "@/components/homepage/header";
import React from "react";

interface CoffeeFormProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<CoffeeFormProps> = ({ children, className }) => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <main className={className}>{children}</main>
  </div>
);

export default Layout;
