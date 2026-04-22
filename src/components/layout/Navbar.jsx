"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(201,168,76,0.12)] border-b border-gold/20' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="#hero" className="flex items-center gap-3 group cursor-pointer z-50 py-2" onClick={closeMenu}>
            <div className="relative w-40 h-16 transition-transform duration-300 group-hover:scale-105">
               <Image src="/logo.png" alt="Good Doctor Logo" fill className="object-contain object-left" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {['about', 'services', 'process', 'gallery', 'testimonials'].map(item => (
              <Link 
                key={item} 
                href={`#${item}`} 
                className="relative font-medium tracking-wider text-[0.85rem] uppercase text-white/85 hover:text-gold transition-colors group cursor-pointer"
              >
                {item === 'about' && 'El Doctor'}
                {item === 'services' && 'Servicios'}
                {item === 'process' && 'Proceso'}
                {item === 'gallery' && 'Resultados'}
                {item === 'testimonials' && 'Testimonios'}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"/>
              </Link>
            ))}
            <Link href="#contact" className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase text-[0.8rem] px-7 py-3 rounded-sm border-none transition-all duration-300 hover:shadow-[0_8px_32px_rgba(201,168,76,0.45)] hover:-translate-y-0.5 ml-4 group">
              <span className="relative z-10">Agendar Cita</span>
              <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 transition-all duration-500 group-hover:left-[150%]" />
            </Link>
          </div>

          <button 
            onClick={toggleMenu} 
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none" 
            aria-label="Menú"
          >
            <span className={`block w-6 h-[2px] bg-white transition-transform origin-center ${mobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-transform origin-center ${mobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 top-0 z-[-1] flex-col justify-center items-center gap-8 text-center bg-obsidian/98 backdrop-blur-xl transition-all duration-300 pt-20 ${mobileMenuOpen ? 'opacity-100 translate-y-0 flex' : 'opacity-0 pointer-events-none'}`}
      >
        {['about', 'services', 'process', 'gallery', 'testimonials'].map(item => (
          <Link 
            key={item} 
            href={`#${item}`} 
            onClick={closeMenu}
            className="text-white text-2xl font-serif font-medium"
          >
            {item === 'about' && 'El Doctor'}
            {item === 'services' && 'Servicios'}
            {item === 'process' && 'Proceso'}
            {item === 'gallery' && 'Resultados'}
            {item === 'testimonials' && 'Testimonios'}
          </Link>
        ))}
        <Link 
          href="#contact" 
          onClick={closeMenu}
          className="relative overflow-hidden bg-gradient-to-br from-gold via-gold-light to-gold-dark text-obsidian font-semibold tracking-wider uppercase text-sm px-8 py-3.5 rounded-sm mt-4"
        >
          Agendar Cita
        </Link>
      </div>
    </nav>
  );
}
