/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./src/routes/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "app-bg": "#16181e",
        "log-tab": "#050811",
        "signup-button": "#1f2b49",
        "login-button": "#323746"
      }
    },
  },
  plugins: [],
}

