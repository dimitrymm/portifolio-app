import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "700px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            p: {
              color: "white",
              fontFamily: "var(--font-jetbrains)",
              fontWeight: "100",
              "@screen sm": {
                fontSize: "16px",
              },
            },
            h1: {
              fontSize: "36px",
              lineHeight: "40px",
              color: "white",
              "@screen sm": {
                fontSize: "24px",
                lineHeight: "28px",
              },
              "@screen md": {
                fontSize: "30px",
                lineHeight: "34px",
              },
            },
            h2: {
              fontSize: "30px",
              lineHeight: "36px",
              color: "white",
              "@screen sm": {
                fontSize: "22px",
                lineHeight: "26px",
              },
              "@screen md": {
                fontSize: "26px",
                lineHeight: "30px",
              },
            },
            h3: {
              fontSize: "24px",
              lineHeight: "32px",
              color: "white",
              "@screen sm": {
                fontSize: "18px", // Adjust as needed
                lineHeight: "22px",
              },
              "@screen md": {
                fontSize: "20px", // Adjust as needed
                lineHeight: "24px",
              },
            },
            h4: {
              fontSize: "20px",
              lineHeight: "28px",
              color: "white",
              "@screen sm": {
                fontSize: "16px", // Adjust as needed
                lineHeight: "20px",
              },
              "@screen md": {
                fontSize: "18px", // Adjust as needed
                lineHeight: "22px",
              },
            },
            strong: {
              color: "white",
            },
            mark: {
              color: "black",
            },
            code: {
              backgroundColor: "rgba(229 229 229 / 0.1)",
              padding: "2px",
              color: "#d4d4d4",
              borderRadius: "4px",
            },
          },
        },
      },
      fontFamily: {},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
