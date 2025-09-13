import { Plus } from "lucide-react";
import CardClient from "./components/cardClient";
import Link from "next/link";

const Clients = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-bold">Meus clientes</h2>

        <Link
          href="/dashboard/customer/new"
          className="flex gap-1 items-center py-2 px-5 bg-blue-500 text-white rounded cursor-pointer hover:scale-105 duration-300"
        >
          <Plus size={18} />
          Novo cliente
        </Link>
      </section>

      <section className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardClient />
      </section>
    </>
  );
};

export default Clients;
