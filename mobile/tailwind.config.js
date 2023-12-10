/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        1: '#FFA62B',
        2: '#FFB652',
        3: '#D9891A',
      },
      secondary: {
        1: '#01261C',
        2: '#07261E',
        3: '#000000',
      },
      terciary: {
        1: '#F9F9F9',
        2: '#DFDFDF',
        3: '#B9B9B9',
        4: '#8A8A8A',
        5: '#5A5A5A',
        6: '#3A3A3A',
        7: '#282828',
      },
      background: '#F5F5F5',
    },
    fontFamily: {
      300: 'Quicksand-Light',
      400: 'Quicksand-Regular',
      500: 'Quicksand-Medium',
      600: 'Quicksand-SemiBold',
      700: 'Quicksand-Bold',
    },
    fontSize: {
      small: ['9px', '150%'],
      paragraph: ['12px', '150%'],
      h3: ['15px', '120%'],
      h2: ['19px', '120%'],
      h1: ['23px', '120%'],
    },
    extend: {
      boxShadow: {
        default: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
