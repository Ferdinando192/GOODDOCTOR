"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t py-16 border-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          <div className="lg:col-span-2">
            <div className="relative w-48 h-20 mb-6">
               <Image src="/logo.png" alt="Good Doctor Logo" fill className="object-contain object-left" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs">
              Clínica dental premium especializada en carillas de porcelana y diseño de sonrisa.
            </p>
            <div className="flex gap-3 mt-6">
              {[1,2,3].map(i => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-gold/30 flex justify-center items-center text-gold/70 hover:bg-gold hover:text-obsidian hover:-translate-y-1 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/></svg>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navegación</h5>
            <ul className="space-y-3">
              {['El Doctor', 'Servicios', 'Proceso', 'Resultados', 'Contacto'].map(l => (
                <li key={l}><Link href="#" className="text-white/40 hover:text-gold text-sm transition-colors cursor-none">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Horarios</h5>
            <div className="space-y-2 text-sm text-white/40 mb-5">
              <div className="flex justify-between"><span>Lun — Vie</span><span className="text-white/70">8am – 6pm</span></div>
              <div className="flex justify-between"><span>Sábado</span><span className="text-white/70">9am – 2pm</span></div>
            </div>
            <div className="pt-5 border-t border-white/5">
              <a href="tel:+50622223333" className="block text-white/40 hover:text-gold text-sm transition-colors mb-1 cursor-none">+506 2222-3333</a>
              <a href="mailto:citas@gooddoctor.cr" className="block text-white/40 hover:text-gold text-sm transition-colors cursor-none">citas@gooddoctor.cr</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">© 2025 Good Doctor · Dr. Kevin Sancho.</p>
          <p className="text-white/20 text-xs text-center">Hecho con ♥ para sonrisas perfectas</p>
        </div>
      </div>
    </footer>
  );
}
