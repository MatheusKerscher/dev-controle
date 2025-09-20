import Container from "@/components/container";
import { House } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <main className="min-h-[calc(100dvh-124px)] sm:min-h-[calc(100dvh-82px)] flex flex-col items-center justify-center">
        <h2 className="text-center font-bold text-gray-800 text-xl md:text-3xl">
          Ops!
        </h2>

        <p className="text-center font-semibold text-gray-400 mt-2 text-sm">
          Parece que não encontramos o que você estava procurando
        </p>

        <Link
          href="/"
          className="mt-8 bg-blue-500 px-6 py-2 rounded-lg font-semibold text-white shadow hover:scale-105 transition-all duration-300 flex gap-3 items-center"
        >
          <House />
          Voltar para home
        </Link>
      </main>
    </Container>
  );
};

export default NotFound;
