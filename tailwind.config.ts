import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'primary': {
        100: '#fafafa',
        200: '#858585',
        300: '#2b3945',
        400: '#202c37',
        500: '#111517',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
export default config
