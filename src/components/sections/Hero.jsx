"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('.hero-anim-tag', { opacity: 1, y: 0, duration: 0.6 }, 0.2)
      .to('.hero-char', {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        duration: 0.5,
        ease: 'back.out(1.4)'
      }, 0.4)
      .to('.hero-anim-sub', { opacity: 1, y: 0, duration: 0.7 }, 1.2)
      .to('.hero-anim-btns',   { opacity: 1, y: 0, duration: 0.6 }, 1.5)
      .to('.hero-anim-badges', { opacity: 1, y: 0, duration: 0.6 }, 1.7)
      .to(visualRef.current, { opacity: 1, x: 0, duration: 0.8 }, 1.0)
      .to('.hero-anim-scroll', { opacity: 1, duration: 0.6 }, 2.0);

    // Parallax
    gsap.to(visualRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, []);

  const titleLines = ["Tu Sonrisa", "Perfecta", "Empieza Aquí."];

  return (
    <section ref={heroRef} id="hero" className="relative overflow-hidden min-h-screen bg-gradient-to-br from-obsidian via-[#1a1a1a] to-[#2d2d2d] flex items-center pt-24 pb-12 lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(201,168,76,0.03)_2px,rgba(201,168,76,0.03)_4px)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="section-tag mb-6 hero-anim-tag opacity-0 translate-y-[20px]">Especialistas en Carillas Dentales</p>
            <h1 className="font-serif text-white leading-none mb-6 text-[clamp(2.7rem,6vw,5.5rem)]">
              {titleLines.map((line, lineIndex) => (
                <span 
                  key={lineIndex} 
                  className={`block ${lineIndex === 1 ? 'bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent' : lineIndex === 2 ? 'text-white/90 text-[0.62em] italic' : ''}`}
                >
                  {line.split('').map((ch, i) => (
                    ch === ' ' ? <span key={i} className="inline-block w-[0.3em]"> </span> : <span key={i} className="hero-char inline-block opacity-0 translate-y-[40px]">{ch}</span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg font-light hero-anim-sub opacity-0 translate-y-[20px]">
              El <strong className="text-white font-medium">Dr. Kevin Sancho</strong> y su equipo de especialistas transforman sonrisas con carillas de porcelana premium, diseño digital y precisión milimétrica.
            </p>
            <div className="flex flex-wrap gap-4 hero-anim-btns opacity-0 translate-y-[20px]">
              <Link href="#services" className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase text-[0.8rem] px-7 py-3 rounded-sm hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.45)] transition-all group">
                 <span className="relative z-10">Conoce las Carillas</span>
                 <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 transition-all duration-500 group-hover:left-[150%]" />
              </Link>
              <Link href="#contact" className="relative overflow-hidden bg-transparent border border-gold text-gold font-semibold tracking-wider uppercase text-[0.8rem] px-7 py-3 rounded-sm hover:bg-gold hover:text-obsidian hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] hover:-translate-y-0.5 transition-all">
                 Agendar Cita
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-12 hero-anim-badges opacity-0 translate-y-[20px]">
              <div className="flex -space-x-3">
                {['M', 'L', 'A', '+'].map((initial, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#1A1A1A] bg-charcoal text-gold flex items-center justify-center text-xs font-bold ring-1 ring-gold/30">
                    {initial}
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm">Más de <span className="text-gold font-semibold">500 pacientes</span> satisfechos</p>
            </div>
          </div>

          <div ref={visualRef} className="hidden lg:flex justify-center items-center opacity-0 translate-x-[40px]">
            <div className="relative">
              <div className="w-80 h-96 rounded-lg relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] border border-gold/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,168,76,0.1)_0%,transparent_60%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
                  <svg width="120" height="140" viewBox="0 0 64 64" fill="none">
                    <path d="M32 4C22 4 14 12 14 20c0 4 1.5 7 3 10l3 18c0.5 2 2 4 4 4s3.5-2 4-4l2-10c0.5-2 1.5-2 2-2s1.5 0 2 2l2 10c0.5 2 2 4 4 4s3.5-2 4-4l3-18c1.5-3 3-6 3-10 0-8-8-16-18-16z" fill="#C9A84C"/>
                  </svg>
                </div>
                <div className="absolute top-6 left-6 right-6">
                  <div className="text-xs tracking-widest text-gold/60 uppercase mb-1">Clínica Premium</div>
                  <div className="font-serif text-white text-2xl">Dr. Kevin Sancho</div>
                  <div className="text-sm text-white/50 mt-1">Especialista en Veneers</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gold-light text-sm">★★★★★</span>
                    <span className="text-xs text-white/40">5.0 · 180 reseñas</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-gold/40 to-transparent mb-3" />
                  <div className="text-xs text-white/40">📍 Disponible esta semana</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-10 bg-white rounded-lg px-4 py-3 shadow-2xl border-l-[3px] border-gold">
                <div className="text-[0.65rem] uppercase tracking-wider text-gray-400 mb-1">Satisfacción</div>
                <div className="text-xl font-serif font-bold text-obsidian">98%</div>
              </div>
              <div className="absolute -bottom-6 -left-10 bg-white rounded-lg px-4 py-3 shadow-2xl border-l-[3px] border-gold">
                <div className="text-[0.65rem] uppercase tracking-wider text-gray-400 mb-1">Años Exp.</div>
                <div className="text-xl font-serif font-bold text-obsidian">12+</div>
              </div>
              <div className="absolute -inset-4 rounded-xl border border-gold/10 -z-10" />
              <div className="absolute -inset-8 rounded-xl border border-gold/5 -z-10" />
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-anim-scroll opacity-0">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
