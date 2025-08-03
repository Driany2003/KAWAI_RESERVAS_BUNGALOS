import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, Shield, Clock, Star, Heart, ChevronDown, Users, Baby } from 'lucide-react';
import { RESORT_INFO } from '../utils/constants';
import { useAppContext } from '../context/AppContext';

const Contacto = () => {
  const { isFormSubmitted, setIsFormSubmitted } = useAppContext();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaLlegada: '',
    fechaSalida: '',
    adultos: '2',
    ninos: '0',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [showAdultos, setShowAdultos] = useState(false);
  const [showNinos, setShowNinos] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-+()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7;
  };

  const validateDates = (fechaLlegada, fechaSalida) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const llegada = new Date(fechaLlegada);
    const salida = new Date(fechaSalida);
    
    // Validar que la fecha de llegada no sea anterior a hoy
    if (llegada < today) {
      return { isValid: false, message: 'La fecha de llegada no puede ser anterior a hoy' };
    }
    
    // Validar que la fecha de salida no sea anterior a la fecha de llegada
    if (salida <= llegada) {
      return { isValid: false, message: 'La fecha de salida debe ser posterior a la fecha de llegada' };
    }
  
    const diffTime = salida - llegada;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      return { isValid: false, message: 'La estadía debe ser de al menos 1 noche' };
    }
    
    return { isValid: true, message: '' };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validaciones en tiempo real
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Ingresa un email válido' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (name === 'telefono' && value) {
      if (!validatePhone(value)) {
        setErrors(prev => ({ ...prev, telefono: 'Ingresa un teléfono válido' }));
      } else {
        setErrors(prev => ({ ...prev, telefono: '' }));
      }
    }

    // Validaciones de fechas en tiempo real
    if (name === 'fechaLlegada' || name === 'fechaSalida') {
      const fechaLlegada = name === 'fechaLlegada' ? value : formData.fechaLlegada;
      const fechaSalida = name === 'fechaSalida' ? value : formData.fechaSalida;
      
      if (fechaLlegada && fechaSalida) {
        const dateValidation = validateDates(fechaLlegada, fechaSalida);
        if (!dateValidation.isValid) {
          setErrors(prev => ({ ...prev, fechas: dateValidation.message }));
        } else {
          setErrors(prev => ({ ...prev, fechas: '' }));
        }
      } else {
        setErrors(prev => ({ ...prev, fechas: '' }));
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones finales
    const newErrors = {};
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    if (formData.telefono && !validatePhone(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido';
    }

    // Validar fechas
    if (formData.fechaLlegada && formData.fechaSalida) {
      const dateValidation = validateDates(formData.fechaLlegada, formData.fechaSalida);
      if (!dateValidation.isValid) {
        newErrors.fechas = dateValidation.message;
      }
    } else if (!formData.fechaLlegada || !formData.fechaSalida) {
      newErrors.fechas = 'Las fechas de llegada y salida son obligatorias';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fechaLlegada: '',
        fechaSalida: '',
        adultos: '2',
        ninos: '0',
        mensaje: ''
      });
      setErrors({});
    }, 3000);
  };

  const infoContacto = [
    {
      icon: <Phone className="w-5 h-5" />,
      titulo: 'Teléfono',
      info: RESORT_INFO.phone,
      color: 'kawai-coral'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      titulo: 'Email',
      info: RESORT_INFO.email,
      color: 'kawai-sun'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      titulo: 'Ubicación',
      info: RESORT_INFO.address,
      color: 'kawai-palm'
    }
  ];

  const CustomSelect = ({ value, onChange, options, icon, label, isOpen, setIsOpen, placeholder }) => (
    <div className="relative">
      <label className="block text-sm font-bold text-kawai-text mb-2">
        {label}
      </label>
      <div 
        className="w-full h-12 px-3 border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-kawai-coral focus-within:ring-2 focus-within:ring-kawai-coral focus-within:border-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-2">
            <div className="text-kawai-coral">
              {icon}
            </div>
            <span className="text-kawai-text text-sm">{value} {placeholder}</span>
          </div>
          <ChevronDown className={`w-4 h-4 text-kawai-text transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-gray-200 max-h-40 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 hover:bg-kawai-sand/20 cursor-pointer transition-colors duration-200 flex items-center space-x-2"
              onClick={() => {
                onChange(option.toString());
                setIsOpen(false);
              }}
            >
              <div className="text-kawai-coral">
                {icon}
              </div>
              <span className="text-kawai-text text-sm">{option} {placeholder}</span>
              {value === option.toString() && (
                <div className="ml-auto w-2 h-2 bg-kawai-coral rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-kawai-sand/40 to-kawai-warm/30">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-kawai-coral/20 rounded-full mb-4 sm:mb-6">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-kawai-coral" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lato font-black text-kawai-deep mb-3 sm:mb-4">
            Contáctanos
          </h2>
          <p className="text-base sm:text-lg text-kawai-text max-w-2xl mx-auto font-light px-4">
            Reserva tu estadía perfecta o consulta cualquier duda que tengas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Información de contacto y beneficios */}
          <div className="space-y-4 sm:space-y-6">
            {/* Información de contacto en una fila */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-lato font-black text-kawai-deep mb-3 sm:mb-4">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {infoContacto.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-xl bg-gray-50/50">
                    <div className={`bg-${item.color}/10 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-kawai-deep text-xs sm:text-sm">{item.titulo}</h4>
                      <p className="text-kawai-text text-xs sm:text-sm truncate">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficios simplificados */}
            <div className="bg-gradient-to-br from-kawai-sky/30 to-kawai-coral/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-8 shadow-lg">
              <h4 className="text-base sm:text-xl font-lato font-black text-kawai-deep mb-3 sm:mb-6 text-center">
                ¿Por qué elegir Kawai?
              </h4>
              <div className="space-y-2 sm:space-y-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-kawai-coral/10 w-6 h-6 sm:w-12 sm:h-12 rounded-md sm:rounded-lg flex items-center justify-center text-kawai-coral flex-shrink-0">
                      <Shield className="w-3 h-3 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-kawai-deep text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">
                        Reservas Seguras
                      </h5>
                      <p className="text-kawai-text text-xs sm:text-sm font-light leading-tight">
                        Pago seguro y confirmación inmediata
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-kawai-sun/10 w-6 h-6 sm:w-12 sm:h-12 rounded-md sm:rounded-lg flex items-center justify-center text-kawai-sun flex-shrink-0">
                      <Clock className="w-3 h-3 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-kawai-deep text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">
                        Cancelación Gratuita
                      </h5>
                      <p className="text-kawai-text text-xs sm:text-sm font-light leading-tight">
                        Hasta 24 horas antes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-kawai-palm/10 w-6 h-6 sm:w-12 sm:h-12 rounded-md sm:rounded-lg flex items-center justify-center text-kawai-palm flex-shrink-0">
                      <Star className="w-3 h-3 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-kawai-deep text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">
                        Mejor Precio
                      </h5>
                      <p className="text-kawai-text text-xs sm:text-sm font-light leading-tight">
                        Garantía de precio más bajo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-kawai-coral/10 w-6 h-6 sm:w-12 sm:h-12 rounded-md sm:rounded-lg flex items-center justify-center text-kawai-coral flex-shrink-0">
                      <Heart className="w-3 h-3 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-kawai-deep text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">
                        Respuesta en 2h
                      </h5>
                      <p className="text-kawai-text text-xs sm:text-sm font-light leading-tight">
                        Soporte personalizado 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de reserva */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kawai-coral/20 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-kawai-coral" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-lato font-black text-kawai-deep">
                  Reserva tu Espacio
                </h3>
                <p className="text-kawai-text text-xs sm:text-sm">Completa el formulario y nos pondremos en contacto contigo</p>
              </div>
            </div>
            
            {isFormSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-3">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-kawai-text text-sm sm:text-base font-light">
                  Nos pondremos en contacto contigo pronto.
                </p>
                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-kawai-text space-y-1 sm:space-y-2">
                  <p>✅ Confirmación enviada a tu email</p>
                  <p>⏰ Respuesta en menos de 2 horas</p>
                  <p>🔄 Cancelación gratuita hasta 24h antes</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Información personal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-kawai-text mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-kawai-coral focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 text-kawai-text placeholder-gray-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-kawai-text mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full h-12 px-4 border rounded-xl focus:ring-2 focus:ring-kawai-coral focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 text-kawai-text placeholder-gray-400 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-kawai-text mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 border rounded-xl focus:ring-2 focus:ring-kawai-coral focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 text-kawai-text placeholder-gray-400 ${
                        errors.telefono ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+51 999 999 999"
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-kawai-text mb-2">
                      Fecha de Llegada *
                    </label>
                    <input
                      type="date"
                      name="fechaLlegada"
                      value={formData.fechaLlegada}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full h-12 px-4 border rounded-xl focus:ring-2 focus:ring-kawai-coral focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 text-kawai-text ${
                        errors.fechas ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-kawai-text mb-2">
                      Fecha de Salida *
                    </label>
                    <input
                      type="date"
                      name="fechaSalida"
                      value={formData.fechaSalida}
                      onChange={handleChange}
                      required
                      min={formData.fechaLlegada || new Date().toISOString().split('T')[0]}
                      className={`w-full h-12 px-4 border rounded-xl focus:ring-2 focus:ring-kawai-coral focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 text-kawai-text ${
                        errors.fechas ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <CustomSelect
                      value={formData.adultos}
                      onChange={(value) => setFormData(prev => ({ ...prev, adultos: value }))}
                      options={[1,2,3,4,5,6]}
                      icon={<Users className="w-4 h-4" />}
                      label="Adultos"
                      isOpen={showAdultos}
                      setIsOpen={setShowAdultos}
                      placeholder="adultos"
                    />
                    
                    <CustomSelect
                      value={formData.ninos}
                      onChange={(value) => setFormData(prev => ({ ...prev, ninos: value }))}
                      options={[0,1,2,3,4,5]}
                      icon={<Baby className="w-4 h-4" />}
                      label="Niños"
                      isOpen={showNinos}
                      setIsOpen={setShowNinos}
                      placeholder="niños"
                    />
                  </div>
                </div>
                
                {errors.fechas && (
                  <div className="text-red-500 text-xs mt-1 px-4">
                    {errors.fechas}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-kawai-text mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-kawai-coral focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 text-kawai-text placeholder-gray-400 resize-none"
                    placeholder="Cuéntanos sobre tu experiencia ideal en Kawai Resort..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-kawai-coral to-kawai-sun text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Reserva</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Información adicional en la parte inferior */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-row items-center space-x-2 sm:space-x-4 sm:space-x-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-full px-3 sm:px-8 py-2 sm:py-4 shadow-lg">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-coral rounded-full flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium leading-tight">Respuesta en 2h</span>
            </div>
            <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-sun rounded-full flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium leading-tight">Cancelación gratis</span>
            </div>
            <div className="w-px h-3 sm:h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-kawai-palm rounded-full flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-kawai-text font-medium leading-tight">Mejor precio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto; 