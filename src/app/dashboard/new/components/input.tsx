import type { ReactNode } from "react";

type InputProps = {
  type: "text" | "email" | "tel";
  name: string;
  placeholder: string;
  label?: string;
  icon?: ReactNode;
};

const Input = ({ type, name, placeholder, label, icon }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="font-semibold cursor-pointer">
          {label}
        </label>
      )}

      <div className="border rounded-md focus-within:border-2 transition-all flex items-center h-10 group">
        {icon && (
          <span className="bg-slate-100 rounded-tl-md rounded-bl-md border-r px-1 sm:px-2 text-gray-500 h-full flex items-center group-focus-within:border-r-2">
            {icon}
          </span>
        )}

        <input
          type={type}
          inputMode={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full outline-0 text-slate-600 p-1"
        />
      </div>
    </div>
  );
};

export default Input;
