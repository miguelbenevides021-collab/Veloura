"use client";
import { useState } from "react"; // Permite guardar dados na memória do componente
import { useRouter } from "next/navigation"; // Permite redirecionar para outra página
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldLabel,
  Field,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa";

export default function Cadastro() {
  // Hook para redirecionar o usuário para outra página
  const router = useRouter();

  // Guarda os dados digitados pelo usuário no formulário
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState(""); // Guarda a mensagem de erro
  const [loading, setloading] = useState(false); // Controla se está carregando

  // Função chamada quando o usuário clica em "Entrar"
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Impede a página de recarregar ao enviar o formulário
    setloading(true); // Ativa o loading
    setError(""); // Limpa erros anteriores

    // Envia os dados para a API
    const response = await fetch("/api/auth/register", {
      method: "POST", // Tipo da requisição
      headers: {
        "Content-Type": "application/json", // Diz que estamos enviando JSON
      },
      body: JSON.stringify(form), // Converte os dados para JSON
    });

    const data = await response.json(); // Pega a resposta da API
    setloading(false); // Desativa o loading

    // Se a API retornou erro, exibe a mensagem
    if (!response.ok) {
      setError(data.error || "Ocorreu um erro ao cadastrar");
      return;
    }

    // Se deu tudo certo, redireciona para o login
    router.push("/login");
  }
  return (
    <div className="bg-(--colorNav) h-screen lg:overflow-hidden">
      <div className="mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start h-full">
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
                Criar Conta
              </h2>

              <FieldSet className="text-sm sm:mt-2">
                <FieldDescription>
                  Junte-se à veloura e desfrute de uma experiência única.
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

              {/* Formulário — ao enviar chama handleSubmit */}
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <FieldSet>
                    <div className="flex flex-col gap-1">
                      <FieldLabel>Nome</FieldLabel>
                      <Input
                        className="w-full p-5"
                        id="name"
                        type="text"
                        placeholder="Digite seu nome"
                        value={form.name} // Valor atual do campo
                        onChange={(e) =>
                          setForm({
                            ...form, // Mantém os outros campos
                            name: e.target.value, // Atualiza só o name
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <FieldLabel>E-mail</FieldLabel>
                      <Input
                        className="w-full p-5"
                        id="Email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={form.email} // Valor atual do campo
                        onChange={(e) =>
                          setForm({
                            ...form, // Mantém os outros campos
                            email: e.target.value, // Atualiza só o email
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <FieldLabel>Senha</FieldLabel>
                      <Input
                        className="w-full p-5"
                        id="Password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={form.password} // Valor atual do campo
                        onChange={(e) =>
                          setForm({
                            ...form, // Mantém os outros campos
                            password: e.target.value, // Atualiza só o password
                          })
                        }
                      />
                    </div>
                  </FieldSet>
                  <Field>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        className="w-[10] p-2"
                        id="terms-checkbox-2"
                        name="terms-checkbox-2"
                        checked={form.terms} // true = marcado, false = desmarcado
                        onCheckedChange={(checked) =>
                          setForm({
                            ...form,
                            terms: checked === true, // Garante que é boolean
                          })
                        }
                      />
                      <FieldLabel>
                        Concordo com os termos e condições
                      </FieldLabel>
                    </div>
                  </Field>
                </FieldGroup>

                {/* Só aparece se tiver algum erro */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <Button
                  type="submit" // Envia o formulário ao clicar
                  variant="ghost"
                  disabled={loading} // Desativa o botão enquanto carrega
                  className="w-full bg-(--colorbotao) text-white font-semibold mt-4 p-5 hover:bg-(--colorbotaoHover) hover:text-white transition-colors duration-300"
                >
                  {loading ? "Cadastrando..." : "Entrar"}{" "}
                  {/* Muda o texto enquanto carrega */}
                </Button>
              </form>
              <div className="text-sm text-gray-400 mt-4 text-center">
                <p>
                  Já tem uma conta?{" "}
                  <Link href="/login">
                    <span className="text-(--colorbotao) hover:underline">
                      Entrar
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="relative md:h-screen">
            <img
              className="hidden md:block w-full h-[400px] md:h-full object-cover"
              src="/ImagemLogin.jpg"
              alt=""
            ></img>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
