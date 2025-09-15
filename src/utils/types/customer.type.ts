import type { Customer as CustomerORM } from "@/generated/prisma";

export interface CustomerProps
  extends Pick<CustomerORM, "id" | "name" | "email" | "phone" | "address"> {}
