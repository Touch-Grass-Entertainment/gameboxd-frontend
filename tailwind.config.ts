import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
    },
  },
  plugins: [],
}

export default config
