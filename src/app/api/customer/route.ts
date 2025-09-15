import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";

const POST = async (req: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "Para cadastrar um cliente você precisa estar logado",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const { address, email, name, phone } = await req.json();

    await prismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        address: address ? address : "",
        userId: session.user.id,
      },
    });

    return NextResponse.json(
      {
        message: "Cliente cadastrado com sucesso",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Não foi possível cadastrar o cliente. Por favor, tente novamente mais tarde",
      },
      { status: 400 }
    );
  }
};

export { POST };
