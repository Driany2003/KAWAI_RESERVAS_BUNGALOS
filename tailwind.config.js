/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta tropical
        'kawai-sand': '#FDF6E3',      // Arena clara
        'kawai-palm': '#6CA965',      // Verde palmera
        'kawai-sun': '#FFD166',       // Amarillo sol
        'kawai-coral': '#E29578',     // Coral
        'kawai-sky': '#A8DADC',       // Azul claro
        'kawai-deep': '#264653',      // Azul profundo
        'kawai-warm': '#FAF3E0',      // Beige cálido
        'kawai-text': '#444',         // Gris cálido
        'kawai-terracotta': '#E76F51' // Terracota
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Lato', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
} 