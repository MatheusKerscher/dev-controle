"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Check, Eye, X } from "lucide-react";

import api from "@/lib/axios";

const iconProps = {
  size: 20,
};

type TicketActionProps = {
  ticketId: string;
  status: string;
};

const TicketActions = ({ ticketId, status }: TicketActionProps) => {
  const router = useRouter();

  const handleToggleTicketStatus = async () => {
    try {
      const response = await api.patch("/api/ticket", {
        id: ticketId,
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        router.refresh();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível atualizar o chamado. Por favor, tente novamente mais tarde"
      );
    }
  };

  return (
    <div className="flex gap-3 items-center justify-center md:justify-end flex-wrap">
      <button className="cursor-pointer" onClick={handleToggleTicketStatus}>
        {status === "OPEN" ? (
          <Check {...iconProps} color="#00c950" />
        ) : (
          <X {...iconProps} color="#fb2c36 " />
        )}
      </button>

      <button className="cursor-pointer">
        <Eye {...iconProps} />
      </button>
    </div>
  );
};

export default TicketActions;
