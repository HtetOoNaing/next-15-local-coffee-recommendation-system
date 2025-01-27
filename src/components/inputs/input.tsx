import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  register: UseFormRegisterReturn; // Provided by `react-hook-form`
  error?: FieldError; // Error object for the field
  containerClassName?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  register,
  error,
  containerClassName = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${containerClassName}`}>
      <label htmlFor={name} className="font-semibold mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register}
        className={`border p-2 rounded focus:outline-none focus:ring-2 ${
          error ? "border-red-500 ring-red-500" : "border-gray-300"
        } ${className}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
