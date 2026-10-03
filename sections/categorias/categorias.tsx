    import { Shirt, Watch, Sparkles, Headphones, SportShoe, House } from "lucide-react";
    export default function Categorias() {
  return (
    <section id="categorias" className="bg-(--colorNav) scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-10 py-15">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:block">
                <span className="font-bold text-lg text-(--colorsubtitulo) ">Categorias</span>
                <h1 className="text-2xl md:text-3xl font-bold text-(--colortitulo)">Explore por categoria</h1>
            </div>
          <span className="text-(--colorbotao) cursor-pointer hover:underline">Ver todos</span>
        </div>  
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
          {/* Card 1 */}
          <div className=" p-6 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F2ED] mb-4 text-2xl"><Shirt /></div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Moda</h3>
              <p className="text-sm text-gray-500">240+ itens</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" p-6 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F2ED] mb-4 text-2xl"><Watch /></div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Relógios</h3>
              <p className="text-sm text-gray-500">85+ itens</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" p-6 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F2ED] mb-4 text-2xl"><Sparkles /></div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Beleza</h3>
              <p className="text-sm text-gray-500">320+ itens</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className=" p-6 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F2ED] mb-4 text-2xl"><Headphones /></div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Tech</h3>
              <p className="text-sm text-gray-500">120+ itens</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className=" p-6 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F2ED] mb-4 text-2xl"><SportShoe /></div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Calçados</h3>
              <p className="text-sm text-gray-500">180+ itens</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className=" p-6 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F2ED] mb-4 text-2xl"><House /></div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Casa</h3>
              <p className="text-sm text-gray-500">210+ itens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
