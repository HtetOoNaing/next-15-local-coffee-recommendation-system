export const getFilterOptions = (feature: string): string[] => {
  switch (feature) {
    case "Roast":
      return ["Light", "Medium Light", "Medium", "Medium Dark", "Dark"];
    case "Fragrance":
      return ["Fruity", "Floral", "Sweet", "Spicy", "Smoky"];
    case "Ground Type":
      return ["Whole Bean", "Fine Ground", "Coarse Ground"];
    case "Body":
      return ["Lighter", "Light", "Medium", "Full", "Heavy"];
    case "Flavor":
      return ["Very Sweet", "Sweet", "Normal", "Bitter", "Very Bitter"];
    default:
      return [];
  }
};
