import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiposAtendimento = [
  'Avaliação Inicial',
  'Urgência Odontológica',
  'Atendimento TEA / TDAH',
  'Reabilitação Oral',
  'Estética e Design do Sorriso',
  'Sedação Medicamentosa',
  'Outros',
];

const infoItems = [
  {
    icon: 'location_on',
    label: 'Endereço',
    value: 'R. das Clínicas, 240 — Jd. Paulista\nSão Paulo – SP, 01310-100',
  },
  {
    icon: 'schedule',
    label: 'Horário',
    value: 'Seg–Sex: 8h às 18h\nSáb: 8h às 13h (com agendamento)',
  },
  {
    icon: 'mail',
    label: 'E-mail',
    value: 'contato@drapatriciagarzon.com.br',
  },
];

const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_MSG = encodeURIComponent(
  'Olá, Dra. Patrícia! Gostaria de agendar uma consulta.'
);

export default function ContatoSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [form, setForm] = useState({
    nome: '', telefone: '', email: '', tipo: '', mensagem: '',
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
      gsap.from(rightRef.current, {
        y: 40, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Simula envio
    setSent(true);
  };

  const inputClass =
    'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 font-manrope text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-colors duration-200';

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="mb-section-gap scroll-mt-24"
    >
      {/* Header */}
      <div className="mb-12">
        <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">
          Fale Conosco
        </p>
        <h2 className="font-manrope font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-tight text-slate-900">
          Agende sua consulta
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
        {/* Form */}
        <div ref={leftRef} className="bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm">
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-manrope text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Nome</label>
                  <input
                    name="nome" value={form.nome} onChange={handleChange}
                    placeholder="Seu nome completo" required className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-manrope text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Telefone</label>
                  <input
                    name="telefone" value={form.telefone} onChange={handleChange}
                    placeholder="(11) 99999-9999" className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="font-manrope text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">E-mail</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="seu@email.com" required className={inputClass}
                />
              </div>

              <div>
                <label className="font-manrope text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Tipo de Atendimento</label>
                <select
                  name="tipo" value={form.tipo} onChange={handleChange}
                  required className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>Selecione uma opção</option>
                  {tiposAtendimento.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-manrope text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Mensagem</label>
                <textarea
                  name="mensagem" value={form.mensagem} onChange={handleChange}
                  placeholder="Conte um pouco sobre o que você precisa…"
                  rows={4} className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-manrope font-semibold px-8 py-4 rounded-full hover:bg-[#004d99] transition-colors duration-300 shadow-md shadow-primary/20 text-sm mt-2 self-start"
              >
                Enviar Mensagem →
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <h3 className="font-manrope font-bold text-2xl text-slate-900">Mensagem enviada!</h3>
              <p className="font-manrope text-slate-500 text-sm max-w-xs">
                Entraremos em contato em até 24h úteis. Obrigada pela confiança.
              </p>
            </div>
          )}
        </div>

        {/* Right panel */}
        <div ref={rightRef} className="flex flex-col gap-5">
          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 bg-[#25D366] text-white rounded-2xl p-7 hover:bg-[#1eb858] transition-colors duration-300 shadow-lg shadow-green-500/20"
          >
            <svg className="w-10 h-10 shrink-0 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <div>
              <p className="font-manrope font-bold text-lg leading-tight">WhatsApp</p>
              <p className="font-manrope text-white/80 text-sm mt-0.5">Resposta rápida — em média 15 min</p>
            </div>
            <span className="ml-auto material-symbols-outlined text-white/60 group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </a>

          {/* Info cards */}
          {infoItems.map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="font-manrope text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="font-manrope text-sm text-slate-700 leading-relaxed whitespace-pre-line">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
