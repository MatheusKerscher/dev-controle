"use client";

import type { ReactNode } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = {
  type: "text" | "email" | "tel";
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  label?: string;
  icon?: ReactNode;
};

const Input = ({
  type,
  name,
  placeholder,
  register,
  error,
  rules,
  label,
  icon,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="font-semibold cursor-pointer">
          {label}
        </label>
      )}

      <div
        className={`border rounded-md focus-within:border-2 transition-all flex items-center h-10 group ${
          error ? "border-red-500" : "border-slate-400"
        }`}
      >
        {icon && (
          <span
            className={`bg-slate-100 rounded-tl-md rounded-bl-md border-r px-1 sm:px-2 text-gray-500 h-full flex items-center group-focus-within:border-r-2 ${
              error ? "border-r-red-500" : "border-r-slate-400"
            }`}
          >
            {icon}
          </span>
        )}

        <input
          type={type}
          inputMode={type}
          id={name}
          placeholder={placeholder}
          {...register(name, rules)}
          className="w-full outline-0 text-slate-600 p-1"
        />
      </div>

      {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
