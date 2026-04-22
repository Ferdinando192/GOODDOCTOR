"use client";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

export default function Process() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    { title: 'Consulta Inicial', desc: 'Revisamos tu sonrisa, tomamos fotografías y escáner 3D. Resolvemos todas tus dudas.' },
    { title: 'Diseño de Sonrisa', desc: 'Usando software DSD creamos una simulación digital de tu sonrisa futura para aprobación.' },
    { title: 'Preparación', desc: 'Preparación mínimamente invasiva. Colocación de carillas provisionales.' },
    { title: 'Resultado Final', desc: 'Cementado definitivo de las carillas de porcelana. ¡Tu nueva sonrisa lista para brillar!' }
  ];

  return (
    <section id="process" className="section-dark py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag">Cómo Funciona</p>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-4">
            Proceso de <em className="text-gold not-italic">Carillas</em>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto font-light">Cuatro pasos hacia la sonrisa que siempre soñaste, con la guía experta del Dr. Kevin Sancho en cada etapa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="timeline-step text-center" data-aos="fade-right" data-aos-delay={idx * 100}>
               <div className="timeline-connector hidden md:block" />
               <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center text-gold font-serif font-bold text-lg relative z-10 bg-gold/10 border-2 border-gold">
                 0{idx + 1}
               </div>
               <h3 className="font-serif text-lg font-bold text-white mb-3">{step.title}</h3>
               <p className="text-white/50 text-sm leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14" data-aos="fade-up" data-aos-delay="400">
          <Link href="#contact" className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase text-[0.8rem] px-7 py-3 rounded-sm inline-block group hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] transition-all">
             <span className="relative z-10">Comenzar Mi Transformación</span>
             <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 transition-all duration-500 group-hover:left-[150%]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
