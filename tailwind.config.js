const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        handshake: {
          "0%": { transform: "rotate(-45deg)", transformOrigin: "bottom left" },
          "25%": {
            transform: "rotate(-25deg)",
            transformOrigin: "bottom left",
          },
          "50%": {
            transform: "rotate(-45deg)",
            transformOrigin: "bottom left",
          },
          "75%": {
            transform: "rotate(-55deg)",
            transformOrigin: "bottom left",
          },
          "100%": {
            transform: "rotate(-45deg)",
            transformOrigin: "bottom left",
          },
        },
        "gradient-flow": {
          "0%": {
            "background-position": "0% 50%",
            "background-size": "100% 100%",
          },
          "25%": {
            "background-position": "75% 50%",
            "background-size": "175% 175%",
          },
          "50%": {
            "background-position": "0% 50%",
            "background-size": "100% 100%",
          },
          "75%": {
            "background-position": "0% 75%",
            "background-size": "175% 175%",
          },
          "100%": {
            "background-position": "0% 50%",
            "background-size": "100% 100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        handshake: "handshake 0.75s ease-out infinite",
        "gradient-flow": "gradient-flow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    //   require("@tailwindcss/typography")
    //   require("@tailwindcss/line-clamp")
    //   require("@tailwindcss/aspect-ratio")
    //   require("@tailwindcss/forms")
  ],
};
