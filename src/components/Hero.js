import React from 'react';
import { ChevronDown } from 'lucide-react';
import { RESORT_INFO } from '../utils/constants';
import { scrollToSection } from '../utils/scrollUtils';

const Hero = () => {
  const scrollToNext = () => {
    scrollToSection('#servicios');
  };

  const scrollToContact = () => {
    scrollToSection('#contacto');
  };

  const scrollToGallery = () => {
    scrollToSection('#galeria');
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-kawai-sand">
      <div className="absolute inset-0 z-0">
        {/* Imagen de fondo SOLO para móvil */}
        <div className="sm:hidden absolute inset-0">
          <img
            src="/images/kawai-palms-night.jpg"
            alt="Kawai Resort Palms Night"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
        </div>

        {/* Video de fondo para tablet y desktop - EXACTAMENTE como estaba antes */}
        <iframe
          src="https://www.youtube.com/embed/o36HKsDKGAU?autoplay=1&mute=1&loop=1&playlist=o36HKsDKGAU&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Kawai Resort Video"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lato font-black mb-4 sm:mb-6 animate-fade-in leading-tight">
          Bienvenidos a
          <span className="block text-kawai-sun mt-1 sm:mt-2">{RESORT_INFO.name}</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up font-light leading-relaxed px-2">
          {RESORT_INFO.tagline}
        </p>
        
        <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-slide-up mb-8 sm:mb-12">
          <button
            onClick={scrollToContact}
            className="w-full bg-gradient-to-r from-kawai-coral to-kawai-sun text-white text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border-2 border-kawai-coral/30"
          >
            Reservar
          </button>
          <button
            onClick={scrollToGallery}
            className="w-full bg-white/20 backdrop-blur-md border-2 border-white/50 text-white text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-bold hover:bg-white hover:text-kawai-deep transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Galería
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-kawai-sun mb-1">50+</div>
            <div className="text-xs sm:text-sm font-medium">Habitaciones</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-kawai-sun mb-1">100%</div>
            <div className="text-xs sm:text-sm font-medium">Familiar</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-kawai-sun mb-1">24/7</div>
            <div className="text-xs sm:text-sm font-medium">Atención</div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 transition-all duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-kawai-sun sm:w-8 sm:h-8" />
      </button>
    </section>
  );
};

export default Hero; 