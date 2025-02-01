"use client";

import { useCoffee } from "@/contexts/coffee-context";
import { FILTER_FEATURES } from "@/lib/constants";
import { RecommendationFiltersType } from "@/lib/types";
import { getFilterOptions } from "@/lib/utils";
import Button from "../inputs/button";

type FilterSidebarProps = {
  onRecommend: () => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onRecommend }) => {
  const { filters, setFilters } = useCoffee();

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    feature: keyof RecommendationFiltersType
  ) => {
    const { value, checked } = e.target;
    setFilters((prevFilters: RecommendationFiltersType) => ({
      ...prevFilters,
      [feature]: checked ? value : "",
    }));
  };

  const isDisabled = Object.values(filters).some((catVal) => catVal === "");

  return (
    <div className="w-64 min-w-64 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Filter</h2>
      {FILTER_FEATURES.map((feature) => {
        const lowerCaseCategory = feature
          .toLowerCase()
          .replace(" ", "_") as keyof RecommendationFiltersType;
        return (
          <div key={feature} className="mb-4">
            <h3 className="font-semibold mb-2 text-gray-900">{feature}</h3>
            <ul>
              {getFilterOptions(feature).map((option, index) => (
                <li key={option} className="mb-2">
                  <label className="flex items-center text-gray-800">
                    <input
                      type="checkbox"
                      name={option}
                      value={index}
                      checked={filters[lowerCaseCategory] === `${index}`}
                      onChange={(e) =>
                        handleCheckboxChange(e, lowerCaseCategory)
                      }
                      className="mr-2 rounded text-blue-500 custom-checkbox"
                    />
                    <span>{option}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <div className="bg-white sticky bottom-0 py-2">
        <Button
          className="mb-1.5 w-full py-2.5"
          onClick={onRecommend}
          disabled={isDisabled}
          variant="solid"
        >
          Recommend
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
