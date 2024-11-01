/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        'accent': '#64ffda',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2563eb",
          "secondary": "#4f46e5",
          "accent": "#64ffda",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
        },
        dark: {
          "primary": "#3b82f6",
          "secondary": "#6366f1",
          "accent": "#64ffda",
          "neutral": "#1f2937",
          "base-100": "#0a192f",
          "base-200": "#112240",
          "base-300": "#233554",
        },
      },
    ],
  },
}

