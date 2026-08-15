import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          void: "#070707",
          ink: "#0E0E0E",
          charcoal: "#161616",
          slate: "#2A2A2A",
          mist: "#8A8A8A",
          paper: "#EDEAE3",
          fold: "#D4CFC4",
          crease: "#B8B2A6",
        },
        "yingke-background": "#070707",
        "yingke-yellow": "#C4A46A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
