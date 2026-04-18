/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090908",
        graphite: "#171716",
        pearl: "#f7f7f2",
        zincglass: "rgba(255,255,255,0.08)",
        signal: "#1dd6a5",
        coral: "#ff6f61",
        citrine: "#f4c95d",
        ocean: "#43c9e8"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(29, 214, 165, 0.16)",
        card: "0 18px 60px rgba(0, 0, 0, 0.18)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
