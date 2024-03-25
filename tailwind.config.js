/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ed1c25',
        gray: '#222222',
        dark: '#161616',
        white: '#f3f4f8',
        lightWhite: '#fafafc'
      },
      backgroundImage: {
        hero: "url('./assets/background.jpg')",
        gtr: "url('./assets/gtr.jpg')",
        skyline: "url('./assets/skyline.jpg')"
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sofia: ['Sofia Sans Semi Condensed', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        gugi: ['Gugi', 'sans-serif'],
        blackOps: ['Black Ops One', 'system-ui'],
        protest: ['Protest Guerrilla', 'sans-serif'],
        alfa: ['Alfa Slab One', 'serif'],
        bruno: ['Bruno Ace', 'sans-serif']
      }
    }
  },
  plugins: []
};
