import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "pl-4",
    "mb-4",
    "list-decimal",
    "list-alphabet",
    "list-square",
    "pl-8",
    "pr-4",
    "py-1",
    "gap-x-4",
    "gap-y-2",
    "grid",
    "grid-cols-1",
    "pc:grid-cols-5",
    "pc:grid-cols-2",
    "col-span-4",
    "pc:col-span-12",
    "place-self-center",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "960px",
      pc: "1200px",
    },
    extend: {
      spacing: {
        0.75: "0.1875rem",
        2.25: "0.5625rem",
        4.5: "1.125rem",
        "3/10": "30%",
        34: "8.5rem",
        50: "12.5rem",
        90: "22.5rem",
        100: "25rem",
        120: "30rem",
        "fix-grid-cols-4": "calc((100% - 11rem)/12*4 + 3rem)",
        main: "calc(100vh - 25.0625rem)",
        checkoutMain: "calc(100vh - 2.5rem)",
      },
      fontFamily: {
        sans: ["GT America", "Pretendard Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
