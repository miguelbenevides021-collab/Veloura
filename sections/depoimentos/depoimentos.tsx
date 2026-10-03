const REVIEWS = [
  {
    quote: "A qualidade das peças e o cuidado com cada detalhe superaram minhas expectativas. Já virou minha primeira escolha.",
    name: "Mariana Costa",
    detail: "Cliente Veloura",
  },
  {
    quote: "Encontrei peças atemporais que combinam com tudo. A experiência de compra foi simples do início ao fim.",
    name: "Lucas Martins",
    detail: "Cliente Veloura",
  },
  {
    quote: "A bolsa é ainda mais bonita de perto. O acabamento e os materiais mostram que cada escolha foi feita com cuidado.",
    name: "Camila Ribeiro",
    detail: "Cliente Veloura",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-(--colorHero)" aria-labelledby="reviews-title">
      <div className="container mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 text-center">
          <span className="font-bold text-lg text-(--colorsubtitulo)">Quem escolhe, recomenda</span>
          <h2 id="reviews-title" className="mt-1 text-2xl font-bold text-(--colortitulo) md:text-3xl">Experiências que ficam</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="flex h-full flex-col rounded-3xl border border-(--colorparagrafo)/15 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 text-sm tracking-widest text-(--colorsubtitulo)" aria-label="5 de 5 estrelas">★★★★★</div>
              <blockquote className="flex-1 leading-relaxed text-(--colorparagrafo)">“{review.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-(--colorparagrafo)/15 pt-4">
                <div className="font-semibold text-(--colortitulo)">{review.name}</div>
                <div className="text-sm text-(--colorparagrafo)">{review.detail}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
