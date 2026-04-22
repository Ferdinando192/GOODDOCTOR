"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex justify-center" data-aos="fade-right">
            <div className="relative">
              <div className="doctor-avatar mx-auto">
                <div className="relative z-10 text-center">
                  <div className="w-40 h-40 rounded-full mx-auto mb-5 relative overflow-hidden border-4 border-gold/40 shadow-[0_8px_30px_rgba(201,168,76,0.2)] bg-gradient-to-br from-gold/20 to-gold-light/20">
                    <Image 
                      src="/dr-kevin.jpg" 
                      alt="Dr. Kevin Sancho" 
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <p className="font-serif text-obsidian font-bold text-[1.1rem]">Dr. Kevin Sancho</p>
                  <p className="text-sm mt-1 text-gold-dark font-medium">Especialista en Veneers</p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold" />
            </div>
          </div>

          <div data-aos="fade-left">
            <p className="section-tag">Sobre el Especialista</p>
            <span className="gold-line left" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mt-4 mb-6 text-obsidian">
              Dr. Kevin <br/>
              <em className="font-semibold text-gold not-italic">Sancho</em>
            </h2>
            <p className="text-graphite text-lg leading-relaxed mb-6 font-light">
              Con más de <strong className="text-obsidian font-medium">12 años de experiencia</strong> en odontología estética, el Dr. Kevin Sancho se ha posicionado como uno de los referentes más destacados en el diseño de sonrisas y carillas de porcelana en la región.
            </p>
            <p className="text-graphite/80 leading-relaxed mb-8 font-light">
              Su filosofía se basa en combinar arte y ciencia para crear sonrisas que no solo se ven perfectas, sino que se sienten naturales. Cada tratamiento es personalizado, partiendo de la anatomía facial única de cada paciente.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Especialista Certificado', 'Diseño de Sonrisa Digital', 'Miembro AACD', 'Postgrado en Veneers'].map(badge => (
                <span key={badge} className="px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-sm bg-gold/10 border border-gold/30 text-gold-dark">
                  {badge}
                </span>
              ))}
            </div>

            <Link href="#contact" className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase text-[0.8rem] px-7 py-3 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.45)] transition-all inline-block group">
               <span className="relative z-10">Consulta con el Dr. Sancho</span>
               <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 transition-all duration-500 group-hover:left-[150%]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
