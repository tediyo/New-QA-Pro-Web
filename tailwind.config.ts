import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
const tailwindcssAnimate = require('tailwindcss-animate');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Custom background color
        foreground: "var(--foreground)",  // Custom foreground color
      },
    },
  },
  plugins: [
    tailwindcssAnimate(), // Tailwind CSS Animate plugin
  ],
};

export default config;
