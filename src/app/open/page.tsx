import { Tag } from "lucide-react";
import FormTicket from "./components/formTicket";

const OpenTicket = () => {
  return (
    <main className="min-h-[calc(100dvh-120px)] sm:min-h-[calc(100dvh-84px)] flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500 flex gap-3 items-center">
        <Tag size={32} />
        Abrir chamado
      </h1>

      <section className="mt-6 w-full md:w-8/12">
        <FormTicket />
      </section>
    </main>
  );
};

export default OpenTicket;
