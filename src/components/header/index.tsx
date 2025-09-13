"use client";

import { Loader, LogIn, LogOut, User } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const iconProps = {
  color: "#4b5563",
};

const Header = () => {
  const { status, data } = useSession();

  const handleLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="w-full bg-white min-h-14 py-3 shadow">
      <nav className="w-full max-w-7xl mx-auto px-3 xl:px-0 flex flex-col sm:flex-row justify-center sm:justify-between gap-4 items-center">
        <Link href="/">
          <h1 className="font-bold text-xl md:text-2xl uppercase hover:tracking-widest duration-300">
            <span className="text-blue-500">dev</span> controle
          </h1>
        </Link>

        <ul className="flex gap-4 items-baseline pt-0.5">
          {status === "loading" && (
            <li className="animate-spin">
              <Loader {...iconProps} />
            </li>
          )}

          {status === "unauthenticated" && (
            <li>
              <button className="cursor-pointer" onClick={handleLogin}>
                <LogIn color="#2b7fff" />
              </button>
            </li>
          )}

          {status === "authenticated" && (
            <>
              <li>
                <Link href="/dashboard">
                  <User {...iconProps} />
                </Link>
              </li>

              <li>
                <button className="cursor-pointer" onClick={handleLogout}>
                  <LogOut color="#e40000" />
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
