/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      colors: {
        primary: "#0070f3",
        secondary: "#60a5fa",
        "text-1": "#7c3aed",
        "text-2": "#c4b5fd",
        muted: "#030303",
        danger: "#ff0000",
        foreground: "#303030",
        background: "#e3e3e3",
      },
    },
  },
  plugins: [],
};
