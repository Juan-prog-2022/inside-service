import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A853] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5E3C] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-8xl sm:text-9xl font-bold text-[#D4A853] mb-4 tracking-tight">
          404
        </h1>
        <p className="text-2xl sm:text-3xl text-[#FDF8F0] font-light mb-2">
          Página no encontrada
        </p>
        <p className="text-base sm:text-lg text-[#FDF8F0]/50 mb-10 max-w-md mx-auto">
          La página que buscas no existe o fue movida.
          Volvé al inicio para seguir explorando nuestros productos.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 bg-[#D4A853] hover:bg-[#C49A3E] text-[#1A1A1A] font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
