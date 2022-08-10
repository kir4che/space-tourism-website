/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      fontFamily: {
        'belle': ['Bellefair', 'serif'],
        'barlow': ['Barlow Condensed', 'sans-serif'],
      },
      screens: {
        'tablet': {
          'max': '820px'
        },
        'mobile': {
          'max': '567px'
        },
      },
      extend: {
        inset: {
          '86': '360px',
        },
        backgroundImage: {
          'desktop-home': "url('../public/assets/home/background-home-desktop.jpg')",
          'tablet-home': "url('../public/assets/home/background-home-tablet.jpg')",
          'mobile-home': "url('../public/assets/home/background-home-mobile.jpg')",
          'desktop-destination': "url('../public/assets/destination/background-destination-desktop.jpg')",
          'tablet-destination': "url('../public/assets/destination/background-destination-tablet.jpg')",
          'mobile-destination': "url('../public/assets/destination/background-destination-mobile.jpg')",
          'desktop-crew': "url('../public/assets/crew/background-crew-desktop.jpg')",
          'tablet-crew': "url('../public/assets/crew/background-crew-tablet.jpg')",
          'mobile-crew': "url('../public/assets/crew/background-crew-mobile.jpg')",
          'desktop-technology': "url('../public/assets/technology/background-technology-desktop.jpg')",
          'tablet-technology': "url('../public/assets/technology/background-technology-tablet.jpg')",
          'mobile-technology': "url('../public/assets/technology/background-technology-mobile.jpg')",
        },
        colors: {
          'rich-black': '#0B0D17',
          'lavender-blue': '#D0D6F9',
        },
        fontSize: {
          '3xl': '28px',
          '4xl': '32px',
          '6xl': '56px',
          '8xl': '100px',
          '9xl': '150px',
        }
      },
    },
  plugins: [],
}
