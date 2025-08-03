import React from 'react';
import { Users, Bed, Wifi, Waves, Star, Home, Tv, Snowflake, Coffee, Car, Eye } from 'lucide-react';
import { roomTypes } from '../utils/roomData';
import { scrollToSection } from '../utils/scrollUtils';

const Habitaciones = () => {
  const amenityIcons = {
    '2 camas dobles': Bed,
    'Cama king': Bed,
    'Cama doble': Bed,
    '3 habitaciones': Home,
    'WiFi gratuito': Wifi,
    'TV 55"': Tv,
    'TV 65"': Tv,
    'TV 42"': Tv,
    'Aire acondicionado': Snowflake,
    'Balcón privado': Eye,
    'Jacuzzi': Waves,
    'Vista al mar': Eye,
    'Cocina completa': Coffee,
    'Terraza privada': Eye,
    'Estacionamiento': Car,
    'Vista al jardín': Eye
  };

  const handleReservar = () => {
    scrollToSection('#contacto');
  };

  return (
    <section id="habitaciones" className="section-padding bg-gradient-to-br from-kawai-warm/50 to-kawai-sand/30">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-kawai-coral/20 rounded-full mb-4 sm:mb-6">
            <Home className="w-6 h-6 sm:w-8 sm:h-8 text-kawai-coral" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lato font-black text-kawai-deep mb-3 sm:mb-4">
            Nuestras Habitaciones
          </h2>
          <p className="text-base sm:text-lg text-kawai-text max-w-2xl mx-auto font-light px-4">
            Elige la opción perfecta para tu familia, desde habitaciones estándar hasta suites de lujo
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {roomTypes.map((habitacion, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl h-72 sm:h-96 ${
                habitacion.destacado ? 'ring-2 ring-kawai-coral shadow-xl' : ''
              }`}
            >
              {/* Header con imagen */}
              <div className="h-20 sm:h-32 bg-gradient-to-br from-kawai-sand/60 to-kawai-sun/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="text-center relative z-10">
                  <div className="text-xl sm:text-3xl mb-1">🏨</div>
                  <h3 className="text-xs sm:text-sm font-bold text-kawai-deep">{habitacion.tipo}</h3>
                </div>
                {habitacion.destacado && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                    <Star className="w-3 h-3 sm:w-5 sm:h-5 text-kawai-sun fill-current" />
                  </div>
                )}
              </div>
              
              {/* Contenido */}
              <div className="p-3 sm:p-4 flex flex-col h-52 sm:h-64">
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <div className="flex items-center text-kawai-text text-xs">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="truncate">{habitacion.capacidad}</span>
                  </div>
                  <div className="text-xs sm:text-lg font-bold text-kawai-coral">
                    {habitacion.precio}
                    <span className="text-xs text-gray-500">/noche</span>
                  </div>
                </div>
                
                <p className="text-kawai-text text-xs mb-2 sm:mb-4 font-light leading-tight flex-grow line-clamp-2">{habitacion.descripcion}</p>
                
                {/* Amenidades con iconos pequeños */}
                <div className="space-y-0.5 sm:space-y-1 mb-2 sm:mb-4">
                  {habitacion.amenidades.slice(0, 3).map((amenidad, idx) => {
                    const IconComponent = amenityIcons[amenidad] || Coffee;
                    return (
                      <div key={idx} className="flex items-center text-xs text-kawai-text">
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-kawai-coral rounded-full mr-1 sm:mr-2 flex-shrink-0"></div>
                        <IconComponent className="w-2 h-2 sm:w-3 sm:h-3 mr-1 text-kawai-coral flex-shrink-0" />
                        <span className="truncate text-xs">{amenidad}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Botón de reservar al final con altura fija */}
                <div className="mt-auto">
                  <button 
                    onClick={handleReservar}
                    className="w-full bg-gradient-to-r from-kawai-coral to-kawai-sun text-white text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-8 sm:h-12 flex items-center justify-center shadow-md"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Características destacadas */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
          <h3 className="text-lg sm:text-xl font-lato font-black text-kawai-deep text-center mb-4 sm:mb-6">
            Características Destacadas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center group">
              <div className="bg-kawai-coral/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-kawai-coral group-hover:text-white transition-all duration-300">
                <Bed className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-kawai-deep mb-1">Camas Premium</h4>
              <p className="text-xs text-kawai-text font-light leading-tight">Colchones de alta calidad para un descanso perfecto</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-kawai-coral/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-kawai-coral group-hover:text-white transition-all duration-300">
                <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-kawai-deep mb-1">WiFi Rápido</h4>
              <p className="text-xs text-kawai-text font-light leading-tight">Conexión de alta velocidad en todas las habitaciones</p>
            </div>
            
            <div className="text-center group col-span-2 sm:col-span-1">
              <div className="bg-kawai-coral/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-kawai-coral group-hover:text-white transition-all duration-300">
                <Waves className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-kawai-deep mb-1">Vistas Hermosas</h4>
              <p className="text-xs text-kawai-text font-light leading-tight">Vistas al mar, jardín o montañas desde tu habitación</p>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex flex-row items-center space-x-3 sm:space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kawai-coral rounded-full"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium">Check-in: 3:00 PM</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kawai-sun rounded-full"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium">Check-out: 11:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habitaciones; 