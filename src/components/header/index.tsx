import { LogOut, User } from "lucide-react";
import Link from "next/link";

const iconProps = {
  color: "#4b5563",
};

const Header = () => {
  return (
    <header className="w-full bg-white min-h-14 py-3 shadow">
      <nav className="w-full max-w-7xl mx-auto px-3 xl:px-0 flex flex-col sm:flex-row justify-center sm:justify-between gap-4 items-center">
        <Link href="/">
          <h1 className="font-bold text-xl md:text-2xl uppercase hover:tracking-widest duration-300">
            <span className="text-blue-500">dev</span> controle
          </h1>
        </Link>

        <ul className="flex gap-4 items-baseline pt-0.5">
          <li>
            <Link href="/profile">
              <User {...iconProps} />
            </Link>
          </li>

          <li>
            <button>
              <LogOut {...iconProps} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
