import prismaClient from "@/lib/prisma";
import { getSession } from "@/utils/server/session";
import TicketActions from "./ticketActions";

const TableTickets = async () => {
  const session = (await getSession())!;

  const ticketList = await prismaClient.ticket.findMany({
    where: {
      userId: session.user.id,
    },
    omit: {
      updated_at: true,
      userId: true,
      customerId: true,
    },
    include: {
      customer: {
        omit: {
          created_at: true,
          updated_at: true,
          userId: true,
        },
      },
    },
  });

  return ticketList.length > 0 ? (
    <table className="w-full rounded-2xl">
      <thead className="border-b border-b-gray-300">
        <tr className="text-left h-12">
          <th className="pl-2">CHAMADO</th>
          <th className="pl-2">CLIENTE</th>
          <th className="hidden sm:table-cell">DATA CADASTRO</th>
          <th>STATUS</th>
          <th className="pr-2 text-end">#</th>
        </tr>
      </thead>

      <tbody>
        {ticketList.map((t) => (
          <tr
            key={t.id}
            className="border-b border-b-gray-300 h-12 last:border-0 hover:bg-slate-100 duration-100 transition-colors"
          >
            <td className="font-normal pl-2">{t.name}</td>
            <td className="font-normal pl-2">{t.customer?.name}</td>

            <td className="font-normal hidden sm:table-cell">
              {t.created_at?.toLocaleDateString("pt-BR")}
            </td>

            <td className="font-normal">
              <span
                className={`${
                  t.status === "OPEN" ? "bg-green-500" : "bg-red-500"
                } py-1 px-4 rounded-full font-semibold text-sm uppercaser`}
              >
                {t.status === "OPEN" ? "aberto" : "fechado"}
              </span>
            </td>

            <td className="pr-2">
              <TicketActions status={t.status} ticketId={t.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="my-6 text-center text-gray-400 font-semibold text-sm">
      Você não possui nenhum chamado até o momento
    </p>
  );
};

export default TableTickets;
