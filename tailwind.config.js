module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
	container: {
      center: true,
    },
    colors: {
      white: '#fff',
      darkblue: '#002E45',
      brightblue: '#00BFFF',
      lightblue: '#B3ECFF',
      skyblue: '#E6F9FF'
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
