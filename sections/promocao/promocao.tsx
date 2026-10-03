import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Promocao() {
  const contador = [
    { valor: "02", label: "Dias" },
    { valor: "14", label: "Horas" },
    { valor: "28", label: "Min" },
    { valor: "47", label: "Seg" },
  ];

  return (
    <section id="ofertas" className="bg-(--colorNav) scroll-mt-20">
      <div className="container w-full mx-auto px-10 py-15">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#4a2d1f] via-[#2D1D14] to-[#2D1D14] md:h-[600px]">
          {/* Imagem de fundo, lado direito, mesclando com o degradê */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a2d1f]  to-[#2D1D14]">
            <Image
              src="/Fotopromo3.jpg"
              alt="Peças em promoção"
              fill
              className="object-cover object-right mix-blend-multiply opacity-90"
            />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 flex h-full items-center px-10 md:px-20 py-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <span className="text-sm text-(--colorsubtitulo) font-semibold tracking-widest uppercase">
                Oferta Limitada
              </span>

              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Até <span className="text-(--colorsubtitulo)">40% off</span> em
                peças selecionadas
              </h2>

              <p className="text-sm text-(--colorparagrafo)">
                Aproveite o último fim de semana com descontos exclusivos em uma
                curadoria de relógios, acessórios e fragrâncias.
              </p>

              <div className="flex flex-row items-center gap-3 mt-2">
                {contador.map((item) => (
                  <div
                    key={item.label}
                    className="bg-(--colorbotaoHover) rounded-[8px] px-5 py-3 flex flex-col items-center min-w-[70px]"
                  >
                    <span className="text-2xl text-white font-bold leading-none">
                      {item.valor}
                    </span>
                    <span className="text-[10px] text-white/70 uppercase tracking-wide mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <Button asChild className="bg-(--colorsubtitulo) text-(--colorbotao) rounded-full px-6 py-6 font-semibold hover:bg-(--colorsubtitulo) hover:scale-102 transition-all duration-300">
                  <a href="#destaques">
                  Aproveitar agora <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
