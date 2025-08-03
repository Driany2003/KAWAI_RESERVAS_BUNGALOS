import React from 'react';
import { Wifi, Utensils, Car, Waves, WifiOff, Heart, Star, CheckCircle, Zap, Shield } from 'lucide-react';
import { services, stats } from '../utils/servicesData';
import { Section } from '../layout';

const Servicios = () => {
  const serviceIcons = {
    wifi: Wifi,
    utensils: Utensils,
    car: Car,
    waves: Waves,
    'wifi-off': WifiOff,
    heart: Heart
  };

  return (
    <Section id="servicios" background="kawai-sky">
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-kawai-coral/20 rounded-full mb-4 sm:mb-6">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 text-kawai-coral" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lato font-black text-kawai-deep mb-3 sm:mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-base sm:text-lg text-kawai-text max-w-2xl mx-auto font-light px-4">
          Disfruta de todas las comodidades que necesitas para una estadía perfecta con tu familia
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
        {services.map((servicio, index) => {
          const IconComponent = serviceIcons[servicio.icon];
          return (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20"
            >
              {/* Icono principal */}
              <div className="bg-gradient-to-br from-kawai-coral/10 to-kawai-sun/10 w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-6 shadow-lg">
                <IconComponent className="w-5 h-5 sm:w-8 sm:h-8 text-kawai-coral" />
              </div>

              {/* Contenido */}
              <h3 className="text-sm sm:text-xl font-bold text-kawai-deep mb-2 sm:mb-3 group-hover:text-kawai-coral transition-colors duration-300">
                {servicio.titulo}
              </h3>
              <p className="text-xs sm:text-base text-kawai-text leading-relaxed font-light mb-2 sm:mb-4">
                {servicio.descripcion}
              </p>

              {/* Indicador de disponibilidad */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">24/7</span>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            </div>
          );
        })}
      </div>

      {/* Estadísticas mejoradas */}
      <div className="bg-gradient-to-br from-white/90 to-kawai-sand/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl max-w-5xl mx-auto">
        <div className="text-center mb-4 sm:mb-8">
          <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-kawai-coral/20 rounded-full mb-2 sm:mb-4">
            <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-kawai-coral" />
          </div>
          <h3 className="text-lg sm:text-2xl font-lato font-black text-kawai-deep mb-1 sm:mb-2">
            ¿Por qué elegir Kawai?
          </h3>
          <p className="text-xs sm:text-base text-kawai-text font-light px-2 sm:px-4">
            Números que respaldan nuestra excelencia y compromiso con tu familia
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-4xl font-black text-kawai-coral mb-1 sm:mb-3">
                {stat.number}
              </div>
              <div className="text-xs sm:text-base text-kawai-text font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-kawai-sand/30">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-kawai-coral/10 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 sm:w-5 sm:h-5 text-kawai-coral" />
              </div>
              <div>
                <h4 className="font-bold text-kawai-deep text-xs sm:text-sm">Garantía de Calidad</h4>
                <p className="text-kawai-text text-xs font-light">Todos nuestros servicios están certificados</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-kawai-sun/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-kawai-sun" />
              </div>
              <div>
                <h4 className="font-bold text-kawai-deep text-xs sm:text-sm">Satisfacción</h4>
                <p className="text-kawai-text text-xs font-light">100% garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-6 sm:mt-12 text-center">
        <div className="inline-flex flex-row items-center space-x-3 sm:space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-8 py-4 sm:py-4 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-coral rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-kawai-text font-medium">Servicios incluidos</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-sun rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-kawai-text font-medium">Sin costo adicional</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-palm rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-kawai-text font-medium">Disponibles 24/7</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Servicios; 