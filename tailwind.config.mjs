/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        javascript: '#f7df1e',
      },
      fontFamily: {
        clash: ['Clash', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'javascript-radial': 'radial-gradient(ellipse farthest-corner at 0% 0%, #FFFE65, #F7DF1F)',
      },
      padding: {
        section: '1.5rem',
      }
    },
  },
  plugins: [],
}
