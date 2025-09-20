"use client";

import type { CustomerProps } from "@/utils/types/customer.type";
import axios, { AxiosError } from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CardClient = ({ id, name, email, phone, address }: CustomerProps) => {
  const router = useRouter();

  const handleDeleteCustomer = async () => {
    try {
      const response = await axios.delete("/api/customer", {
        params: {
          id,
        },
      });

      if (response.status === 204) {
        toast.success("Cliente deletado com sucesso");

        router.refresh();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Não foi possível deletar o cliente. Por favor, tente novamente mais tarde"
        );
      } else {
        toast.error(
          "Não foi possível deletar o cliente. Por favor, tente novamente mais tarde"
        );
      }
    }
  };

  return (
    <div className="bg-slate-50 rounded shadow border border-slate-200 p-2 flex flex-col gap-2 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200">
      <p>
        <span className="font-bold">Nome:</span> {name}
      </p>

      <p>
        <span className="font-bold">E-mail:</span> {email}
      </p>

      <p>
        <span className="font-bold">Telefone:</span> {phone}
      </p>

      <p>
        <span className="font-bold">Endereço:</span>{" "}
        {address ? address : "Não informado"}
      </p>

      <button
        className="self-end flex gap-1 items-center py-0.5 px-2 bg-red-500 rounded cursor-pointer text-sm text-white"
        onClick={handleDeleteCustomer}
      >
        <Trash size={18} />
        Deletar
      </button>
    </div>
  );
};

export default CardClient;
