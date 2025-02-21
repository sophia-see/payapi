import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "dark-pink": "rgb(186, 66, 112)", //#ba4270
        "link-water-white": "rgb(251, 252, 254)", //#fbfcfe

        "san-juan-blue": "rgb(54, 83, 107)", //#36536b
        "mirage-blue": "rgb(27, 38, 47)", //#1b262f
        "charm-pink": "rgb(218, 109, 151)", //#da6d97
        "light-san-juan-blue": "rgb(108, 130, 148)", //#6c8294

        "red": "rgb(255, 0, 0)", //#FF0000
      },
    },
  },
  plugins: [],
} satisfies Config;
