// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1A2B47',
        'brand-orange': '#F28C28',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}