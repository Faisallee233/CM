import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  theme: {
    extend: {
      colors: {
        gold: "#C9A84C",
        goldLight: "#E8C97A",
        goldDark: "#8B6914",
        deep: "#0A0A0F",
        card: "#16161F",
        border: "rgba(201,168,76,0.18)",
        muted: "#8A8578",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        mont: ["Montserrat", "sans-serif"],
      },
    },}
})


