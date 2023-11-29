import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': '#0e1115',
        'background': '#f6f7f9',
        'primary': '#ac9e86',
        'secondary': '#e1e2d5',
        'accent': '#8c645f',
        'squarebg': '#eeeff1',
        'pagebg': "#f6f7f9"
       },
      scale: {
        '175': '1.75',
      },
      screens: {
        tablet:'450px'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
