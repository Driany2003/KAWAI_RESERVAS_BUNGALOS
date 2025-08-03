import React, { useState, useEffect } from 'react';
import { Waves, Utensils, Users, Heart, Star, Clock, Calendar, Quote, Activity } from 'lucide-react';
import { activities, testimonials } from '../utils/activitiesData';
import { scrollToSection } from '../utils/scrollUtils';

const Actividades = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Carrusel automático para móvil
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const handleReservar = () => {
    scrollToSection('#contacto');
  };

  const activityIcons = {
    waves: Waves,
    utensils: Utensils,
    users: Users,
    heart: Heart
  };

  return (
    <section id="actividades" className="section-padding bg-gradient-to-br from-kawai-sand/30 to-kawai-warm/20">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-kawai-coral/20 rounded-full mb-4 sm:mb-6">
            <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-kawai-coral" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lato font-black text-kawai-deep mb-3 sm:mb-4">
            Actividades y Entretenimiento
          </h2>
          <p className="text-base sm:text-lg text-kawai-text max-w-2xl mx-auto font-light px-4">
            Mantén a toda tu familia entretenida con nuestras actividades recreativas y deportivas
          </p>
        </div>

        {/* Actividades principales */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {activities.map((actividad, index) => {
            const IconComponent = activityIcons[actividad.icon];
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl h-64 sm:h-auto ${
                  actividad.popular ? 'ring-2 ring-kawai-coral shadow-xl' : ''
                }`}
              >
                {/* Header con icono */}
                <div className="h-16 sm:h-24 bg-gradient-to-br from-kawai-sky/40 to-kawai-coral/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="bg-kawai-coral/20 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center group-hover:bg-kawai-coral group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  {actividad.popular && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-kawai-sun fill-current" />
                    </div>
                  )}
                </div>
                
                {/* Contenido */}
                <div className="p-3 sm:p-4 flex flex-col h-48 sm:h-auto">
                  <h3 className="text-xs sm:text-sm font-bold text-kawai-deep mb-1 sm:mb-2 group-hover:text-kawai-coral transition-colors duration-300">
                    {actividad.titulo}
                  </h3>
                  
                  <p className="text-kawai-text text-xs mb-2 sm:mb-3 font-light leading-tight flex-grow line-clamp-2">{actividad.descripcion}</p>
                  
                  {/* Información de duración y precio */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2 sm:mb-3">
                    <div className="flex items-center">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                      <span>{actividad.duracion}</span>
                    </div>
                    <div className="font-bold text-kawai-coral text-xs sm:text-sm">
                      {actividad.precio}
                    </div>
                  </div>
                  
                  <button onClick={handleReservar} className="w-full bg-kawai-coral/90 hover:bg-kawai-coral text-white text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 h-7 sm:h-auto">
                    Reservar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonios Mejorados */}
        <div className="bg-gradient-to-br from-kawai-sand/40 to-kawai-warm/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl mb-6 sm:mb-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-kawai-coral/20 rounded-full mb-3 sm:mb-4">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-kawai-coral" />
            </div>
            <h3 className="text-xl sm:text-2xl font-lato font-black text-kawai-deep mb-2">
              Lo que dicen nuestros huéspedes
            </h3>
            <p className="text-sm sm:text-base text-kawai-text font-light px-4">
              Experiencias reales de familias que han disfrutado nuestras actividades
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Carrusel automático para móvil, grid normal para desktop */}
            <div className="sm:hidden">
              {/* Solo muestra el testimonio actual en móvil */}
              <div className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 h-48 sm:h-auto">
                  {/* Calificación */}
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="flex items-center mr-2 sm:mr-3">
                      {[...Array(testimonials[currentTestimonial].calificacion)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-kawai-sun fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-kawai-text font-medium">
                      {testimonials[currentTestimonial].calificacion}/5
                    </div>
                  </div>
                  
                  {/* Comillas decorativas */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-10">
                    <Quote className="w-4 h-4 sm:w-8 sm:h-8 text-kawai-coral" />
                  </div>
                  
                  {/* Testimonio */}
                  <div className="relative z-10">
                    <p className="text-kawai-text text-xs sm:text-sm mb-2 sm:mb-4 italic font-light leading-tight line-clamp-2 flex-grow">
                      "{testimonials[currentTestimonial].texto}"
                    </p>
                    
                    {/* Información del cliente */}
                    <div className="flex items-center pt-2 sm:pt-4 border-t border-kawai-sand/30 mt-auto">
                      <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-kawai-coral/20 to-kawai-sun/20 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <span className="text-kawai-coral font-bold text-xs sm:text-sm">
                          {testimonials[currentTestimonial].nombre.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-kawai-deep text-xs sm:text-sm">
                          {testimonials[currentTestimonial].nombre}
                        </div>
                        <div className="text-xs text-kawai-text font-light">
                          Huésped Verificado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              </div>

              {/* Indicadores de posición */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-kawai-coral' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Grid normal para desktop - exactamente como estaba antes */}
            {testimonials.map((testimonio, index) => (
              <div key={index} className="hidden sm:block group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                  {/* Calificación */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-3">
                      {[...Array(testimonio.calificacion)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-kawai-sun fill-current" />
                      ))}
                    </div>
                    <div className="text-xs text-kawai-text font-medium">
                      {testimonio.calificacion}/5
                    </div>
                  </div>
                  
                  {/* Comillas decorativas */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-8 h-8 text-kawai-coral" />
                  </div>
                  
                  {/* Testimonio */}
                  <div className="relative z-10">
                    <p className="text-kawai-text text-sm mb-4 italic font-light leading-relaxed">
                      "{testimonio.texto}"
                    </p>
                    
                    {/* Información del cliente */}
                    <div className="flex items-center pt-4 border-t border-kawai-sand/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-kawai-coral/20 to-kawai-sun/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-kawai-coral font-bold text-sm">
                          {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-kawai-deep text-sm">
                          {testimonio.nombre}
                        </div>
                        <div className="text-xs text-kawai-text font-light">
                          Huésped Verificado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
          
          {/* Estadísticas adicionales */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-kawai-sand/30">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-lg sm:text-2xl font-bold text-kawai-coral mb-1">98%</div>
                <div className="text-xs text-kawai-text font-light">Satisfacción</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-kawai-coral mb-1">500+</div>
                <div className="text-xs text-kawai-text font-light">Familias Felices</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-kawai-coral mb-1">4.9</div>
                <div className="text-xs text-kawai-text font-light">Calificación Promedio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios de actividades */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-lato font-black text-kawai-deep text-center mb-4 sm:mb-6">
            Horarios de Actividades
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-kawai-sand/30 to-kawai-sun/20 rounded-xl p-3 sm:p-4">
              <div className="flex items-center mb-2 sm:mb-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-kawai-coral mr-2" />
                <h4 className="font-bold text-kawai-deep text-xs sm:text-sm">Mañana (8:00 AM - 12:00 PM)</h4>
              </div>
              <ul className="space-y-1">
                <li className="flex items-center text-xs text-kawai-text font-light">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-kawai-coral rounded-full mr-2"></div>
                  Yoga en la playa
                </li>
                <li className="flex items-center text-xs text-kawai-text font-light">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-kawai-coral rounded-full mr-2"></div>
                  Paseos en bote
                </li>
                <li className="flex items-center text-xs text-kawai-text font-light">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-kawai-coral rounded-full mr-2"></div>
                  Clases de cocina
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-kawai-sky/30 to-kawai-coral/20 rounded-xl p-3 sm:p-4">
              <div className="flex items-center mb-2 sm:mb-3">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-kawai-coral mr-2" />
                <h4 className="font-bold text-kawai-deep text-xs sm:text-sm">Tarde (2:00 PM - 6:00 PM)</h4>
              </div>
              <ul className="space-y-1">
                <li className="flex items-center text-xs text-kawai-text font-light">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-kawai-coral rounded-full mr-2"></div>
                  Deportes acuáticos
                </li>
                <li className="flex items-center text-xs text-kawai-text font-light">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-kawai-coral rounded-full mr-2"></div>
                  Juegos familiares
                </li>
                <li className="flex items-center text-xs text-kawai-text font-light">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-kawai-coral rounded-full mr-2"></div>
                  Spa y masajes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-center">
          <div className="inline-flex flex-row items-center space-x-3 sm:space-x-6 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-coral rounded-full"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium">Actividades incluidas</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-sun rounded-full"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium">Reservas anticipadas</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-palm rounded-full"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium">Instructores expertos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actividades; 