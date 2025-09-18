import { redirect } from "next/navigation";

import Container from "@/components/container";
import Header from "./components/header";
import { getSession } from "@/utils/server/session";
import ModalProvider from "@/providers/modal";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getSession();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <ModalProvider>
      <Container>
        <Header />
        {children}
      </Container>
    </ModalProvider>
  );
};

export default DashboardLayout;
