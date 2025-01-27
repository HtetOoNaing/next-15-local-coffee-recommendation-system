import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  register: UseFormRegisterReturn; // Provided by `react-hook-form`
  error?: FieldError; // Error object for the field
  options: Option[];
  className?: string;
  containerClassname?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  register,
  error,
  options,
  className = "",
  containerClassname = "",
}) => {
  return (
    <div className={containerClassname}>
      <label htmlFor={name} className="block text-gray-600 font-semibold mb-2">
        {label}
      </label>
      <select
        id={name}
        {...register}
        className={`shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        } ${className}`}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value} disabled={!item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Select;
