import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Função que recebe requisições POST (quando o formulário é enviado)
export async function POST(request: Request) {
  try {
    // Pega os dados enviados pelo formulário
    const { name, email, password, terms } = await request.json();

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !password || !terms) {
      return NextResponse.json(
        {
          error: "Preencha Todos os Campos",
        },
        {
          status: 400, // 400 = requisição inválida
        },
      );
    }

    // Verifica se já existe um usuário com este e-mail no banco
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Se encontrou um usuário com este e-mail, retorna erro
    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email Já Cadastrado",
        },
        {
          status: 409, // 409 = conflito (dado já existe)
        },
      );
    }

    // Criptografa a senha antes de salvar no banco
    // O número 10 é o "salt" — quanto maior, mais seguro e mais lento
    const hashedPassword = await bcrypt.hash(password, 10);

    // Salva o novo usuário no banco de dados
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword, // Salva a senha criptografada, nunca a original
        terms,
      },
    });

    // Retorna sucesso para o frontend
    return NextResponse.json(
      {
        message: "Usuário Cadastrado Com sucesso",
      },
      {
        status: 201, // 201 = criado com sucesso
      },
    );
  } catch (error) {
    // Se qualquer coisa acima der errado, cai aqui
    // Mostra o erro no terminal para debug
    console.log(error);

    // Retorna erro genérico para o frontend
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
      },
      {
        status: 500, // 500 = erro interno do servidor
      },
    );
  }
}
