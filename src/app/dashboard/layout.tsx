import { redirect } from "next/navigation";

import Container from "@/components/container";
import Header from "./components/header";
import { getSession } from "@/utils/server/session";

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
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default DashboardLayout;
