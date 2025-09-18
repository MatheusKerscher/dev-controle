import type { Ticket } from "@/generated/prisma";
import type { CustomerProps } from "./customer.type";

export interface TicketProps
  extends Pick<
    Ticket,
    "id" | "name" | "description" | "status" | "created_at"
  > {
  customer: CustomerProps | null;
}
