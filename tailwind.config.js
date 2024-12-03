/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"], // Ajout de la police Outfit
        sand: ["Quicksand", "sans-serif"],
      },
      colors: {
        black: "rgb(80 80 80 / 1)",
        gold: "rgb(224 170 62/1)",
        gray: "rgb(170 170 170 / 1)",
      },
      filter: {
        custom:
          "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
      },
      transitionProperty: {
        all: "all", // Optionnel, déjà inclus dans Tailwind
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out", // Optionnel, déjà inclus dans Tailwind
      },
      transitionDuration: {
        300: "300ms", // Optionnel, déjà inclus dans Tailwind
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"), // Plugin nécessaire pour les filtres
  ],
};
