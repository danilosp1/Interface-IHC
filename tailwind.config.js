/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: '#fef5ee',
          100: '#fee7d6',
          200: '#fbccad',
          300: '#f8a879',
          400: '#f4743b',
          500: '#f1561e',
          600: '#e23d14',
          700: '#bc2c12',
          800: '#952417',
          900: '#782116',
          950: '#410d09',
        },
        secondary: {
          50: '#f7faeb',
          100: '#ebf4d3',
          200: '#d9ebab',
          300: '#bfdc7a',
          400: '#9bc53d',
          500: '#87b032',
          600: '#688c24',
          700: '#506b20',
          800: '#41561e',
          900: '#38491e',
          950: '#1c280b',
        },
        tertiary: {
          50: '#f1f9fe',
          100: '#e2f2fc',
          200: '#bfe4f8',
          300: '#87d0f2',
          400: '#5bc0eb',
          500: '#20a0d7',
          600: '#1280b7',
          700: '#106694',
          800: '#11577b',
          900: '#144966',
          950: '#0d2e44',
  
        },
        quaternary: {
          50: '#f6f7f9',
          100: '#ebecf3',
          200: '#d4d7e3',
          300: '#aeb5cb',
          400: '#818daf',
          500: '#626e95',
          600: '#4d577c',
          700: '#3f4665',
          800: '#373d55',
          900: '#2d3142',
          950: '#212330',
        },
        text: {
          50: '#ffffff',
          100: '#000000'
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}