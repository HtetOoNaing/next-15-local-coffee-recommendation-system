"use client";

import React from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  variant?: "solid" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  type = "button",
  variant = "solid",
  onClick,
  disabled = false,
  className,
  children,
}: ButtonProps) {
  const baseClasses =
    `mb-2 px-4 py-2 rounded-lg duration-200 text-center border border-[#A53F3F] transition-all ${className}`;
  const solidClasses =
    "bg-[#A53F3F] text-white " +
    (disabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:opacity-85 hover:scale-105");
  const outlineClasses =
    "text-[#A53F3F] bg-transparent " +
    (disabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:bg-[#A53F3F] hover:bg-opacity-15 hover:scale-105");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        variant === "solid" ? solidClasses : outlineClasses
      }`}
    >
      {children}
    </button>
  );
}
