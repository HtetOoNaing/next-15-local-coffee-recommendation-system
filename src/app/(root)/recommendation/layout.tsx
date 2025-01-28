"use client";
import { CoffeeProvider } from "@/contexts/coffee-context";

interface CoffeeFormProps {
  children: React.ReactNode;
}

const Layout: React.FC<CoffeeFormProps> = ({ children }) => {
  return <CoffeeProvider>{children}</CoffeeProvider>;
};

export default Layout;
