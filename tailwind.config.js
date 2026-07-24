/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}"
  ],
  // Use the same class the ThemeService sets on <html> so that
  // Tailwind dark: utilities and CSS variable overrides stay in sync.
  darkMode: ['class', '.dark-theme'],
  theme: {
    extend: {},
  },
  plugins: [],
}
