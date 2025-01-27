import { useForm, SubmitHandler } from "react-hook-form";
import {
  BODY_OPTIONS,
  FLAVOR_OPTIONS,
  FRAGRANCE_OPTIONS,
  GROUND_TYPE_OPTIONS,
  ROAST_LEVEL_OPTIONS,
} from "@/lib/constants";
import Input from "../inputs/input";
import Select from "../inputs/select";
import React from "react";

interface CoffeeFormData {
  _id?: string;
  class_name: string;
  brand_name: string;
  processing_method: string;
  coffee_type: string;
  roast_level: string;
  ground_type: string;
  fragrance: string;
  flavor: string;
  body: string;
  price: string;
  no_of_bags: string;
  net_weight: string;
  contact: string;
}

interface CoffeeFormProps {
  formData: CoffeeFormData;
  handleSubmit: (data: CoffeeFormData) => void;
}

const CoffeeForm: React.FC<CoffeeFormProps> = ({ formData, handleSubmit }) => {
  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: {},
  } = useForm<CoffeeFormData>({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<CoffeeFormData> = (data) => {
    handleSubmit(data);
  };

  return (
    <form onSubmit={formHandleSubmit(onSubmit)}>
      <Input
        label="Product Name"
        type="text"
        name="class_name"
        register={register("class_name", {
          required: "Product name is required",
        })}
        containerClassName="mb-4"
      />

      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        <Input
          label="Brand Name"
          type="text"
          name="brand_name"
          register={register("brand_name", {
            required: "Brand name is required",
          })}
        />
        <Input
          label="Processing Method"
          type="text"
          name="processing_method"
          register={register("processing_method", {
            required: "Processing method is required",
          })}
        />
        <Input
          label="Coffee Type"
          type="text"
          name="coffee_type"
          register={register("coffee_type", {
            required: "Coffee type is required",
          })}
        />

        <Select
          label="Roast Level"
          name="roast_level"
          register={register("roast_level", {
            required: "Roast level is required",
          })}
          options={ROAST_LEVEL_OPTIONS}
        />
        <Select
          label="Ground Type"
          name="ground_type"
          register={register("ground_type", {
            required: "Ground type is required",
          })}
          options={GROUND_TYPE_OPTIONS}
        />
        <Select
          label="Fragrance"
          name="fragrance"
          register={register("fragrance", {
            required: "Fragrance is required",
          })}
          options={FRAGRANCE_OPTIONS}
        />
        <Select
          label="Flavor"
          name="flavor"
          register={register("flavor", { required: "Flavor is required" })}
          options={FLAVOR_OPTIONS}
        />
        <Select
          label="Body"
          name="body"
          register={register("body", { required: "Body is required" })}
          options={BODY_OPTIONS}
        />

        <Input
          label="Price"
          type="text"
          name="price"
          register={register("price", { required: "Price is required" })}
        />
        <Input
          label="Number of Bags"
          type="text"
          name="no_of_bags"
          register={register("no_of_bags", {
            required: "Number of bags is required",
          })}
        />
        <Input
          label="Net Weight"
          type="text"
          name="net_weight"
          register={register("net_weight", {
            required: "Net weight is required",
          })}
        />
        <Input
          label="Contact"
          type="text"
          name="contact"
          register={register("contact", { required: "Contact is required" })}
        />
      </div>

      <div className="text-center mt-8">
        <button
          type="submit"
          className="bg-[#38220f]/95 hover:opacity-80 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          {formData._id ? "Update Coffee" : "Add Coffee"}
        </button>
      </div>
    </form>
  );
};

export default CoffeeForm;
