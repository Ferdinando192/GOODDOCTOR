"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const counters = containerRef.current.querySelectorAll('.stat-number');
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      const suffix = el.getAttribute('data-suffix');
      const obj = { val: 0 };
      
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + suffix;
            }
          });
        }
      });
    });

    gsap.fromTo('.stat-item', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true }}
    );
  }, []);

  return (
    <section ref={containerRef} id="stats" className="section-dark py-16 lg:py-20 relative z-10 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gold/20">
          {[
            { t: 500, s: '+', l: 'Pacientes Felices' },
            { t: 12, s: '+', l: 'Años de Experiencia', lgPl: true },
            { t: 320, s: '+', l: 'Casos de Carillas', lgPl: true },
            { t: 98, s: '%', l: 'Satisfacción', lgPl: true },
          ].map((stat, i) => (
            <div key={i} className={`stat-item text-center ${stat.lgPl ? 'lg:pl-8' : ''} opacity-0`}>
              <div 
                className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent stat-number" 
                data-target={stat.t} 
                data-suffix={stat.s}
              >0</div>
              <div className="text-white/50 text-xs mt-2 tracking-widest uppercase">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
