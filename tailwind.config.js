/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050816',
        'dark-secondary': '#0a0a19',
        'purple-accent': '#9b59b6',
        'blue-accent': '#3498db',
        'red-accent': '#e74c3c',
        'text-primary': '#f1f1f1',
        'text-secondary': '#aaaaaa',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 15px rgba(155, 89, 182, 0.5)',
        'glow-blue': '0 0 15px rgba(52, 152, 219, 0.5)',
        'glow-red': '0 0 15px rgba(231, 76, 60, 0.5)',
      },
    },
  },
  plugins: [],
};