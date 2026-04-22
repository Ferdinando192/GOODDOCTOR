"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import gsap from "gsap";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      gsap.fromTo('#form-success',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)' }
      );
    }, 1500);
  };

  return (
    <section id="contact" className="section-dark py-24 lg:py-32 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-tag">Da el Primer Paso</p>
          <span className="gold-line" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-4">
            Agenda Tu <em className="text-gold not-italic">Cita</em>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto font-light">Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            {status !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-white/50 mb-2" htmlFor="name">Nombre Completo</label>
                    <input id="name" type="text" className="w-full bg-white/5 border border-gold/15 px-4 py-3.5 text-white rounded-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10 placeholder:text-white/20" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-white/50 mb-2" htmlFor="phone">Teléfono</label>
                    <input id="phone" type="tel" className="w-full bg-white/5 border border-gold/15 px-4 py-3.5 text-white rounded-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10 placeholder:text-white/20" placeholder="+506 0000-0000" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-white/50 mb-2" htmlFor="email">Correo Electrónico</label>
                  <input id="email" type="email" className="w-full bg-white/5 border border-gold/15 px-4 py-3.5 text-white rounded-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10 placeholder:text-white/20" placeholder="tu@correo.com" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-white/50 mb-2" htmlFor="service">Servicio de Interés</label>
                  <select id="service" className="w-full bg-white/5 border border-gold/15 px-4 py-3.5 text-white rounded-sm outline-none transition-all focus:border-gold/60 focus:bg-white/10 placeholder:text-white/20" required defaultValue="">
                    <option value="" disabled>Selecciona un servicio</option>
                    <option value="carillas">Carillas Dentales</option>
                    <option value="blanqueamiento">Blanqueamiento Dental</option>
                    <option value="ortodoncia">Ortodoncia</option>
                    <option value="limpieza">Limpieza Profesional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-white/50 mb-2" htmlFor="msg">Mensaje</label>
                  <textarea id="msg" rows="4" className="form-input resize-none" placeholder="Cuéntanos sobre tu caso..."></textarea>
                </div>
                <button type="submit" disabled={status === 'loading'} className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase rounded-sm w-full py-4 text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.4)] transition-all group">
                  <span className="relative z-10">{status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}</span>
                  <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 transition-all duration-500 group-hover:left-[150%]" />
                </button>
              </form>
            ) : (
              <div id="form-success" className="p-8 rounded-sm text-center bg-gold/10 border border-gold/30">
                <div className="text-3xl mb-2 text-gold">✓</div>
                <p className="font-serif text-gold text-2xl font-bold">¡Solicitud enviada!</p>
                <p className="text-white/50 text-sm mt-2">Te contactaremos dentro de las próximas 24 horas.</p>
              </div>
            )}
          </div>

          <div data-aos="fade-left" className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Ubicación</p>
                <p className="text-white font-medium">Cartago, en mi corazon</p>
                <p className="text-white/50 text-sm">San José, Costa Rica</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" /></svg>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Teléfono</p>
                <p className="text-white font-medium">+506 2222-3333</p>
                <p className="text-white/50 text-sm">WhatsApp disponible</p>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-white/5 border border-gold/15">
              <h4 className="font-serif text-white text-lg mb-4 font-semibold">Horario de Atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="text-white/50">Lun — Vie</span><span className="text-white font-medium">8:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between text-sm"><span className="text-white/50">Sábado</span><span className="text-white font-medium">9:00 AM – 2:00 PM</span></div>
                <div className="flex justify-between text-sm"><span className="text-white/50">Domingo</span><span className="text-gold/70 font-medium">Solo Urgencias</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
