export interface CoffeeType {
  _id: string;
  body: string;
  brand_name: string;
  class_name: string;
  coffee_type: string;
  contact: string;
  flavor: string;
  fragrance: string;
  ground_type: string;
  net_weight: string;
  no_of_bags: string;
  price: string;
  processing_method: string;
  roast_level: string;
  thumbnail: string;
}

export interface RecommendationFiltersType {
  roast: string;
  fragrance: string;
  ground_type: string;
  body: string;
  flavor: string;
}

export interface OptionType {
  value: string | number;
  label: string;
}
