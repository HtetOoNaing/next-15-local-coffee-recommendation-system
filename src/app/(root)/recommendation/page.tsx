"use client";

import { useCoffee } from "@/contexts/coffee-context";
import CoffeeCard from "@/components/homepage/coffee-card";
import { CoffeeType } from "@/lib/types";
import { useEffect } from "react";

export default function Recommendation() {
  const { coffeeList, setCoffeeList, setFilters } = useCoffee();

  useEffect(() => {
    const storedCoffeeList = localStorage.getItem("coffeeList");
    const storedFilters = localStorage.getItem("filters");

    if (storedCoffeeList) {
      setCoffeeList(JSON.parse(storedCoffeeList));
    }

    if (storedFilters) {
      setFilters(JSON.parse(storedFilters));
    }
  }, []);

  return (
    <div className="flex-grow px-6">
      {coffeeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeList.map((coffee: CoffeeType) => (
            <CoffeeCard
              key={coffee._id}
              slug={coffee._id}
              brand={coffee.brand_name}
              name={coffee.class_name}
              price={coffee.price}
              thumbnail={coffee.thumbnail}
              gram={coffee.net_weight}
            />
          ))}
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-center text-5xl font-bold -mt-40 text-[#634832]">
            Explore the benefits of using our AI-powered <br /> Coffee
            Recommendation System
          </h1>
        </div>
      )}
    </div>
  );
}
