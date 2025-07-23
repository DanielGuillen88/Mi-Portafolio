import daisyui from 'daisyui';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    tailwindScrollbarHide,
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave", "corporate"],
    darkTheme: "dark",
  },
};