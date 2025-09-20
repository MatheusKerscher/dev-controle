import Image from "next/image";

import homeImage from "@/assets/home-illustration.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-[calc(100dvh-101px)] sm:min-h-[calc(100dvh-57px)] flex flex-col justify-center items-center">
      <h2 className="font-medium text-center text-xl md:text-2xl mb-1">
        Gerencie sua empresa
      </h2>

      <h3 className="font-bold text-center text-2xl md:text-3xl text-blue-500 mb-6">
        Atendimentos, clientes
      </h3>

      <Image
        src={homeImage}
        alt="Imagem da pagina inicial do Dev Controle"
        width={300}
        height={300}
      />

      <Link
        href="/open"
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300"
      >
        Abrir chamado
      </Link>
    </main>
  );
}
