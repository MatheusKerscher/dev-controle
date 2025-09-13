import Image from "next/image";

import homeImage from "@/assets/home-illustration.svg";

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
    </main>
  );
}
