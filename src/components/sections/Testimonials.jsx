"use client";
import { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    { name: "María García", role: "Diseñadora Gráfica", text: "Llevo años soñando con tener una sonrisa perfecta y el Dr. Sancho lo hizo realidad. Las carillas se ven absolutamente naturales.", tx: "Carillas de Porcelana" },
    { name: "Andrés Méndez", role: "Ejecutivo", text: "Vine buscando blanqueamiento y salí con un plan completo que superó mis expectativas. Totalmente recomendado.", tx: "Blanqueamiento + 6 Veneers" },
    { name: "Laura Rodríguez", role: "Abogada", text: "La atención es de otro nivel. El Dr. Kevin me explicó todo y los resultados son espectaculares. El espacio parece un spa.", tx: "Cierre de Diastema" },
    { name: "Carmen Vargas", role: "Empresaria", text: "Me hicieron 10 carillas y el resultado es simplemente magistral. Volví 15 años en el tiempo con mi sonrisa.", tx: "Rehabilitación Oral Completa" },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag">Voces de Nuestros Pacientes</p>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-4 text-obsidian">
            Lo Que <em className="text-gold not-italic">Dicen</em>
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {testimonials.map((test, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card h-full rounded border border-gold/10 bg-white p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-serif flex-shrink-0 bg-gradient-to-br from-gold to-gold-light text-obsidian">
                      {test.name.split(' ').map(n=>n[0]).join('').substring(0,2)}
                    </div>
                    <div>
                      <p className="font-semibold text-obsidian">{test.name}</p>
                      <p className="text-xs text-graphite/60">{test.role}</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-gold text-sm">★★★★★</span>
                    </div>
                  </div>
                  <p className="text-graphite/70 leading-relaxed font-light italic">"{test.text}"</p>
                  <div className="mt-4 pt-4 border-t border-gold/10">
                    <p className="text-[0.65rem] text-graphite/50 uppercase tracking-widest">{test.tx}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
