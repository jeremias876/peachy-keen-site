import { createFileRoute } from "@tanstack/react-router";
import peachHero from "@/assets/peach-hero.jpg";
import peachHoney from "@/assets/peach-honey.jpg";
import peachBasket from "@/assets/peach-basket.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pêche — La esencia del durazno" },
      {
        name: "description",
        content:
          "Explora la esencia del durazno: una fruta que captura la luz del verano en su piel aterciopelada y su aroma dulce.",
      },
      { property: "og:title", content: "Pêche — La esencia del durazno" },
      {
        property: "og:description",
        content: "Una landing editorial dedicada al durazno: temporada, variedades y origen.",
      },
      { property: "og:image", content: peachHero },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-peach-wash text-peach-ink font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-8 md:px-12">
        <span className="font-serif italic text-2xl tracking-tight">Pêche</span>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
          <a href="#temporada" className="hover:text-peach-deep transition-colors">
            Temporada
          </a>
          <a href="#variedades" className="hover:text-peach-deep transition-colors">
            Variedades
          </a>
          <a href="#origen" className="hover:text-peach-deep transition-colors">
            Origen
          </a>
        </div>
        <button className="border border-peach-ink/20 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-peach-ink hover:text-peach-wash transition-all">
          Catálogo
        </button>
      </nav>

      {/* Hero */}
      <main className="px-6 md:px-12 pt-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h1 className="font-serif text-7xl md:text-9xl leading-[0.9] mb-8">
              El sol
              <br />
              <span className="italic">encarnado.</span>
            </h1>
            <p className="max-w-md text-lg md:text-xl text-peach-ink/80 leading-relaxed">
              Explora la esencia del durazno: una fruta que captura la luz del verano en su piel
              aterciopelada y su aroma dulce.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-20 bg-peach-ink/30" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Cosecha de Agosto
              </span>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <img
              src={peachHero}
              alt="Durazno maduro sobre una mesa de mármol"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover rounded-t-full outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-peach-leaf p-8 rounded-full text-peach-wash text-center w-32 h-32 flex flex-col justify-center leading-none">
              <span className="text-2xl font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-tighter">Orgánico</span>
            </div>
          </div>
        </div>
      </main>

      {/* Propiedades */}
      <section id="temporada" className="bg-peach-primary/10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 italic">
            Propiedades que enamoran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                n: "01",
                t: "Textura Sutil",
                d: "Una piel delicada que protege la pulpa más jugosa y firme de la estación.",
              },
              {
                n: "02",
                t: "Aroma Estival",
                d: "Fragancia natural que evoca tardes de campo y frescura inmediata.",
              },
              {
                n: "03",
                t: "Dulzura Pura",
                d: "Equilibrio perfecto entre acidez mínima y azúcares naturales.",
              },
            ].map((item) => (
              <div key={item.n} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-peach-ink/20 flex items-center justify-center mb-6">
                  <span className="text-sm italic font-serif">{item.n}</span>
                </div>
                <h3 className="uppercase text-xs font-bold tracking-widest mb-4">{item.t}</h3>
                <p className="text-sm leading-relaxed text-peach-ink/70">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual grid */}
      <section id="variedades" className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <img
              src={peachHoney}
              alt="Duraznos en rebanadas con miel"
              loading="lazy"
              width={1216}
              height={800}
              className="w-full aspect-video object-cover rounded-2xl outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="pr-12">
              <h4 className="font-serif text-3xl mb-4 italic">Tradición de Huerto</h4>
              <p className="text-peach-ink/70">
                Nuestros duraznos son seleccionados a mano, respetando el ciclo natural de
                maduración en el árbol.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <img
              src={peachBasket}
              alt="Cesta de duraznos recién cosechados en un huerto"
              loading="lazy"
              width={1024}
              height={1216}
              className="w-full aspect-[3/4] object-cover rounded-2xl outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="origen"
        className="border-t border-peach-ink/10 py-16 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-serif text-xl italic">Cultivando lo extraordinario.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-peach-deep">
              Instagram
            </a>
            <a href="#" className="hover:text-peach-deep">
              Journal
            </a>
            <a href="#" className="hover:text-peach-deep">
              Contacto
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-50">
            © 2026 Pêche Boutique
          </p>
        </div>
      </footer>
    </div>
  );
}
