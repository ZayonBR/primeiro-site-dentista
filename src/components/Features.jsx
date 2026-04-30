import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: "spa",
      title: "Sedação Consciente",
      desc: "Protocolos seguros para garantir que o seu tratamento aconteça em um estado de tranquilidade absoluta, livre de ansiedade."
    },
    {
      icon: "diversity_1",
      title: "Inclusão TEA",
      desc: "Ambiente lúdico e sensorialmente adaptado, com profissionais especializados em criar uma jornada confortável para pacientes neurodivergentes."
    },
    {
      icon: "favorite",
      title: "Odontologia do Afeto",
      desc: "Atendimento sem pressa, escuta ativa e planejamento individualizado. O tempo do paciente dita o ritmo do cuidado."
    }
  ];

  return (
    <section ref={containerRef} className="mb-section-gap">
      <h2 className="font-h2 text-h2 text-center mb-stack-lg text-on-background">
        Pilares do <span className="text-primary">Cuidado Integrativo</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            ref={el => cardsRef.current[idx] = el}
            className="bg-white p-10 rounded-xl glow-shadow border border-surface-container flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>{card.icon}</span>
            </div>
            <div>
              <h3 className="font-h3 text-h3 text-on-background mb-2">{card.title}</h3>
              <p className="font-body-md text-on-surface-variant">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
