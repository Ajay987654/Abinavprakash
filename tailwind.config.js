/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  extend: {
    animation: {
      'fade-in': 'fadeIn 1s ease-in-out forwards', // ← 'forwards' ensures it stays visible
    },
  }
  
};
