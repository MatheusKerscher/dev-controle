import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CustomerForm from "./components/customerForm";
import FormHeader from "@/components/formHeader";

const NewCustomer = () => {
  return (
    <main>
      <FormHeader title="Cadastrar cliente" returnUrl="/dashboard/customer" />

      <section>
        <CustomerForm />
      </section>
    </main>
  );
};

export default NewCustomer;
