import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--colorbotao) text-white">
      <div className="container mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-wide">Veloura</Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">Uma curadoria de peças atemporais, materiais nobres e design essencial para acompanhar você por muito tempo.</p>
        </div>
        <div>
          <h2 className="font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><Link className="transition-colors hover:text-white" href="/#categorias">Categorias</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/#destaques">Coleção especial</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/#ofertas">Ofertas</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Sua conta</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><Link className="transition-colors hover:text-white" href="/login">Entrar</Link></li>
            <li><Link className="transition-colors hover:text-white" href="/cadastro">Criar conta</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15 px-6 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} Veloura. Todos os direitos reservados.</div>
    </footer>
  );
}
