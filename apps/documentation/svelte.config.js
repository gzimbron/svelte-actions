import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		paths: {
			base: '/svelte-actions'
		},

		prerender: {
			entries: ['*'],
			handleMissingId: 'warn'
		}
	}
};

export default config;
