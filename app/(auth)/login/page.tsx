"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // ⬅️ client-side, não "@/auth"

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    Email: "",
    Senha: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  async function Login(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      Email: form.Email,
      Senha: form.Senha,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email ou senha incorretos");
      return;
    }

    router.push("/dashboard"); // ⬅️ tinha um typo: "dashoboard"
    router.refresh();
  }

  return (
    <div className="bg-(--colorNav) h-screen lg:overflow-hidden">
      <div className="mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start h-full">
          <div className="relative md:h-screen">
            <img
              className="hidden md:block w-full h-[400px] md:h-full object-cover"
              src="/ImagemLogin.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>
          <div className="relative flex flex-col px-5 py-10 justify-center items-center min-h-screen">
            <div className="absolute top-1 left-[-150px] lg:top-5 lg:left-1 w-full max-w-md text-center p-5">
              <Link
                className="text-[1rem] text-(--colorbotao) hover:underline"
                href="/"
              >
                Voltar pro site
              </Link>
            </div>
            <div className="w-full max-w-md">
              <h2 className="text-3xl md:text-6xl font-bold text-(--colortitulo)">
                Entrar
              </h2>
              <FieldSet className="text-sm sm:mt-2">
                <FieldDescription>
                  Acesse sua conta para continuar sua experiência.
                </FieldDescription>
              </FieldSet>
              <Button
                variant="ghost"
                className="w-full mt-4 md:mt-6 items-center px-5 py-6 border border-gray"
              >
                <FaGoogle />
                <span className="px-2 text-sm text-(--colortitulo)">
                  Continue com Google
                </span>
              </Button>
              <div className="flex items-center gap-4 w-full mt-4">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-sm text-gray-400">ou com e-mail</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <form onSubmit={Login}>
                <FieldGroup>
                  <FieldSet>
                    <div className="flex flex-col gap-1">
                      <FieldLabel>E-mail</FieldLabel>
                      <Input
                        className="w-full p-5"
                        id="Email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={form.Email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <FieldLabel>Senha</FieldLabel>
                      <Input
                        className="w-full p-5"
                        id="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={form.Senha}
                        onChange={handleChange}
                      />
                    </div>
                  </FieldSet>
                </FieldGroup>

                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

                <Button
                  type="submit"
                  variant="ghost"
                  disabled={loading}
                  className="w-full bg-(--colorbotao) text-white font-semibold mt-4 p-5 hover:bg-(--colorbotaoHover) hover:text-white transition-colors duration-300"
                >
                  {loading ? "Entrando..." : "Entrar"}
                </Button>
              </form>

              <div className="text-sm text-gray-400 mt-4 text-center">
                <p>
                  Ainda não tem conta?{" "}
                  <Link href="/cadastro">
                    <span className="text-(--colorbotao) hover:underline">
                      Criar conta
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
