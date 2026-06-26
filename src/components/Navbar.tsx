import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Inicio", id: "hero" },
  { label: "Nosotros", id: "about" },
  { label: "Productos", id: "products" },
  { label: "Contacto", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id: string) => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/90 backdrop-blur-sm border-b border-[#8B5E3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => handleNavClick("hero")} className="text-2xl font-bold tracking-tight text-[#D4A853]">
          INSIDE
        </button>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-[#FDF8F0]/80 hover:text-[#D4A853] transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-[#FDF8F0]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#8B5E3C]/20 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left py-3 text-[#FDF8F0]/80 hover:text-[#D4A853] transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
