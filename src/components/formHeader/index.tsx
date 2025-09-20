import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type FormHeaderProps = {
  title: string;
  returnUrl: string;
};

const FormHeader = ({ title, returnUrl }: FormHeaderProps) => {
  return (
    <section className="flex gap-2 items-center">
      <Link href={returnUrl} className="cursor-pointer">
        <ChevronLeft size={28} />
      </Link>

      <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
    </section>
  );
};

export default FormHeader;
