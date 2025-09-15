import type { CustomerProps } from "@/utils/types/customer.type";
import { Trash } from "lucide-react";

type CardClientProps = {} & Omit<CustomerProps, "id">;

const CardClient = ({ name, email, phone, address }: CardClientProps) => {
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

      <button className="self-end flex gap-1 items-center py-0.5 px-2 bg-red-500 rounded cursor-pointer text-sm text-white">
        <Trash size={18} />
        Deletar
      </button>
    </div>
  );
};

export default CardClient;
