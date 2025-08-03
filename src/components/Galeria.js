import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image, Eye, Heart, Share2 } from 'lucide-react';
import { galleryImages } from '../utils/galleryData';
import { useAppContext } from '../context/AppContext';
import { Section } from '../layout';

const Galeria = () => {
  const { selectedImage, setSelectedImage } = useAppContext();
  const [hoveredImage, setHoveredImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[prevIndex]);
    }
  };

  return (
    <Section id="galeria" background="white">
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-kawai-coral/20 rounded-full mb-4 sm:mb-6">
          <Image className="w-6 h-6 sm:w-8 sm:h-8 text-kawai-coral" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lato font-black text-kawai-deep mb-3 sm:mb-4">
          Galería de Imágenes
        </h2>
        <p className="text-base sm:text-lg text-kawai-text max-w-2xl mx-auto font-light px-4">
          Descubre la belleza y elegancia de nuestro resort a través de estas imágenes
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {galleryImages.map((imagen) => (
          <div
            key={imagen.id}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl bg-white"
            onClick={() => openModal(imagen)}
            onMouseEnter={() => setHoveredImage(imagen.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Imagen */}
            <div className="relative h-40 sm:h-64 overflow-hidden">
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Iconos de acción */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300">
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Indicador de vista */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                  <Eye className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                  <span className="text-white text-xs font-medium">Ver</span>
                </div>
              </div>
            </div>

            {/* Información de la imagen */}
            <div className="p-3 sm:p-4 bg-white">
              <h3 className="font-bold text-kawai-deep text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-kawai-coral transition-colors duration-300">
                {imagen.titulo}
              </h3>
              <p className="text-kawai-text text-xs sm:text-sm font-light leading-relaxed">
                {imagen.descripcion}
              </p>
              
              {/* Indicador de posición */}
              <div className="mt-2 sm:mt-3 flex items-center justify-between">
                <div className="flex space-x-1">
                  {galleryImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === galleryImages.findIndex(img => img.id === imagen.id)
                          ? 'bg-kawai-coral'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  {galleryImages.findIndex(img => img.id === imagen.id) + 1} de {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl sm:rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Estadísticas de la galería */}
      <div className="bg-gradient-to-br from-kawai-sand/30 to-kawai-warm/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
          <div className="flex flex-col items-center justify-center min-h-[60px] sm:min-h-[80px]">
            <div className="text-lg sm:text-2xl font-bold text-kawai-coral mb-1">{galleryImages.length}</div>
            <div className="text-xs sm:text-sm text-kawai-text font-light leading-tight">Imágenes Disponibles</div>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[60px] sm:min-h-[80px]">
            <div className="text-lg sm:text-2xl font-bold text-kawai-coral mb-1">4K</div>
            <div className="text-xs sm:text-sm text-kawai-text font-light leading-tight">Calidad Ultra HD</div>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[60px] sm:min-h-[80px]">
            <div className="text-lg sm:text-2xl font-bold text-kawai-coral mb-1">360°</div>
            <div className="text-xs sm:text-sm text-kawai-text font-light leading-tight">Vistas Panorámicas</div>
          </div>
        </div>
      </div>

      {/* Modal mejorado */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>
            
            {/* Botón anterior */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Botón siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Contenido del modal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
                
                {/* Indicador de posición en modal */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    {galleryImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === galleryImages.findIndex(img => img.id === selectedImage.id)
                            ? 'bg-white'
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-kawai-deep">{selectedImage.titulo}</h3>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 bg-kawai-coral/10 rounded-full flex items-center justify-center text-kawai-coral hover:bg-kawai-coral hover:text-white transition-all duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-kawai-coral/10 rounded-full flex items-center justify-center text-kawai-coral hover:bg-kawai-coral hover:text-white transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-kawai-text font-light text-lg leading-relaxed">{selectedImage.descripcion}</p>
                
                {/* Información adicional */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Imagen {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} de {galleryImages.length}</span>
                    <span>Calidad 4K • Vista panorámica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Galeria; 