/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070f',
        neonGreen: '#22ff99',
        neonPurple: '#8b5cf6',
        neonCyan: '#22d3ee',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(34, 255, 153, 0.35), 0 0 50px rgba(139, 92, 246, 0.25)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 0 rgba(34, 211, 238, 0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(34, 211, 238, 0.7)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
