import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { RESORT_INFO, SOCIAL_LINKS } from '../utils/constants';
import { scrollToTop } from '../utils/scrollUtils';

const Footer = () => {
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube
  };

  return (
    <footer className="bg-kawai-deep text-white">
      <div className="container-custom py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-lato font-black mb-2 sm:mb-3 lg:mb-4">{RESORT_INFO.name}</h3>
            <p className="text-gray-300 mb-2 sm:mb-3 lg:mb-4 font-light text-xs sm:text-sm lg:text-base leading-tight">
              Tu destino perfecto para vacaciones familiares junto al mar. 
              Creando momentos inolvidables desde {RESORT_INFO.founded}.
            </p>
            <div className="flex space-x-2 sm:space-x-3 lg:space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <button 
                    key={social.name}
                    className="text-gray-300 hover:text-kawai-sun transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 lg:mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-kawai-sun transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-kawai-sun transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#habitaciones" className="text-gray-300 hover:text-kawai-sun transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#actividades" className="text-gray-300 hover:text-kawai-sun transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Actividades
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-kawai-sun transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 lg:mb-4">Servicios</h4>
            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
              <li className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">WiFi Gratuito</li>
              <li className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">Restaurante Familiar</li>
              <li className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">Estacionamiento</li>
              <li className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">Acceso a Playa</li>
              <li className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">Actividades Acuáticas</li>
              <li className="text-gray-300 font-light text-xs sm:text-sm lg:text-base">Spa y Bienestar</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 lg:mb-4">Contacto</h4>
            <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-kawai-sun flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">{RESORT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-kawai-sun flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">{RESORT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-kawai-sun flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">{RESORT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 sm:mt-12 pt-8 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-300 text-xs sm:text-sm font-light text-center sm:text-left">
              © 2025 {RESORT_INFO.name} Resort. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <button className="text-gray-300 hover:text-kawai-sun text-xs sm:text-sm transition-colors duration-300">
                Política de Privacidad
              </button>
              <button className="text-gray-300 hover:text-kawai-sun text-xs sm:text-sm transition-colors duration-300">
                Términos de Servicio
              </button>
              <button className="text-gray-300 hover:text-kawai-sun text-xs sm:text-sm transition-colors duration-300">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-kawai-sun text-kawai-deep p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
        aria-label="Volver arriba"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer; 