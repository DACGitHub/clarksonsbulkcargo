module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	container: {
      center: true,
    },
    colors: {
      white: '#fff',
	  offwhite: '#C4E2F9',
      darkgreen: '#0F2626',
      darkergreen: '#0D2222',
      purple: '#D666FF',
      green: '#44F472',
      red: '#FF4763',
    },
    extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(6deg)'
                    },
                    '50%': {
                        transform: 'rotate(3deg)'
                    },
                },
                wiggle2: {
                    '0%, 100%': {
                        transform: 'rotate(-5deg)'
                    },
                    '50%': {
                        transform: 'rotate(-3deg)'
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 3s ease-in-out infinite',
                wiggle2: 'wiggle2 3s ease-in-out infinite',
            }
        },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
