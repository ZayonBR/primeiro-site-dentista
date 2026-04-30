import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Visita de Apresentação',
    desc: 'Antes de qualquer procedimento, o paciente conhece o ambiente, os profissionais e os equipamentos — sem intervenção, sem pressão.',
  },
  {
    num: '02',
    title: 'Adaptação Sensorial',
    desc: 'Redução de estímulos luminosos e sonoros. Objetos de transição, fones com som preferido do paciente e cadência sem pressa.',
  },
  {
    num: '03',
    title: 'Comunicação Visual',
    desc: 'Histórias sociais e roteiros em imagem preparam o paciente para cada etapa. Nenhuma surpresa. Nenhum movimento inesperado.',
  },
  {
    num: '04',
    title: 'Equipe Capacitada',
    desc: 'Todos os profissionais têm formação continuada em neurodiversidade. Não é sensibilidade — é protocolo.',
  },
];

const stats = [
  { value: '1 em 36', label: 'crianças tem TEA no Brasil' },
  { value: '72%', label: 'evitam o dentista por falta de preparo das clínicas' },
  { value: '100%', label: 'dos atendimentos adaptados ao ritmo do paciente' },
];

export default function InclusaoTEASection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
      gsap.from(rightRef.current.children, {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inclusao-tea"
      ref={sectionRef}
      className="mb-section-gap bg-[#0D1C2E] rounded-3xl overflow-hidden scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — Manifesto */}
        <div ref={leftRef} className="p-10 md:p-16 flex flex-col justify-between gap-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-manrope text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Inclusão Neurodivergente
            </span>
            <h2 className="font-manrope font-extrabold text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-tight text-white mb-6">
              Seu filho merece uma cadeira de dentista que respeita quem ele é.
            </h2>
            <p className="font-manrope text-slate-400 text-base leading-relaxed max-w-md">
              Pacientes com TEA, TDAH e hipersensibilidade sensorial não precisam "se adaptar" à clínica. A clínica se adapta a eles. Desenvolvemos um protocolo que começa antes do primeiro procedimento e nunca termina.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="font-manrope font-extrabold text-3xl text-primary leading-none mb-1">
                  {s.value}
                </p>
                <p className="font-manrope text-xs text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Protocol Steps */}
        <div
          ref={rightRef}
          className="bg-white/[0.04] border-l border-white/[0.06] p-10 md:p-16 flex flex-col gap-8"
        >
          <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-2">
            Protocolo de Atendimento
          </p>
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex flex-col items-center gap-1 shrink-0">
                <span className="w-8 h-8 rounded-full border border-primary/40 text-primary font-manrope font-bold text-xs flex items-center justify-center">
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <span className="w-px flex-1 bg-white/10 min-h-[2rem]" />
                )}
              </div>
              <div className="pb-2">
                <h4 className="font-manrope font-bold text-white text-base mb-1 leading-snug">
                  {step.title}
                </h4>
                <p className="font-manrope text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-8 border-t border-white/10">
            <a href="/Contato">
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto bg-primary text-white font-manrope font-semibold px-8 py-4 rounded-full hover:bg-[#004d99] transition-colors duration-300 shadow-lg shadow-primary/20 text-sm"
            >
              Agendar Consulta Adaptada →
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
