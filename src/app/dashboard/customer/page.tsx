import Link from "next/link";
import { Frown, Plus } from "lucide-react";

import CardClient from "./components/cardClient";
import { getSession } from "@/utils/server/session";
import prismaClient from "@/lib/prisma";
import type { CustomerProps } from "@/utils/types/customer.type";

const CustomerProps = async () => {
  const session = await getSession();

  const customerList: CustomerProps[] = await prismaClient.customer.findMany({
    where: {
      userId: session?.user.id,
    },
  });

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

      {customerList.length > 0 ? (
        <section className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {customerList.map((c) => (
            <CardClient
              key={c.id}
              id={c.id}
              name={c.name}
              email={c.email}
              phone={c.phone}
              address={c.address}
            />
          ))}
        </section>
      ) : (
        <div className="mt-6 text-gray-400 font-semibold flex gap-2 justify-center flex-wrap">
          <p className="text-center">Nenhum cliente cadastrado até o momento</p>
          <Frown />
        </div>
      )}
    </>
  );
};

export default CustomerProps;
