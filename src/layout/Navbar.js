import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, RESORT_INFO } from '../utils/constants';
import { scrollToSection } from '../utils/scrollUtils';
import { useAppContext } from '../context/AppContext';

const Navbar = ({ isScrolled }) => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  const handleNavigation = (href) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <div className="flex items-center">
            <h1 className={`text-xl sm:text-2xl lg:text-3xl font-lato font-black ${
              isScrolled ? 'text-kawai-blue' : 'text-white'
            }`}>
              {RESORT_INFO.name}
            </h1>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-kawai-warm ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('#contacto')}
              className="btn-primary"
            >
              Reservar Ahora
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 sm:p-6 space-y-3 sm:space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left text-gray-700 font-medium hover:text-kawai-warm transition-colors duration-300 text-sm sm:text-base py-2"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('#contacto')}
              className="btn-primary w-full mt-4"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 