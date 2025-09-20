"use client";

import { RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonRefresh = () => {
  const router = useRouter();

  return (
    <button
      className="cursor-pointer flex items-center gap-2 text-blue-500 border border-blue-500 font-semibold text-sm px-2 py-1 rounded hover:scale-105 duration-300"
      onClick={() => router.refresh()}
    >
      <RefreshCcw size={20} />

      <span className="hidden md:inline">Atualizar</span>
    </button>
  );
};

export default ButtonRefresh;
