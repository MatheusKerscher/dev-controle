import { Tag, Users } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full bg-gray-900 rounded-lg py-3 px-6 mb-4 sm:mb-6">
      <ul className="flex flex-wrap gap-7 justify-center sm:justify-start">
        <li>
          <Link href="" className="text-white flex gap-1 items-center">
            <Tag size={18} />
            Chamados
          </Link>
        </li>

        <li>
          <Link href="" className="text-white flex gap-1 items-center">
            <Users size={18} />
            Clientes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
