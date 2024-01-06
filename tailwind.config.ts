import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
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
        // ...
      },
    },
  },
  plugins: [],
}
export default config
