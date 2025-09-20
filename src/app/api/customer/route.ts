import { NextResponse } from "next/server";

import prismaClient from "@/lib/prisma";
import { getSession } from "@/utils/server/session";

const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const customerEmail = searchParams.get("email");

    if (!customerEmail) {
      return NextResponse.json(
        {
          message: "Por favor, informe um e-mail para poder buscar o cliente",
        },
        { status: 404 }
      );
    }

    const customer = await prismaClient.customer.findFirst({
      where: {
        email: customerEmail,
      },
    });

    if (!customer) {
      return NextResponse.json(
        {
          message:
            "Não foi possível encontrar o cliente. Por favor, tente novamente mais tarde",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      customer: {
        id: customer.id,
        name: customer.name,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Não foi possível encontrar o cliente. Por favor, tente novamente mais tarde",
      },
      { status: 400 }
    );
  }
};

const POST = async (req: Request) => {
  const session = await getSession();

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

const DELETE = async (req: Request) => {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      {
        message: "Para deletar um cliente você precisa estar logado",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const customerId = searchParams.get("id");

    if (!customerId) {
      return NextResponse.json(
        {
          message:
            "Não foi possível deletar o cliente. Por favor, tente novamente mais tarde",
        },
        { status: 404 }
      );
    }

    const tickets = await prismaClient.ticket.findFirst({
      where: {
        status: "open",
        customer: {
          id: customerId,
          userId: session.user.id,
        },
      },
    });

    if (tickets) {
      return NextResponse.json(
        {
          message:
            "Esse cliente possui chamados em aberto. Por favor, encerre os chamados dele antes de deletar ele",
        },
        { status: 404 }
      );
    }

    const response = await prismaClient.customer.delete({
      where: {
        id: customerId,
        userId: session.user.id,
      },
    });

    if (!response.id) {
      return NextResponse.json(
        {
          message:
            "Não foi possível deletar o cliente. Por favor, tente novamente mais tarde",
        },
        { status: 404 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Não foi possível deletar o cliente. Por favor, tente novamente mais tarde",
      },
      { status: 400 }
    );
  }
};

export { GET, POST, DELETE };
