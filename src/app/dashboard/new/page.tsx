import Input from "./components/input";
import { Save, Tag, UserRound } from "lucide-react";

import { redirect } from "next/navigation";
import FormHeader from "@/components/formHeader";
import prismaClient from "@/lib/prisma";
import { getSession } from "@/utils/server/session";
import Link from "next/link";

const NewTicket = async () => {
  const session = (await getSession())!;

  const clientList = await prismaClient.customer.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const handleSubmitTicketForm = async (formData: FormData) => {
    "use server";

    try {
      const name = formData.get("name");
      const description = formData.get("description");
      const customerId = formData.get("customer");

      if (!customerId || !description || !name) {
        return;
      }

      await prismaClient.ticket.create({
        data: {
          name: name as string,
          description: description as string,
          customerId: customerId as string,
          status: "OPEN",
          userId: session.user.id,
        },
      });
    } catch (error) {
      console.error(error);
      return;
    }

    redirect("/dashboard");
  };

  return (
    <main>
      <main>
        <FormHeader title="Cadastrar chamado" returnUrl="/dashboard" />

        <section className="mt-6">
          <form className="flex flex-col gap-4" action={handleSubmitTicketForm}>
            <Input
              type="text"
              name="name"
              placeholder="Digite o nome..."
              label="Nome do chamado"
              icon={<Tag />}
            />

            <div className="flex flex-col gap-1">
              <label
                htmlFor="description"
                className="font-semibold cursor-pointer"
              >
                Descreva o problema
              </label>

              <textarea
                id="description"
                name="description"
                className="resize-none h-40 w-full outline-0 text-slate-600 p-1 border border-slate-400 rounded-md focus:border-2 transition-all"
                placeholder="Descreva o problema que está ocorrendo..."
              ></textarea>
            </div>

            {clientList.length > 0 ? (
              <>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="customer"
                    className="font-semibold cursor-pointer"
                  >
                    Selecione seu cliente
                  </label>

                  <div className="border rounded-md focus-within:border-2 transition-all flex items-center h-10 group">
                    <span className="bg-slate-100 rounded-tl-md rounded-bl-md border-r px-1 sm:px-2 text-gray-500 h-full flex items-center group-focus-within:border-r-2">
                      <UserRound />
                    </span>

                    <select
                      id="customer"
                      name="customer"
                      className="border-0 w-full outline-0 text-slate-600 p-1"
                    >
                      {clientList.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="md:self-end flex items-center justify-center gap-2 bg-blue-500 text-white py-1 px-2 rounded-md cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  <Save size={22} />
                  Cadastrar
                </button>
              </>
            ) : (
              <p className="text-gray-400 font-semibold text-center">
                Para abrir um chamado você precisa ter pelo menos um cliente
                cadastrado.{" "}
                <Link
                  className="underline text-blue-500"
                  href="/dashboard/customer/new"
                >
                  Clique aqui
                </Link>{" "}
                para cadastrar seu primeiro cliente
              </p>
            )}
          </form>
        </section>
      </main>
    </main>
  );
};

export default NewTicket;
