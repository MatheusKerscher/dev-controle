import type { Customer } from "@/generated/prisma";

export interface CustomerProps
  extends Pick<Customer, "id" | "name" | "email" | "phone" | "address"> {}
