import { Eye, Trash } from "lucide-react";

const iconProps = {
  size: 20,
};

const TableTickets = () => {
  return (
    <table className="w-full rounded-2xl">
      <thead className="border-b border-b-gray-300">
        <tr className="text-left h-12">
          <th className="pl-2">CLIENTE</th>
          <th className="hidden sm:table-cell">DATA CADASTRO</th>
          <th>STATUS</th>
          <th className="pr-2 text-end">#</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-b-gray-300 h-12 last:border-0 hover:bg-slate-100 duration-100 transition-colors">
          <td className="font-normal pl-2">a</td>
          <td className="font-normal hidden sm:table-cell">aberto</td>
          <td className="font-normal">
            <span className="bg-green-500 py-0.5 px-4 rounded-full">
              aberto
            </span>
          </td>
          <td className="pr-2">
            <div className="flex gap-3 items-center justify-center md:justify-end flex-wrap">
              <button className="cursor-pointer">
                <Eye {...iconProps} />
              </button>

              <button className="cursor-pointer">
                <Trash {...iconProps} color="#e40000" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTickets;
