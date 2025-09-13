import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions } from "next-auth";

import primasCliente from "./prisma";

type SessionProps = {
  id: string;
  name: string;
  email: string;
};

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(primasCliente),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id } as SessionProps;

      return session;
    },
  },
};
