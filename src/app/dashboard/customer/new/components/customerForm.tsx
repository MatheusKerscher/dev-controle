"use client";

import Input from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleUser, Mail, MapPin, Phone, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "O campo nome completo é obrigatório"),
  email: z
    .email("Digite um e-mail válido")
    .min(1, "O campo nome completo é obrigatório"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    {
      message: "O campo telefone deve ter o formato (DD) 999999999",
    }
  ),
  address: z.string(),
});

type FormData = z.infer<typeof schema>;

const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      address: "",
      email: "",
      name: "",
      phone: "",
    },
  });

  const handleRegisterCustomer = (data: FormData) => {};

  return (
    <form
      className="flex flex-col gap-4 mt-6"
      onSubmit={handleSubmit(handleRegisterCustomer)}
    >
      <Input
        type="text"
        name="name"
        placeholder="Digite o nome completo..."
        error={errors.name?.message}
        register={register}
        label="Nome completo"
        icon={<CircleUser />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="tel"
          name="phone"
          placeholder="(DD) xxxxxxxxx"
          error={errors.phone?.message}
          register={register}
          label="Telefone"
          icon={<Phone />}
        />

        <Input
          type="email"
          name="email"
          placeholder="Digite o e-mail..."
          error={errors.email?.message}
          register={register}
          label="E-mail"
          icon={<Mail />}
        />
      </div>

      <Input
        type="text"
        name="address"
        placeholder="Digite o endereço..."
        error={errors.address?.message}
        register={register}
        label="Endereço"
        icon={<MapPin />}
      />

      <button
        type="submit"
        className="md:self-end flex items-center justify-center gap-2 bg-blue-500 text-white py-1 px-2 rounded-md"
      >
        <Save size={22} /> Cadastrar
      </button>
    </form>
  );
};

export default CustomerForm;
