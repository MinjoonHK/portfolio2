/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Apple SD Gothic Neo", "Noto Sans KR", "sans-serif"],
      },
      animation: {
        fadeUp: "fadeUp 1s forwards",
        borderRotate: "borderRotate 2s linear infinite",
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        borderRotate: {
          from: { "--angle": "0deg" },
          to: { "--angle": "360deg" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
