"use client";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: 'Blanqueamiento Dental',
      desc: 'Tecnología LED de última generación para hasta 8 tonos más blancos en una sola sesión. Resultados inmediatos y duraderos.',
      delay: 100
    },
    {
      title: 'Ortodoncia',
      desc: 'Alineadores invisibles y brackets estéticos de alta precisión para corregir la posición de tus dientes de forma discreta y cómoda.',
      delay: 150
    },
    {
      title: 'Limpieza Profesional',
      desc: 'Profilaxis dental ultrasónica profunda que elimina sarro, manchas y bacterias, dejando tus dientes radiantes y tu boca saludable.',
      delay: 200
    },
    {
      title: 'Implantes Dentales',
      desc: 'Solución permanente y natural para dientes perdidos. Implantes de titanio de alta calidad con resultados estéticos excepcionales.',
      delay: 250
    },
    {
      title: 'Urgencias Dentales',
      desc: 'Atención prioritaria para emergencias dentales. Dolor agudo, fracturas, pérdida de piezas — respondemos dentro de las 24 horas.',
      delay: 300
    }
  ];

  return (
    <section id="services" className="section-pearl py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag">Lo Que Ofrecemos</p>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-4 leading-tight text-obsidian">
            Nuestros <em className="text-gold not-italic">Servicios</em>
          </h2>
          <p className="text-graphite mt-4 max-w-lg mx-auto font-light">
            Desde carillas de porcelana premium hasta limpiezas profesionales, te ofrecemos la experiencia dental más exclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="service-card featured lg:col-span-2 p-8 flex flex-col md:flex-row gap-8 items-center section-dark rounded-xl border border-gold/20 shadow-2xl" data-aos="fade-up" data-aos-delay="0">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gold/15 border border-gold/30">
                <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                  <path d="M32 4C22 4 14 12 14 20c0 4 1.5 7 3 10l3 18c0.5 2 2 4 4 4s3.5-2 4-4l2-10c0.5-2 1.5-2 2-2s1.5 0 2 2l2 10c0.5 2 2 4 4 4s3.5-2 4-4l3-18c1.5-3 3-6 3-10 0-8-8-16-18-16z" fill="#C9A84C"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-serif text-2xl font-bold text-white">Carillas Dentales</h3>
                <span className="px-2 py-1 text-[0.65rem] font-bold tracking-widest uppercase rounded bg-gold/20 border border-gold/40 text-gold">
                  Estrella
                </span>
              </div>
              <p className="text-white/60 leading-relaxed mb-5 font-light text-sm md:text-base">
                Transformación completa de tu sonrisa con carillas de porcelana ultra-delgadas, diseñadas digitalmente para lograr resultados naturales y duraderos. Nuestra especialidad máxima.
              </p>
              <Link href="#contact" className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase text-xs px-6 py-2.5 rounded-sm inline-block transition-transform hover:-translate-y-0.5 group">
                <span className="relative z-10">Agendar Consulta &rarr;</span>
                <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 transition-all duration-500 group-hover:left-[150%]" />
              </Link>
            </div>
          </div>

          {services.map((srv, idx) => (
            <div key={idx} className="service-card p-7" data-aos="fade-up" data-aos-delay={srv.delay}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-gold/10 border border-gold/20 text-gold">
                {idx === 0 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>}
                {idx === 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M7 8V6a2 2 0 014 0v2"/><path d="M13 8V6a2 2 0 014 0v2"/><line x1="8" y1="13" x2="16" y2="13"/></svg>}
                {idx === 2 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><path d="M12 8v4l3 3"/></svg>}
                {idx === 3 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L12 10M12 10C10 10 8 12 8 14S9 18 12 18S16 16 16 14S14 10 12 10Z"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg>}
                {idx === 4 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-obsidian">{srv.title}</h3>
              <p className="text-graphite/70 text-sm leading-relaxed mb-5 font-light">{srv.desc}</p>
              <Link href="#contact" className="text-[0.7rem] font-semibold tracking-widest uppercase text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-colors inline-block cursor-none">
                Saber más &rarr;
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
