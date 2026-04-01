import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        sage: "#E7EEE4",
        blush: "#F7EFEC",
        stone: "#8A8F8C",
        charcoal: "#242524"
      },
      boxShadow: {
        soft: "0 10px 30px -20px rgba(36, 37, 36, 0.28)"
      },
      borderRadius: {
        soft: "1.25rem"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
