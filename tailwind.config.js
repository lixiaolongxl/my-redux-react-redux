const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		colors: {
			gray: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		},
		screens: {
			'sm': { 'min': '640px', 'max': '767px' },
			'md': { 'min': '768px', 'max': '1023px' },
			'lg': { 'min': '1024px', 'max': '1279px' },
			'xl': { 'min': '1280px', 'max': '1535px' },
			'2xl': { 'min': '1536px' },
		}
	},
	variants: {
		extend: {
			borderColor: ['focus-visible'],
			opacity: ['disabled'],
		},
	},
	plugins: [],
}
