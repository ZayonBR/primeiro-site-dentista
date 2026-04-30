import React from 'react';

export default function ServicesGrid() {
  const services = [
    {
      icon: "medical_services",
      title: "Endodontia Especializada",
      desc: "Tratamentos de canal de alta precisão com microscopia, garantindo resolução rápida e indolor."
    },
    {
      icon: "shield",
      title: "Odontologia Preventiva",
      desc: "Protocolos rigorosos de profilaxia e manutenção para garantir saúde a longo prazo e evitar intervenções complexas."
    },
    {
      icon: "family_restroom",
      title: "Atendimento Multigeracional",
      desc: "Cuidado abrangente adaptado para todas as idades, desde a odontopediatria até a reabilitação geriátrica."
    },
    {
      icon: "school",
      title: "Consultoria de Higiene Bucal",
      desc: "Educação personalizada sobre técnicas e produtos para a manutenção da saúde bucal em casa."
    }
  ];

  return (
    <section className="mb-section-gap">
      <h2 className="font-h2 text-h2 mb-stack-lg text-on-background">Especialidades Clínicas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
        {services.map((svc, idx) => (
          <div key={idx} className="bg-surface-container-low p-8 rounded-lg flex items-start gap-4">
            <span className="material-symbols-outlined text-tertiary text-2xl mt-1">{svc.icon}</span>
            <div>
              <h4 className="font-h3 text-h3 text-on-background text-xl mb-2">{svc.title}</h4>
              <p className="font-body-md text-on-surface-variant">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
