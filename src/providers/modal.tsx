"use client";

import Modal from "@/components/modal";
import type { TicketProps } from "@/utils/types/ticket.type";
import { createContext, useState, type ReactNode } from "react";

type ModalContextData = {
  handleVisible: () => void;
  setTicket: (ticket: TicketProps) => void;
  ticket: TicketProps;
};

export const ModalContext = createContext({} as ModalContextData);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState<TicketProps>({} as TicketProps);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <ModalContext.Provider
      value={{
        handleVisible,
        setTicket,
        ticket,
      }}
    >
      {visible && <Modal />}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
