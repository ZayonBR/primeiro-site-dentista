import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Especialidades', to: '/especialidades' },
  { label: 'Inclusão TEA', to: '/inclusao-tea' },
  { label: 'Contato', to: '/contato' },
];

// Substitua estas constantes pelos dados reais da clínica
const INSTAGRAM_URL = 'https://instagram.com/drapatriciagarzon';
const WHATSAPP_URL = 'https://wa.me/5513996777989?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.';
const PHONE = '(13) 99677-7989';
const ADDRESS_LINE1 = 'R. Joaquim Meira, 299 - Centro';
const ADDRESS_LINE2 = 'Itanhaém - SP, 11740-000';
// URL do embed do Google Maps — substitua pelo link da clínica real
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.6659263367073!2d-46.7839897!3d-24.1834463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1d56f314de893%3A0xd84da4a99c65afff!2sConsult%C3%B3rio%20Odontol%C3%B3gico%20-%20Seda%C3%A7%C3%A3o%20Consciente%20-%20Dra%20Patricia%20Garzon!5e0!3m2!1spt-BR!2sbr!4v1777587637639!5m2!1spt-BR!2sbr';

export default function Footer() {
  return (
    <footer className="bg-[#0D1C2E] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand + Socials */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div>
            <p className="font-manrope font-extrabold text-lg text-white tracking-tight">
              Dra. Patrícia Garzon
            </p>
            <p className="font-manrope text-xs text-slate-400 mt-1 leading-relaxed">
              Reabilitação Oral e Estética<br />
              Odontologia Humanizada e Inclusiva
            </p>
          </div>

          {/* Instagram */}
          {/* Instagram */}
          <a
            href="https://www.instagram.com/patricia_garzon_dentista/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group w-fit"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <div>
              <p className="font-manrope text-xs text-slate-400 leading-none">Instagram</p>
              <p className="font-manrope font-semibold text-sm text-white group-hover:text-pink-400 transition-colors duration-300">
                @drapatriciagarzon
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group w-fit"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <p className="font-manrope text-xs text-slate-400 leading-none">WhatsApp</p>
              <p className="font-manrope font-semibold text-sm text-white group-hover:text-green-400 transition-colors duration-300">
                {PHONE}
              </p>
            </div>
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
            Navegação
          </p>
          <nav className="flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="font-manrope text-sm text-slate-400 hover:text-white transition-colors duration-300 no-underline w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Atendimento */}
        <div className="flex flex-col gap-4">
          <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
            Atendimento
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-manrope text-xs text-slate-500 mb-0.5">Telefone / WhatsApp</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-sm text-white hover:text-green-400 transition-colors duration-300 no-underline"
              >
                {PHONE}
              </a>
            </div>
            <div>
              <p className="font-manrope text-xs text-slate-500 mb-0.5">E-mail</p>
              <a
                href="mailto:contato@drapatriciagarzon.com.br"
                className="font-manrope text-sm text-white hover:text-primary transition-colors duration-300 no-underline"
              >
                contato@drapatriciagarzon.com.br
              </a>
            </div>
            <div>
              <p className="font-manrope text-xs text-slate-500 mb-1">Horário de Funcionamento</p>
              <p className="font-manrope text-sm text-slate-300 leading-relaxed">
                Segunda a Sexta: 8h – 18h<br />
                Sábado: 8h – 13h<br />
                <span className="text-slate-500 text-xs">(com agendamento)</span>
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="font-manrope text-xs text-green-400 font-semibold">
                IA ativa 24/7 — responde em &lt;1 min
              </p>
            </div>
          </div>
        </div>

        {/* Localização */}
        <div className="flex flex-col gap-4">
          <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
            Localização
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-start">
              <span className="material-symbols-outlined text-slate-400 text-base mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <p className="font-manrope text-sm text-slate-300 leading-relaxed">
                {ADDRESS_LINE1}<br />{ADDRESS_LINE2}
              </p>
            </div>
            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-white/10 mt-1">
              <iframe
                title="Localização da Clínica"
                src={MAPS_EMBED_SRC}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-manrope text-xs text-slate-500">
          © {new Date().getFullYear()} Dra. Patrícia Garzon — Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-5">
          <Link to="#" className="font-manrope text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300 no-underline">Política de Privacidade</Link>
          <Link to="#" className="font-manrope text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300 no-underline">Termos de Uso</Link>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-manrope text-xs text-green-500">Sistema Ativo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
