import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const getSession = async () => {
  return getServerSession(authOptions);
};

export { getSession };
