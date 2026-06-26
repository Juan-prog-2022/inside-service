import mateImg from "../assets/mate.jpg";
import bag1Img from "../assets/bag1.jpg";
import bag2Img from "../assets/bag2.jpg";
import bag3Img from "../assets/bag3.jpg";

const products = [
  {
    title: "Combo Matero Premium",
    description: "Mate de cuero artesanal con bombilla, termo forrado y posamates. Personalizado con grabado.",
    image: mateImg,
    category: "Combos",
  },
  {
    title: "Bolso Matero Clásico",
    description: "Bolso de cuero con compartimentos para termo, mate y accesorios. Ideal para llevar tu ritual a donde vayas.",
    image: bag1Img,
    category: "Bolsos",
  },
  {
    title: "Bolso Matero Premium",
    description: "Diseño exclusivo con cierre, bolsillos internos y correa ajustable. Cuero seleccionado.",
    image: bag2Img,
    category: "Bolsos",
  },
  {
    title: "Mate Personalizado",
    description: "Mate de cuero artesanal con grabado de nombre o diseño a elección. Único y personal.",
    image: mateImg,
    category: "Mates",
  },
  {
    title: "Set Termo + Mate",
    description: "Termo forrado en cuero a juego con tu mate personalizado. El combo perfecto.",
    image: bag3Img,
    category: "Combos",
  },
  {
    title: "Bolso Matero Viajero",
    description: "Grande, amplio y resistente. Llevá todo lo necesario para tus mates en cualquier lugar.",
    image: bag1Img,
    category: "Bolsos",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FDF8F0] mb-4">
            Nuestros Productos
          </h2>
          <p className="text-[#FDF8F0]/60 text-lg max-w-2xl mx-auto">
            Descubrí nuestra colección de combos materos y bolsos artesanales.
            Cada pieza es hecha a mano con los mejores cueros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group bg-[#2C1810] rounded-2xl overflow-hidden border border-[#8B5E3C]/20 hover:border-[#D4A853]/40 transition-all hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-[#D4A853] font-semibold">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-[#FDF8F0] mt-1 mb-2">
                  {product.title}
                </h3>
                <p className="text-[#FDF8F0]/60 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <a
                  href="https://wa.me/5491123456789?text=Hola%20quisiera%20informaci%C3%B3n%20sobre%20un%20producto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4A853] hover:text-[#C49A3E] font-semibold text-sm transition-colors"
                >
                  Consultar precio
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
