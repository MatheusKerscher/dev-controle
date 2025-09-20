"use client";

import Input from "@/components/input";
import api from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Save, Search, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  email: z.email("Informe um e-mail para localizar o cliente..."),
  name: z.string().min(1, "O nome do chamado é obrigatório"),
  description: z.string().min(1, "O descrição do chamado é obrigatória"),
});

type FormData = z.infer<typeof schema>;

type CustomerData = {
  id: string;
  name: string;
};

const FormTicket = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      name: "",
      description: "",
    },
  });

  const [customer, setCustomer] = useState<CustomerData | null>(null);

  const handleRemoveCustomer = () => {
    reset({
      name: "",
      email: "",
      description: "",
    });
    setCustomer(null);
  };

  const handleSearchCustomer = async () => {
    try {
      const response = await api.get("/api/customer", {
        params: {
          email: getValues("email"),
        },
      });

      if (response.status === 200) {
        setCustomer({
          id: response.data.customer.id,
          name: response.data.customer.name,
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        "Não foi possível encontrar o cliente. Por favor, tente novamente mais tarde"
      );
    }
  };

  const handleCreateTicket = async (data: FormData) => {
    try {
      if (customer) {
        const response = await api.post("/api/ticket", {
          customerId: customer.id,
          name: data.name,
          description: data.description,
        });

        if (response.status === 201) {
          toast.success(response.data.message);

          reset({
            name: "",
            email: "",
            description: "",
          });
          setCustomer(null);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error(
          "Não foi possível cadastrar o chamado. Por favor, tente novamente mais tarde"
        );
      }
    } catch (error) {
      toast.error(
        "Não foi possível cadastrar o chamado. Por favor, tente novamente mais tarde"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateTicket)}>
      <div className="bg-slate-200 p-3 rounded-lg shadow flex gap-2 flex-col sm:flex-row">
        {customer ? (
          <div className="w-full flex justify-between items-center p-4">
            <p>
              <span className="font-semibold">Cliente: </span>
              {customer.name}
            </p>

            <button
              onClick={handleRemoveCustomer}
              className="text-red-500 cursor-pointer"
            >
              <X size={26} />
            </button>
          </div>
        ) : (
          <>
            <Input
              name="email"
              type="email"
              placeholder="Informe o e-mail do cliente..."
              register={register}
              error={errors.email?.message}
            />

            <button
              type="button"
              className="rounded bg-blue-500 p-2 flex gap-2 text-white items-center justify-between cursor-pointer self-start"
              onClick={handleSearchCustomer}
            >
              Procurar cliente <Search size={20} />
            </button>
          </>
        )}
      </div>

      {customer && (
        <div className="mt-6 bg-slate-200 p-3 rounded-lg shadow flex gap-3 flex-col">
          <Input
            type="text"
            name="name"
            placeholder="Digite o nome..."
            register={register}
            error={errors.name?.message}
          />

          <div>
            <textarea
              id="description"
              {...register("description")}
              className={`${
                errors.description?.message
                  ? "border-red-400"
                  : "border-slate-400"
              } resize-none h-40 w-full outline-0 text-slate-600 p-1 border rounded-md focus:border-2 transition-all`}
              placeholder="Descreva o problema que está ocorrendo..."
            ></textarea>

            {errors.description?.message && (
              <p className="mt-1 text-red-500 text-xs">
                {errors.description?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-500 text-white p-2 rounded-md cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-spin">
                <LoaderCircle />
              </span>
            ) : (
              <Save size={22} />
            )}
            Cadastrar
          </button>
        </div>
      )}
    </form>
  );
};

export default FormTicket;
