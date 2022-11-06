/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    colors: {
      white: "#f9fafb",
      black: "#222",
      transparent: "transparent",
      current: "currentColor",
      gray: {
        50: "#efefef",
        100: "#d1d5db",
        500: "#888",
        800: "#333",
      },
      accent: "#1d4ed8",
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: false,
    base: false,
  },
};
