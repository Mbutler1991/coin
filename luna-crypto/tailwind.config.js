/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all relevant files
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'blow-dollars': 'blow-dollars 5s linear infinite',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'blow-dollars': {
          '0%': { transform: 'translateY(-100%) translateX(0)', opacity: 1 },
          '100%': { transform: 'translateY(100vh) translateX(-200px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

