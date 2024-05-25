import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotatingthing: {
          '0%' : { transform: 'rotate(0deg), translate(0px 0px)'},
          '25%' : {transform: 'rotate(-360deg)'},
          '50%' : {transform: 'translate(0deg)'},
          '75%' : {transform: 'rotate(-360deg)'},
          '100%' : {transform: 'translate(-300px)'}
        }
      },
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
        'rotatingthing' : 'rotatingthing 2s linear'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
