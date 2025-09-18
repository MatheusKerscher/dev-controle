"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Check, Eye, X } from "lucide-react";

import api from "@/lib/axios";
import { useContext } from "react";
import { ModalContext } from "@/providers/modal";
import type { TicketProps } from "@/utils/types/ticket.type";

const iconProps = {
  size: 20,
};

type TicketActionProps = {
  ticket: TicketProps;
};

const TicketActions = ({ ticket }: TicketActionProps) => {
  const { handleVisible, setTicket } = useContext(ModalContext);
  const router = useRouter();

  const handleToggleTicketStatus = async () => {
    try {
      const response = await api.patch("/api/ticket", {
        id: ticket.id,
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

  const handleOpenModal = () => {
    setTicket(ticket);
    handleVisible();
  };

  return (
    <div className="flex gap-3 items-center justify-end flex-wrap">
      <button className="cursor-pointer" onClick={handleToggleTicketStatus}>
        {ticket.status === "OPEN" ? (
          <Check {...iconProps} color="#00c950" />
        ) : (
          <X {...iconProps} color="#fb2c36 " />
        )}
      </button>

      <button className="cursor-pointer" onClick={handleOpenModal}>
        <Eye {...iconProps} />
      </button>
    </div>
  );
};

export default TicketActions;
