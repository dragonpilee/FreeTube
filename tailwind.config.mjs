/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                youtube: {
                    base: '#000000',
                    surface: '#121212', // Slightly lighter for cards
                    secondary: '#AAAAAA',
                    text: '#FFFFFF',
                    accent: '#FFFFFF' // YTM is mostly white accent
                }
            }
        },
    },
    plugins: [],
}
