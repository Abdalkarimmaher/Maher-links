/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#12355B",
          blue: "#1D4F91",
          teal: "#0F8B8D",
          mint: "#DFF5F2",
          cloud: "#F5F7FA",
          ink: "#172033",
        },
      },
      boxShadow: {
        soft: "0 18px 45px -30px rgba(18, 53, 91, 0.35)",
        lift: "0 24px 55px -32px rgba(15, 139, 141, 0.4)",
      },
      fontFamily: {
        arabic: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 520ms ease-out both",
        shimmer: "shimmer 1.4s infinite",
      },
    },
  },
  plugins: [],
};
