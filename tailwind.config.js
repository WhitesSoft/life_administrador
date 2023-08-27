/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "body-color": "var(--body-color)",
        "sidebar-color": "var(--sidebar-color)",
        "primary-color": "var(--primary-color)",
        "primary-color-light": "var(--primary-color-light)",
        "primary-color-dark": "var(--primary-color-dark)",
        "toggle-color": "var(--toggle-color)",
        "text-color": "var(--text-color)",
      },
    },
  },
  plugins: [],
}

