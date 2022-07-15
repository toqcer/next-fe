module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          '2xl': '2rem',
        },
      },
      colors: {
        primary: '#14213D',
        success: '#35D227',
        danger: '#D22727',
        orange: '#FCA311',
        'light-orange': '#FFBF56',
        muted: '#C4C4C4',
        gay: '#E5E5E5',
        'dark-gray': '#56585D',
        'midnight-blue': '#313A55',
        'light-danger': '#E14154',
        'orange-500': '#F59E0B',
      },
    },
  },
  plugins: [],
};
