import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CustomerForm from "./components/customerForm";

const NewCustomer = () => {
  return (
    <>
      <section className="flex gap-2 items-center">
        <Link href="/dashboard/customer" className=" cursor-pointer">
          <ChevronLeft size={28} />
        </Link>

        <h2 className="text-lg sm:text-xl font-bold">Cadastrar cliente</h2>
      </section>

      <section>
        <CustomerForm />
      </section>
    </>
  );
};

export default NewCustomer;
