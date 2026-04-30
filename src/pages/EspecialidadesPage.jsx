import React from 'react';
import EspecialidadesSection from '../components/EspecialidadesSection';

export default function EspecialidadesPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page hero */}
      <div className="pt-8 pb-0">
        <p className="font-manrope text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">
          Clínica de Alta Performance
        </p>
        <h1 className="font-manrope font-extrabold text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-tight text-slate-900 mb-6 max-w-2xl">
          Nossa expertise a serviço da sua saúde.
        </h1>
        <p className="font-manrope text-slate-500 text-lg leading-relaxed max-w-2xl mb-16">
          Cada especialidade é tratada com o mesmo nível de rigor e atenção. Não fazemos tudo — fazemos bem o que nos comprometemos a fazer.
        </p>
        <div className="h-px bg-slate-200 w-full mb-16" />
      </div>
      <EspecialidadesSection hideSectionHeader />
    </div>
  );
}
