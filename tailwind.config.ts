import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      md: { max: '840px' },
      // => @media (max-width: 840px) { ... }

      sm: { max: '640px' },
      // => @media (max-width: 640px) { ... }

      sx: { max: '468px' }
      // => @media (max-width: 300px) { ... }
    },
    extend: {
      colors: {
        slate: {
          100: '#ccc'
        },
        orange: { 500: '#fa6d1b' }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
