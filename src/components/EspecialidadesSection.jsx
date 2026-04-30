import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    num: '01',
    name: 'Endodontia com Microscopia',
    tag: 'Precisão Cirúrgica',
    desc: 'Canal tratado sob magnificação 20x. Cada milímetro visto, cada canal limpo com exatidão que olho nu não alcança.',
    icon: 'biotech',
  },
  {
    num: '02',
    name: 'Reabilitação Oral Completa',
    tag: 'Transformação Total',
    desc: 'De implantes unitários a arcadas inteiras. Planejamento protético digital, com resultado aprovado por você antes do procedimento.',
    icon: 'healing',
  },
  {
    num: '03',
    name: 'Design do Sorriso',
    tag: 'Estética Avançada',
    desc: 'Facetas, clareamento e harmonização com simulação digital prévia. Nenhuma surpresa — você aprova antes de qualquer passo.',
    icon: 'auto_awesome',
  },
  {
    num: '04',
    name: 'Odontopediatria Humanizada',
    tag: 'Primeira Infância',
    desc: 'Protocolos lúdicos que transformam a cadeira odontológica em lugar de confiança. Construído para durar a vida inteira.',
    icon: 'child_care',
  },
  {
    num: '05',
    name: 'Sedação e Controle de Ansiedade',
    tag: 'Fobia e Bem-Estar',
    desc: 'Para quem teme o dentista: sedação segura que permite tratamentos extensos sem memória de desconforto, sem pressão.',
    icon: 'spa',
  },
  {
    num: '06',
    name: 'Atendimento TEA & TDAH',
    tag: 'Neurodivergência',
    desc: 'Protocolo sensorial exclusivo. Visita de adaptação, comunicação alternativa, sem surpresas. A clínica que respeita quem você é.',
    icon: 'diversity_1',
  },
];

export default function EspecialidadesSection({ hideSectionHeader = false }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.from(rowsRef.current, {
        x: -30, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.07,
        clearProps: 'all',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="especialidades" ref={sectionRef} className="mb-section-gap scroll-mt-24">
      {/* Header — oculto quando usado em página dedicada */}
      {!hideSectionHeader && (
        <div ref={headerRef} className="flex items-end justify-between pb-8 mb-4 border-b-2 border-slate-900">
          <div>
            <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">
              Expertise Clínica
            </p>
            <h2 className="font-manrope font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-tight text-slate-900">
              Especialidades
            </h2>
          </div>
          <span className="font-manrope text-xs text-slate-400 tracking-widest hidden md:block mb-1">
            {specialties.length.toString().padStart(2, '0')} áreas de atuação
          </span>
        </div>
      )}

      {/* List */}
      <div className="flex flex-col divide-y divide-slate-100">
        {specialties.map((spec, idx) => (
          <div
            key={idx}
            ref={el => (rowsRef.current[idx] = el)}
            className="group py-6 md:py-7 grid grid-cols-[2.5rem_1fr] md:grid-cols-[3rem_1fr_auto_2rem] items-start gap-x-5 md:gap-x-8 cursor-default transition-all duration-300 hover:pl-2 rounded-lg"
          >
            {/* Number */}
            <span className="font-manrope text-xs font-bold text-slate-300 tracking-widest pt-1.5">
              {spec.num}
            </span>

            {/* Content */}
            <div>
              <h3 className="font-manrope font-bold text-xl md:text-2xl text-slate-900 group-hover:text-primary transition-colors duration-300 leading-snug">
                {spec.name}
              </h3>
              <p className="font-manrope text-sm text-slate-500 leading-relaxed mt-2 max-w-2xl">
                {spec.desc}
              </p>
              <span className="inline-flex items-center mt-3 md:hidden px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                {spec.tag}
              </span>
            </div>

            {/* Tag — desktop hover */}
            <span className="hidden md:inline-flex items-center self-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {spec.tag}
            </span>

            {/* Icon */}
            <span
              className="hidden md:block material-symbols-outlined text-slate-200 group-hover:text-primary/50 transition-colors duration-300 self-center text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {spec.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
