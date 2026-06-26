import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Productos", href: "#products" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/90 backdrop-blur-sm border-b border-[#8B5E3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-[#D4A853]">
          INSIDE
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#FDF8F0]/80 hover:text-[#D4A853] transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </a>
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
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#8B5E3C]/20 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[#FDF8F0]/80 hover:text-[#D4A853] transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
