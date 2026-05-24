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
          DEFAULT: "#0a0a0a",
          card: "rgba(255,255,255,0.04)",
          hover: "rgba(255,255,255,0.07)",
          border: "rgba(255,255,255,0.08)",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          cyan: "#22d3ee",
          glow: "rgba(99,102,241,0.3)",
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
