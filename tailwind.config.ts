import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      writingMode: {
        'vertical': 'vertical-rl',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [
    // ... other plugins
    function({ addUtilities }) {
      const newUtilities = {
        '.writing-vertical': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'upright',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
export default config;
