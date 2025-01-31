"use client";
import FilterSidebar from "@/components/homepage/filter-sidebar";
import { useCoffee } from "@/contexts/coffee-context";
import axiosInstance from "@/lib/axios-instance";
import { CoffeeType } from "@/lib/types";
import { usePathname, useRouter } from "next/navigation";

interface CoffeeFormProps {
  children: React.ReactNode;
  className?: string;
}

const images = [
  "coffee-cup-1.jpg",
  "coffee-cup-2.jpeg",
  "coffee-cup-3.jpeg",
  "coffee-cup-4.jpg",
  "coffee-cup-5.jpeg",
  "coffee-cup-6.jpeg",
];

const Template: React.FC<CoffeeFormProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { setCoffeeList, filters } = useCoffee();

  const handleRecommend = async () => {
    const payload = {
      selectedValues: filters,
    };

    try {
      const response = await axiosInstance.post("/data", payload);

      if (!response.data) {
        throw new Error("Failed to fetch recommendations");
      }

      const recommendationsData: CoffeeType[] = response.data;

      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      const coffeesWithImage = recommendationsData.map((coffee, index) => ({
        ...coffee,
        thumbnail: `images/coffees/${
          shuffledImages[index % shuffledImages.length]
        }`,
      }));

      setCoffeeList(coffeesWithImage);

      localStorage.setItem("coffeeList", JSON.stringify(coffeesWithImage));
      localStorage.setItem("filters", JSON.stringify(filters));
      if (pathname !== "/recommendation") {
        router.push("/recommendation");
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex px-4 py-6">
        <FilterSidebar onRecommend={handleRecommend} />
        {children}
      </div>
    </div>
  );
};

export default Template;
