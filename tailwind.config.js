/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#FFFFFF",
        natural: "#404040",
        error: "#ef4444",
        one: "#f4f4f5",
        two: "#e4e4e7",
        three: "#d4d4d8",
        four: "#71717a",
        five: "#27272a",
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
