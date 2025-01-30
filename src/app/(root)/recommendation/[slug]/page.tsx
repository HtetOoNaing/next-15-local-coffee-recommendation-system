import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/lib/axios-instance";
import { CoffeeType } from "@/lib/types";

const CoffeeDetails: React.FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const slug = (await params).slug;
  if (!slug) return <p>Coffee not found</p>;

  const { status, data: coffee } = await axiosInstance.get<CoffeeType>(`/coffees/${slug}`);
  console.log('status', status);
  console.log('coffee', coffee);
  coffee.thumbnail = "images/coffees/coffee-cup-1.jpg";
  const coffeeItems = [
    { label: "Product Name: ", value: coffee.class_name },
    { label: "Coffee Type: ", value: coffee.coffee_type },
    { label: "Net Weight: ", value: coffee.net_weight },
    { label: "No. of Bags: ", value: coffee.no_of_bags },
    { label: "Price: ", value: coffee.price },
    { label: "Processing Method: ", value: coffee.processing_method },
    { label: "Contact: ", value: coffee.contact },
  ];

  return (
    <div className="w-[55%] mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        {/* Back Button */}
        <Link href="/recommendation" passHref>
          <button className="inline-block mb-4 text-[#38220f] hover:opacity-70 font-semibold">
            &larr; Back
          </button>
        </Link>

        {/* Coffee Details */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Thumbnail */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Image
              src={`/${coffee.thumbnail}`}
              width={300}
              height={300}
              alt={`${coffee.brand_name} thumbnail`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              {coffee.brand_name}
            </h2>
            {coffeeItems.map((coffeeItem, index) => (
              <p key={index} className="text-gray-600 text-base mb-1.5">
                {coffeeItem.label} <strong>{coffeeItem.value}</strong>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
