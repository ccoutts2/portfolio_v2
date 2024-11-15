import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        clampHome: "clamp(1.4rem, 4.5vw, 2rem)",
        clampHeader: "clamp(3rem, 10vw, 10rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
