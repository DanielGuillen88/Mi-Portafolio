import daisyui from 'daisyui';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

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