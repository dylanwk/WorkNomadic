"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  transparent?: boolean;
  center?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
  transparent,
  center,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`peer w-full p-2 pt-6 border-1 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
         ${formatPrice ? "pl-9" : "pl-4"}
         ${errors[id] ? "border-rose-500" : "border-neutral-300"}
         ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
         ${transparent ? "bg-transparent font-semibold text-xl" : "bg-white font-light"}
          `}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]
        ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : ""}
          ${transparent ? "font-semibold text-white" : "text-neutral-500"}
          `}
      >
        {label}
      </label>
    </div>
  );
};
