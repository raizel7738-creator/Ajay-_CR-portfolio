/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#070807",
          card: "rgba(255,255,255,0.055)",
          hover: "rgba(255,255,255,0.09)",
          border: "rgba(255,255,255,0.11)",
        },
        accent: {
          DEFAULT: "#2dd4bf",
          light: "#5eead4",
          cyan: "#38bdf8",
          glow: "rgba(45,212,191,0.24)",
          lime: "#bef264",
          ink: "#0f1412",
        },
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out infinite 1.5s",
        "border-glow": "border-glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "border-glow": {
          from: { boxShadow: "0 0 5px #6366f1, 0 0 10px #6366f150" },
          to: { boxShadow: "0 0 20px #6366f1, 0 0 40px #6366f140" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
