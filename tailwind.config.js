/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#140308', // Deepest Midnight Velvet Burgundy
          900: '#1e050e', // Royal Burgundy Base
          850: '#2b0715', // Deep Burgundy Card Base
          800: '#3c0a1d', // Rich Burgundy Glass Card
          750: '#4a0d24',
          700: '#5c102e',
          600: '#75143a',
          500: '#911a48',
          400: '#b0255b',
        },
        rosegold: {
          50: '#fff7f7',
          100: '#faeeee',
          200: '#f5dcdd',
          300: '#ecc0c3',
          400: '#e1a1a6',
          500: '#d4888f', // Elegant Rose Gold Primary
          600: '#bc6971',
          700: '#9f4d56',
          800: '#833d45',
          900: '#6d3238',
        },
        gold: {
          50: '#fff7f7',
          100: '#faeeee',
          200: '#f5dcdd',
          300: '#ecc0c3',
          400: '#e1a1a6',
          500: '#d4888f', // Rose Gold Champagne
          600: '#bc6971',
          700: '#9f4d56',
          800: '#833d45',
          900: '#6d3238',
        },
        ivory: {
          50: '#fffefa',
          100: '#fdfbf5',
          200: '#f7f2e7',
          300: '#eee5d4',
          400: '#ded2ba',
        },
        // Complete safety remapping of any legacy green tokens to Deep Royal Burgundy
        emerald: {
          950: '#140308',
          900: '#1e050e',
          850: '#2b0715',
          800: '#3c0a1d',
          700: '#5c102e',
          600: '#75143a',
        },
        teal: {
          950: '#140308',
          900: '#1e050e',
          850: '#2b0715',
          800: '#3c0a1d',
          700: '#5c102e',
          600: '#75143a',
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
        'rosegold-gradient': 'linear-gradient(135deg, #fff2f0 0%, #f7c7c3 25%, #d4888f 50%, #a8545e 80%, #f7c7c3 100%)',
        'rosegold-metallic': 'linear-gradient(90deg, #c4767e 0%, #ffe2e0 25%, #d4888f 50%, #944049 75%, #d4888f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fff2f0 0%, #f7c7c3 25%, #d4888f 50%, #a8545e 80%, #f7c7c3 100%)',
        'gold-metallic': 'linear-gradient(90deg, #c4767e 0%, #ffe2e0 25%, #d4888f 50%, #944049 75%, #d4888f 100%)',
        'burgundy-radial': 'radial-gradient(circle at 50% 25%, #420a1f 0%, #1e050e 60%, #140308 100%)',
        'emerald-radial': 'radial-gradient(circle at 50% 25%, #420a1f 0%, #1e050e 60%, #140308 100%)',
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
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212, 136, 143, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(212, 136, 143, 0.8))' },
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
