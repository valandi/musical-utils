import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        pink: '#f72585',
        purple: '#7209b7',
        midnight: '#3a0ca3',
        'midnight-dark': '#0c1e3e',
        'dark-blue': '#4361ee',
        'sky-blue': '#1c69c0',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
