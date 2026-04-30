import React from 'react';
import InclusaoTEASection from '../components/InclusaoTEASection';

export default function InclusaoTEAPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page hero */}
      <div className="pt-8 pb-0">
        <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">
          Protocolo Neurodivergente
        </p>
        <h1 className="font-manrope font-extrabold text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-tight text-slate-900 mb-6 max-w-3xl">
          A clínica que se adapta ao paciente — não o contrário.
        </h1>
        <p className="font-manrope text-slate-500 text-lg leading-relaxed max-w-2xl mb-16">
          Pacientes com TEA, TDAH, fobia odontológica ou hipersensibilidade sensorial merecem uma cadeira que respeite quem eles são. Este é o nosso compromisso.
        </p>
        <div className="h-px bg-slate-200 w-full mb-16" />
      </div>
      <InclusaoTEASection standalone />
    </div>
  );
}
