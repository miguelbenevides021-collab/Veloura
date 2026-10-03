import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="bg-(--colorHero) min-h-screen flex items-center border-b border-(--colorparagrafo)/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-(--colorsubtitulo) text-sm">
                Nova coleção
              </span>
              <span className="text-(--colorparagrafo) text-sm">|</span>
              <span className="text-(--colorparagrafo) text-sm">
                Até 50% OFF
              </span>
            </div>
            <h1 className="text-2xl md:text-7xl font-bold text-(--colortitulo)">
              Elegância que se{" "}
              <span className="text-(--colorsubtitulo)">veste</span> com tempo.
            </h1>
            <p className="text-(--colorparagrafo)">
              Peças cuidadosamente selecionadas de artesãos e marcas que
              valorizam o essencial. Design atemporal, materiais nobres.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button asChild className="w-full md:w-[200px] bg-(--colorbotao) rounded-full px-4 py-5">
                <a href="#destaques">
                Explorar coleção
                </a>
              </Button>
              <a href="#ofertas" className="inline-flex items-center text-(--colorparagrafo) border-b border-(--colorsubtitulo)">
                Ver lookbook
              </a>
            </div>
            <div className="flex flex-row gap-4 mt-4 w-full items-center">
              <div className="flex flex-col  border-r border-(--colorparagrafo) px-2">
                <p className="text-(--colortitulo) md:text-2xl text-sm px-2">
                  15k+
                </p>
                <p className="text-(--colorparagrafo) text-sm">Clientes</p>
              </div>
              <div className="flex flex-col border-r border-(--colorparagrafo) px-2">
                <p className="text-(--colortitulo) md:text-2xl text-sm px-2">
                  Troca fácil
                </p>
                <p className="text-(--colorparagrafo) text-sm">
                  Sem preocupações
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-(--colortitulo) md:text-2xl text-sm px-2">
                  Satisfação garantida
                </p>
                <p className="text-(--colorparagrafo) text-sm">
                  Qualidade garantida
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/BolsadeCouroFemininaPequenaTransversalAmelia_10_800x.webp"
              alt="Bolsa"
              className="w-full rounded-2xl h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:px-8">
              <div>
                <div className="bg-white/90 p-2 rounded-lg md:flex md:justify-between">
                  <div className="flex flex-col">
                    <p className=" font-bold text-(--colorparagrafo) text-sm">
                      Em destaque
                    </p>
                    <p className="text-2xl font-bold text-(--colortitulo)">
                      Bolsa Amelia
                    </p>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <Button asChild className="w-full md:w-[150px] bg-(--colorbotao) rounded-full px-4 py-2">
                      <a href="#destaques">
                      Comprar <ArrowRight />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
