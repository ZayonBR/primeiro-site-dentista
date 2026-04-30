import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Especialidades', to: '/especialidades' },
  { label: 'Inclusão TEA', to: '/inclusao-tea' },
  { label: 'Contato', to: '/contato' },
];

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'top-0' : 'top-6'}`}>
        <div className={`flex justify-between items-center px-6 md:px-8 py-3.5 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-2xl border-b border-slate-100/80 shadow-sm max-w-full rounded-none'
            : 'bg-white/75 backdrop-blur-xl rounded-full border border-white/30 shadow-[0_20px_60px_rgba(0,91,179,0.1)] max-w-5xl mx-6'
        }`}>

          {/* Logo */}
          <Link
            to="/"
            className="font-manrope font-semibold tracking-tight text-lg text-slate-900 no-underline"
          >
            Dra. Patrícia Garzon
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-manrope font-medium text-sm tracking-wide transition-colors duration-300 no-underline ${
                  isActive(item.to)
                    ? 'text-primary font-semibold'
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contato CTA (desktop) */}
          <div className="flex items-center gap-3">
            <Link
              to="/contato"
              className="hidden md:flex items-center gap-2 bg-primary text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#004d99] transition-colors duration-300 shadow-md shadow-primary/20 no-underline"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              IA responde agora
            </Link>

            {/* Hamburger */}
            <button
              className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className={`block w-5 h-[1.5px] bg-slate-900 origin-center transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-slate-900 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-slate-900 origin-center transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-manrope font-bold text-4xl no-underline transition-colors duration-300 ${
                isActive(item.to) ? 'text-primary' : 'text-slate-900 hover:text-primary'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contato"
          className="mt-12 flex items-center gap-2 bg-primary text-white font-manrope font-semibold px-10 py-4 rounded-full hover:bg-[#004d99] transition-colors duration-300 text-base shadow-lg shadow-primary/20 no-underline"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          IA responde agora
        </Link>
      </div>
    </>
  );
}
