import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				custom: {
					primary: '#00a1ff',
					secondary: '#0023ff',
					accent: '#00acff',
					neutral: '#010a15',
					'base-100': '#faffff',
					info: '#00f8ff',
					success: '#93e800',
					warning: '#ebc500',
					error: '#d30000'
				}
			}
		]
	},

	plugins: [typography, forms, daisyui]
} satisfies Config;
