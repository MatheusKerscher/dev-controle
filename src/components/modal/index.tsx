"use client";

import { ModalContext } from "@/providers/modal";
import { X } from "lucide-react";
import { useContext } from "react";

const Modal = () => {
  const { ticket, handleVisible } = useContext(ModalContext);
  return (
    <>
      <div className="fixed inset-0 bg-black/75"></div>

      <dialog
        open
        className="fixed top-6/12 -translate-y-6/12 w-11/12 md:w-8/12 h-auto mx-auto rounded-lg shadow p-3"
      >
        <div className="flex justify-between">
          <h3 className="text-lg sm:text-xl font-bold">Detalhes do chamado</h3>

          <button className="cursor-pointer" onClick={handleVisible}>
            <X />
          </button>
        </div>

        <div className="mt-6">
          <p className="mb-1">
            <span className="font-semibold">Nome:</span> {ticket.name}
          </p>

          <p className="mb-1">
            <span className="font-semibold">Status:</span>{" "}
            {ticket.status === "OPEN" ? "Aberto" : "Fechado"}
          </p>

          <div className="flex flex-col gap-0.5">
            <span className="font-semibold">Descrição:</span>
            <p>{ticket.description}</p>
          </div>
        </div>

        <hr className="border-t-[1px] border-gray-500 my-5"></hr>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2">Detalhes do cliente</h4>

          <p className="mb-1">
            <span className="font-semibold">Nome:</span> {ticket.customer?.name}
          </p>

          <p className="mb-1">
            <span className="font-semibold">Telefone:</span>{" "}
            {ticket.customer?.phone}
          </p>

          <p>
            <span className="font-semibold">E-mail:</span>{" "}
            {ticket.customer?.email}
          </p>

          {ticket.customer?.address && (
            <p className="mt-1">
              <span className="font-semibold">Endereço:</span>{" "}
              {ticket.customer?.address}
            </p>
          )}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
