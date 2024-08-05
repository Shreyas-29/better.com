import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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

        // better.com
        accentBackground: "var(--accent-background)",
        accentPrimary: "var(--accent-primary)",
        accentSecondary: "var(--accent-secondary)",
        backgroundInversePrimary: "var(--background-inverse-primary)",
        backgroundInverseSecondary: "var(--background-inverse-secondary)",
        backgroundInverseTertiary: "var(--background-inverse-tertiary)",
        backgroundPrimary: "var(--background-primary)",
        backgroundSecondary: "var(--background-secondary)",
        backgroundTertiary: "var(--background-tertiary)",
        errorForeground: "var(--error-foreground)",
        errorPrimary: "var(--error-primary)",
        infoForeground: "var(--info-foreground)",
        infoSecondary: "var(--info-secondary)",
        graphPrimary: "var(--graph-primary)",
        graphTertiary: "var(--graph-tertiary)",
        successBackground: "var(--success-background)",
        interactiveDanger: "var(--interactive-danger)",
        interactiveForegroundInversePrimary: "var(--interactive-foreground-inverse-primary)",
        interactiveForegroundMuted: "var(--interactive-foreground-muted)",
        interactiveForegroundPrimary: "var(--interactive-foreground-primary)",
        interactiveForegroundSecondary: "var(--interactive-foreground-secondary)",
        interactiveForegroundTertiary: "var(--interactive-foreground-tertiary)",
        interactiveInverseMuted: "var(--interactive-inverse-muted)",
        interactivePrimary: "var(--interactive-primary)",
        interactiveSecondary: "var(--interactive-secondary)",
        link: "var(--link)",
        strokeDivider: "var(--stroke-divider)",
        strokeBorder: "var(--stroke-border)",
        textHighlight: "var(--text-highlight)",
        textInverseHighlight: "var(--text-inverse-highlight)",
        textInversePrimary: "var(--text-inverse-primary)",
        textInverseSecondary: "var(--text-inverse-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        warningForeground: "var(--warning-foreground)",
        white: "var(--white)",
        accentBorderSecondary: "var(--accent-border-secondary)",
      },
      gridTemplateColumns: {
        "25": "repeat(25, minmax(0, 1fr))",
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
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config

export default config