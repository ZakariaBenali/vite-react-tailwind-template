/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			primary: ['Arial', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					200: '#EEF6FB',
					400: '#CDF0F0',
					700: '#BDDDE3',
				},
				secondary: {
					400: '#5FB0E8',
					700: '#2E4369',
				},
				black: '#333339',
				gray: '#56575D',
			},
		},
	},
	plugins: [],
};
