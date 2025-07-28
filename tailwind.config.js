 module.exports = {
  content: [
    "./index.html",
    "./js/script.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366F1',
          600: '#4F46E5', // Main primary color
          700: '#4338CA',
        },
        secondary: {
          500: '#10B981', // Main secondary color
          600: '#0D9F74',
          700: '#047857',
        },
        dark: {
          800: '#1F2937', // Gray-800
          900: '#111827',
        },
        light: {
          50: '#F9FAFB',
          100: '#F3F4F6',
        }
      },
    },
  },
  plugins: [],
}