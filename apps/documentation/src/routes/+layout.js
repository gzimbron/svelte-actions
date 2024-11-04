import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export const load = createKitDocsLoader({
	sidebar: {
		'/': '/docs',
		'/docs': '/docs',
		'/examples': null
	}
});
