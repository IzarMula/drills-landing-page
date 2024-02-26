/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'drill-right': {
					'100% , 0%': { transform: 'translateX(1600px)'},
					'100%': {transform: 'translateX(0)'}
				},
				'drill-left': {
					'0% , 100%': { transform: 'translateX(-2000px)'},
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
			'drill-right': 'drill-right 1.2s ease-in-out',
			'drill-left': 'drill-left 2.4s ease-in-out',
			'bounce': 'bounce 1.2s infinite'
		}
	},
	plugins: [],
}
