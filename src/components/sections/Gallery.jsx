"use client";
import { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const photos = [
    { 
      title: "8 Carillas Dentales Superiores", 
      imgB: "/antes-carillas-8.jpg", 
      imgA: "/despues-carillas-8.jpg", 
      emojiB: "😐", emojiA: "😊", 
      subB: "Antes", subA: "Después" 
    },
    { title: "Caso Blanqueamiento + Veneers", emojiB: "😬", emojiA: "🤩", subB: "Manchas severas", subA: "6 carillas de porcelana" },
    { title: "Caso Cierre de Diastema", emojiB: "😕", emojiA: "😍", subB: "Diastema (espacio)", subA: "Cierre con carillas" },
    { title: "Caso Rehabilitación Oral", emojiB: "😤", emojiA: "🥰", subB: "Dientes desgastados", subA: "Rehabilitación 10 carillas" },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 section-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag">Transformaciones Reales</p>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mt-4 text-obsidian">
            Antes &amp; <em className="text-gold not-italic">Después</em>
          </h2>
          <p className="text-graphite mt-4 max-w-lg mx-auto font-light">Resultados reales de pacientes que confiaron en el Dr. Kevin Sancho.</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 1.4 },
              1024: { slidesPerView: 1.8 }
            }}
            className="pb-16"
          >
            {photos.map((photo, i) => (
              <SwiperSlide key={i}>
                <div className="ba-card flex rounded border border-gold/10 overflow-hidden">
                  <div className="flex-1 min-h-[250px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#2D2D2D] to-[#3D3D3D]">
                    <span className="absolute z-10 top-3 left-3 text-[0.65rem] tracking-widest uppercase font-bold px-2.5 py-1 rounded bg-obsidian/80 text-white/70">Antes</span>
                    {photo.imgB ? (
                      <Image src={photo.imgB} alt="Antes" fill className="object-cover opacity-90" />
                    ) : (
                      <>
                        <div className="text-5xl mb-3 relative z-10">{photo.emojiB}</div>
                        <p className="text-white/40 text-xs px-4 text-center relative z-10">{photo.subB}</p>
                      </>
                    )}
                  </div>
                  <div className="w-1 bg-gold relative z-20" />
                  <div className="flex-1 min-h-[250px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]">
                    <span className="absolute z-10 top-3 left-3 text-[0.65rem] tracking-widest uppercase font-bold px-2.5 py-1 rounded bg-gold/90 text-obsidian">Después</span>
                    {photo.imgA ? (
                      <Image src={photo.imgA} alt="Después" fill className="object-cover" />
                    ) : (
                      <>
                        <div className="text-5xl mb-3 relative z-10">{photo.emojiA}</div>
                        <p className="text-white/60 text-xs px-4 text-center relative z-10">{photo.subA}</p>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-center mt-4 text-sm text-graphite/60 font-medium font-serif italic">{photo.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
