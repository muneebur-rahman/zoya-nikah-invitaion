/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020b18', // Deepest Midnight Navy
          900: '#04142e', // Royal Navy Blue Base
          850: '#071d42', // Rich Navy Card
          800: '#0b2959', // Lighter Navy
          700: '#103775',
          600: '#184b96',
        },
        gold: {
          50: '#fffdf5',
          100: '#fdf8e6',
          200: '#faecc4',
          300: '#f5dc98',
          400: '#eac461',
          500: '#d4af37', // Champagne / Classic Gold
          600: '#b89228',
          700: '#94711f',
          800: '#795a1e',
          900: '#674a1d',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#fbfaf5',
          200: '#f5f2e6',
          300: '#ede8d5',
          400: '#dfd7c0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        heading: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        urdu: ['"Noto Nastaliq Urdu"', '"Amiri"', 'serif'],
        arabic: ['"Amiri"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fff3c4 0%, #f6e27a 25%, #d4af37 50%, #b89228 80%, #f6e27a 100%)',
        'gold-metallic': 'linear-gradient(90deg, #bfa054 0%, #f6e27a 25%, #cb9b51 50%, #f6e27a 75%, #bfa054 100%)',
        'navy-radial': 'radial-gradient(circle at 50% 25%, #0b2959 0%, #04142e 60%, #020b18 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'sway': 'sway 4.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.8))' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
