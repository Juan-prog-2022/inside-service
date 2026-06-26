import workshopImg from "../assets/workshop.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FDF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
              Hecho a Mano con <span className="text-[#8B5E3C]">Pasión</span>
            </h2>
            <p className="text-[#5C3D2E]/80 text-lg leading-relaxed mb-4">
              En <strong className="text-[#5C3D2E]">Inside</strong> creamos combos materos y bolsos
              personalizados de cuero artesanal. Cada pieza es única, diseñada y elaborada
              a mano con los mejores materiales.
            </p>
            <p className="text-[#5C3D2E]/80 text-lg leading-relaxed mb-6">
              Nuestro compromiso es ofrecerte productos que reflejen tu estilo y
              personalidad. Desde mates personalizados hasta bolsos exclusivos,
              cada detalle cuenta.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#D4A853]">100%</div>
                <div className="text-xs sm:text-sm text-[#5C3D2E]/60 uppercase tracking-wider">Cuero Artesanal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#D4A853]">Hecho</div>
                <div className="text-xs sm:text-sm text-[#5C3D2E]/60 uppercase tracking-wider">A Mano</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#D4A853]">Único</div>
                <div className="text-xs sm:text-sm text-[#5C3D2E]/60 uppercase tracking-wider">Para Vos</div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={workshopImg}
              alt="Taller artesanal de cuero"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
