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
        clampHome: "clamp(1.4rem, 4vw, 4rem)",
        clampPageIntro: "clamp(1.2rem, 4vw, 2rem)",
        clampHeader: "clamp(3rem, 10vw, 10rem)",
      },
      width: {
        clampImage: "clamp(10rem, calc(-20rem + 0.8 * 100vw), 20rem)",
        clampSmallImages: "calc(clamp(5em, 7.5vw, 7.5em) * 1.7)",
      },
      height: {
        clampImage: "clamp(15rem, calc(-20rem + 0.8 * 100vw), 25rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
