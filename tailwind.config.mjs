/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'drill-right': {
					'100% , 0%': { transform: 'translateX(1800px)'},
					'100%': {transform: 'translateX(0)'}
				},
				'drill-left': {
					'0% , 100%': { transform: 'translateX(-1800px)'},
					'100%': {transform: 'translateX(0)'}
				}
			}
		},
		fontFamily: {
			'brush': ['"Brush Script MT"', "sans-serif"]
		  },
		letterSpacing: {
			widest: '1.1em'
		  },
		animation: {
			'drill-right': 'drill-right 1.5s ease-in-out',
			'drill-left': 'drill-left 3.5s ease-in-out'
		}
	},
	plugins: [],
}
