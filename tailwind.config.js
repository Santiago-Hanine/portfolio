/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-bg': '#1A1A1A',
        'dark-blue': '#193264',
        'strong-blue': '#3D7AF1',
        'skill-card': 'rgba(153,153,153,.2)'
      },
      animation:{
        type: 'typing 1.5s steps(40,end), blink 1s step-end infinite'
      },
      keyframes: {
        scroll:{
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-111%)'},
        },
        typing:{
          'from': {width: '0'},
          'to': {width: '60%'}
        },
        blink:{
          'from': { 'border-right-color': 'transparent'},
          '50%': {'border-right-color': 'white'},
          'to': {'border-right-color': 'transparent'}
        },
        menuAppear:{
          'from': { 'opacity': 0,},
          'to': {'opacity': 1}
        },
        menuDisappear:{
          'from': { 'opacity': 1,},
          'to': {'opacity': 0}
        },
      }
    },
    fontFamily: {
      'primary': ['geo', 'sans'],
      'bg': ['Goblin One', 'cursive'],
      'kanit': ['Kanit', 'sans-serif']
    }
  },
  plugins: [],
}

