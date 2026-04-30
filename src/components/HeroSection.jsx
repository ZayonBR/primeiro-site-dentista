import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// Importação da sua imagem
import FotoDra from "../foto da dra patricia.jpg"; 

export default function HeroSection() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(imgRef.current, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    // Fundo limpo e claro igual à segunda imagem (removido o azul escuro)
    <section className="relative min-h-screen flex items-center bg-[#FAFAFA] overflow-hidden px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Esquerdo: Textos e Botões no padrão claro */}
        <div className="space-y-6">
          
          {/* Tag superior "Sistema Operacional" */}
          <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            SISTEMA OPERACIONAL: ATIVO
          </div>

          <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight text-black">
            Odontologia <br />
            Consciente, <br />
            {/* Destaque em azul conforme a sua referência */}
            <span className="text-[#0056B3]">Humana e <br/> Inclusiva.</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Uma abordagem clínica focada no conforto absoluto, desenhada para pacientes 
            neurodivergentes, fóbicos e todos que buscam um atendimento de alta performance 
            com sensibilidade e ausência de pressa.
          </p>

          <div className="pt-4">
            <a 
              href="/contato" 
              className="inline-block bg-white text-[#0056B3] border border-gray-200 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-[1.03] shadow-sm"
            >
              Conhecer Clínica
            </a>
          </div>

          {/* Mini-cards de serviços */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white border border-gray-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm text-sm text-gray-700">
              <span className="text-[#0056B3] font-bold">⊞</span>
              Sedação Medicamentosa
            </div>
            <div className="bg-white border border-gray-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm text-sm text-gray-700">
              <span className="text-[#0056B3] font-bold">☺</span>
              Protocolo Fóbicos
            </div>
          </div>
        </div>

        {/* Lado Direito: A imagem TOTALMENTE LIMPA, sem azul atrás */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
          <img 
            ref={imgRef}
            src={FotoDra} 
            alt="Dra Patrícia Garzon" 
            // O formato orgânico (Blob) sem as divs coloridas vazando por trás
            style={{ 
              borderRadius: "63% 37% 34% 66% / 45% 42% 58% 55%" 
            }}
            className="w-full h-[500px] md:h-[600px] object-cover relative z-10 border-[8px] border-white shadow-xl" 
          />
        </div>

      </div>
    </section>
  );
}