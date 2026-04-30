import React from 'react';

export default function PhilosophyBanner() {
  return (
    <section className="bg-[#0D1C2E] py-section-gap px-margin-mobile text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full scale-150 transform -translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-stack-md">
        <span className="material-symbols-outlined text-primary text-5xl mb-4" style={{fontVariationSettings: "'FILL' 1"}}>vital_signs</span>
        <h2 className="font-display text-display text-white">
          Tratamento digno e seguro.<br/>
          Porque o seu conforto é a nossa <span className="text-primary">maior tecnologia.</span>
        </h2>
        <a href="/Contato">  
          <button class="mt-stack-md bg-white text-[#0D1C2E] font-button px-10 py-5 rounded-full hover:bg-surface-container transition-colors shadow-lg shadow-white/10">
            Inicie sua Jornada 
          </button>
        </a> 
      </div>
    </section>
  );
}
