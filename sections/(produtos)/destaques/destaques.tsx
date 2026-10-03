"use client";

import { useState } from "react";

const FILTERS = ["Todos", "Novidades", "Mais Vendidos", "Ofertas"];

const PRODUCTS = [
  { id: 1, badge: "NOVO", category: "Acessórios", name: "Bolsa Tote em Couro", image: "/bolsaDeCouro.jpg", rating: 4.8, reviews: 142, price: "R$ 1.290,00", oldPrice: "R$ 1.590,00" },
  { id: 2, badge: "OFERTA", category: "Calçados", name: "Tênis Runner Pro", image: "/TenisDeCorrida.jpg", rating: 4.5, reviews: 87, price: "R$ 599,00", oldPrice: "R$ 799,00" },
  { id: 3, badge: null, category: "Roupas", name: "Jaqueta de Couro", image: "/JaqueteDeCouro.jpg", rating: 4.9, reviews: 210, price: "R$ 2.100,00", oldPrice: null },
  { id: 4, badge: "NOVO", category: "Perfumes", name: "Eau de Parfum 100ml", image: "/PerfumeEAU.jpg", rating: 4.7, reviews: 56, price: "R$ 430,00", oldPrice: null },
  { id: 5, badge: "OFERTA", category: "Acessórios", name: "Cinto de Couro Premium", image: "/CintoPremium.jpg", rating: 4.6, reviews: 98, price: "R$ 189,00", oldPrice: "R$ 250,00" },
  { id: 6, badge: null, category: "Roupas", name: "Vestido Midi Floral", image: "/VestidoMidFLoral.jpg", rating: 4.8, reviews: 174, price: "R$ 349,00", oldPrice: null },
  { id: 7, badge: "NOVO", category: "Calçados", name: "Sandália Plataforma", image: "/Sandalias.jpg", rating: 4.4, reviews: 63, price: "R$ 299,00", oldPrice: "R$ 399,00" },
  { id: 8, badge: null, category: "Acessórios", name: "Óculos de Sol Retrô", image: "/OculosDeSolRetro.jpg", rating: 4.7, reviews: 121, price: "R$ 520,00", oldPrice: null },
];

function ProductCard({ badge, category, name, rating, reviews, price, oldPrice, image }: { badge: string | null; category: string; name: string; rating: number; reviews: number; price: string; oldPrice: string | null; image: string }) {
  return (
    <div className="w-full max-w-[300px] flex flex-col gap-3 group cursor-pointer">
      <div className="relative w-full aspect-square bg-[#F5F2ED] rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {badge && (
          <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
            {badge}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">{category}</span>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center gap-2">
          <div className="text-yellow-500 text-sm">★★★★★</div>
          <span className="text-xs text-gray-500">{rating} ({reviews})</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default function Destaques() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === "Novidades") return product.badge === "NOVO";
    if (activeFilter === "Ofertas") return product.badge === "OFERTA";
    if (activeFilter === "Mais Vendidos") return product.reviews >= 120;
    return true;
  });

  return (
    <section id="destaques" className="bg-(--colorNav) scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-10 py-15">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col text-center md:text-left">
            <span className="font-bold text-lg text-(--colorsubtitulo)">Coleção Especial</span>
            <h1 className="text-2xl md:text-3xl font-bold text-(--colortitulo)">Selecionados para você</h1>
          </div>

          <div className="flex items-center text-[16px] gap-5 mt-5 md:mt-0">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-(--colorparagrafo) cursor-pointer rounded-lg px-4 py-2 transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-(--colorbotao) text-white"
                    : "border border-transparent hover:border-(--colorparagrafo)"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {filteredProducts.length === 0 && <p className="mt-8 text-center text-(--colorparagrafo)">Nenhum produto encontrado nesta seleção.</p>}
      </div>
    </section>
  );
}
