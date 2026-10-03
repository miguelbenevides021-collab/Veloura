import Hero from "@/sections/hero/hero";
import Marquee from "@/sections/maquee/maquee";
import Categorias from "@/sections/categorias/categorias";
import Destaques from "@/sections/(produtos)/destaques/destaques";
import Navbar from "@/sections/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import Promocao from "@/sections/promocao/promocao";
import Depoimentos from "@/sections/depoimentos/depoimentos";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Categorias />
      <Destaques />
      <Promocao />
      <Depoimentos />
      <Footer />
    </div>
  );
}
