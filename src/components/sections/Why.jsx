"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function Why() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const items = [
    {
      title: 'Tecnología de Punta',
      desc: 'Escáner intraoral 3D, diseño digital de sonrisa, equipos de última generación para diagnósticos precisos.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    },
    {
      title: 'Especialista Certificado',
      desc: 'El Dr. Sancho posee certificaciones internacionales en odontología estética y más de una década de casos exitosos.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 6v6l4 2"/></svg>
    },
    {
      title: 'Trato Personalizado',
      desc: 'Cada paciente recibe un plan de tratamiento único. Tu comodidad y satisfacción son nuestra máxima prioridad.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    },
    {
      title: 'Resultados Garantizados',
      desc: 'Garantizamos la calidad de nuestros tratamientos. Tu sonrisa es nuestra firma y nos comprometemos.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
    }
  ];

  return (
    <section id="why" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag">Nuestra Diferencia</p>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-4 text-obsidian">
            ¿Por qué <em className="text-gold not-italic">Good Doctor?</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="why-card text-center p-8 rounded-sm bg-white border border-gold/10 hover:shadow-xl transition-shadow group" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-gold/15 to-gold-light/10 border border-gold/25 text-gold group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-obsidian">{item.title}</h3>
              <p className="text-graphite/70 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
