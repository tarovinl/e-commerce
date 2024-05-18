/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        futurabook: ["FUTURABOOK", "serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        marquee3: "marquee3 20s linear infinite",
        marquee4: "marquee4 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "100%": { transform: "translateX(-100%)" },
          "0%": { transform: "translateX(%)" },
        },
        marquee2: {
          "100%": { transform: "translateX(%)" },
          "0%": { transform: "translateX(100%)" },
        },
        marquee3: {
          "100%": { transform: "translateX(%)" },
          "0%": { transform: "translateX(-100%)" },
        },
        marquee4: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(%)" },
        },
      },
      colors: {
        "smile-pink": "#f376ac",
        "custom-black": "#2e2e2e",
      },
    },
  },
  plugins: [],
};
