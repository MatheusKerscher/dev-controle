import { NextResponse } from "next/server";

import prismaClient from "@/lib/prisma";
import { getSession } from "@/utils/server/session";

const POST = async (request: Request) => {
  try {
    const { customerId, name, description } = await request.json();

    if (!customerId || !name || !description) {
      return NextResponse.json(
        {
          message:
            "Não foi possível cadastrar o chamado. Por favor, verifique os dados e tente novamente mais tarde",
        },
        { status: 404 }
      );
    }

    const customer = await prismaClient.customer.findUnique({
      where: {
        id: customerId,
      },
    });

    if (!customer) {
      return NextResponse.json(
        {
          message:
            "Esse cliente não pode ser atribuído ao chamado. Por favor, selecione um cliente valido",
        },
        { status: 404 }
      );
    }

    await prismaClient.ticket.create({
      data: {
        name: name,
        description: description,
        status: "OPEN",
        customerId: customer.id,
        userId: customer.userId,
      },
    });

    return NextResponse.json(
      {
        message: "Chamado cadastrado com sucesso",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Não foi possível cadastrar o chamado. Por favor, tente novamente mais tarde",
      },
      { status: 400 }
    );
  }
};

const PATCH = async (request: Request) => {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      {
        message: "Para finalizar um chamado você precisa estar logado",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const { id } = await request.json();

    console.log("ID", id);

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Não foi possível atualizar o chamado. Por favor, tente novamente mais tarde",
        },
        { status: 404 }
      );
    }

    const ticket = await prismaClient.ticket.findFirst({
      where: {
        id: id,
        userId: session.user.id,
      },
    });

    if (!ticket) {
      return NextResponse.json(
        {
          message:
            "Não foi possível atualizar o chamado. Por favor, tente novamente mais tarde",
        },
        { status: 400 }
      );
    }

    const response = await prismaClient.ticket.update({
      where: {
        id: id,
        userId: session.user.id,
      },
      data: {
        status: ticket.status === "OPEN" ? "CLOSE" : "OPEN",
      },
    });

    if (!response.id) {
      return NextResponse.json(
        {
          message:
            "Não foi possível atualizar o chamado. Por favor, tente novamente mais tarde",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Chamado atualizado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Não foi possível atualizar o chamado. Por favor, tente novamente mais tarde",
      },
      { status: 400 }
    );
  }
};

export { POST, PATCH };
