import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import Credencials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credencials({
      credentials: {
        Email: { label: "Email", type: "email" },
        Senha: { label: "Senha", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials.Email || !credentials.Senha) {
          return null;
        }
        try {
          const userEncontrar = await prisma.user.findUnique({
            where: {
              email: credentials.Email as string,
            },
          });

          if (!userEncontrar) {
            return null;
          }

          const senha = await bcrypt.compare(
            credentials.Senha as string,
            userEncontrar.password,
          );

          if (!senha) {
            return null;
          }

          return {
            id: String(userEncontrar.id),
            name: userEncontrar.name,
            email: userEncontrar.email,
          };
        } catch (err) {
          console.error("Erro:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
