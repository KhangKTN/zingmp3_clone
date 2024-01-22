/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      screens: {
        'wide': '1600px'
      },
      backgroundColor:{
        'sidebar': '#dde4e4',
        'primary': '#ced9d9',
        'button': '#dce8e8',
        'player': '#c1d8d8',
        'active': '#e7ebeb'
      },
      colors: {
        'active': '#0f7070'
      },
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px)',
            'transform': 'translateX(-500px)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            'transform': 'translateX(0)'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px)',
            'transform': 'translateX(500px)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            'transform': 'translateX(0)'
          }
        },
        'slide-left-two': {
          '0%': {
            '-webkit-transform': 'translateX(500px)',
            'transform': 'translateX(500px)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            'transform': 'translateX(0)'
          }
        }

      },
      animation: {
        'slide-right': 'slide-right 1s cubic-bezier(.25,.46,.45,.94) both',
        'slide-left': 'slide-left 1s cubic-bezier(.25,.46,.45,.94) both',
        'slide-left-two': 'slide-left-two 1s cubic-bezier(.25,.46,.45,.94) both'
      }
    },
  },
  plugins: [],
}

