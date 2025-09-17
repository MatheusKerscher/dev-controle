import { Plus } from "lucide-react";
import TableTickets from "./components/tableTickets";
import Link from "next/link";

const Dashboard = async () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-bold">Chamados</h2>

        <Link
          href="/dashboard/new"
          className="flex gap-1 items-center py-2 px-5 bg-blue-500 text-white rounded cursor-pointer hover:scale-105 duration-300"
        >
          <Plus size={18} />
          Abrir chamado
        </Link>
      </section>

      <section className="mt-6 shadow-md rounded border border-gray-100">
        <TableTickets />
      </section>
    </>
  );
};

export default Dashboard;
