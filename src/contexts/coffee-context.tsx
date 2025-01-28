"use client";

import { CoffeeType, RecommendationFiltersType } from "@/lib/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface CoffeeContextType {
  coffeeList: CoffeeType[];
  setCoffeeList: React.Dispatch<React.SetStateAction<CoffeeType[]>>;
  filters: RecommendationFiltersType;
  setFilters: React.Dispatch<React.SetStateAction<RecommendationFiltersType>>;
}

// Create the context with an undefined initial value
const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

// Custom hook to use the Coffee context
export const useCoffee = (): CoffeeContextType => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error("useCoffee must be used within a CoffeeProvider");
  }
  return context;
};

// Define the props for the CoffeeProvider
interface CoffeeProviderProps {
  children: ReactNode;
  initialCoffeeList?: CoffeeType[]; // Replace `string[]` with a specific type if necessary
}

// CoffeeProvider component
export const CoffeeProvider: React.FC<CoffeeProviderProps> = ({
  children,
  initialCoffeeList = [],
}) => {
  const [coffeeList, setCoffeeList] = useState<CoffeeType[]>(initialCoffeeList);
  const [filters, setFilters] = useState<RecommendationFiltersType>({
    roast: "",
    fragrance: "",
    ground_type: "",
    body: "",
    flavor: "",
  });

  return (
    <CoffeeContext.Provider
      value={{ coffeeList, setCoffeeList, filters, setFilters }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
