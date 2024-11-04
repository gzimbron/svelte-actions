import { base } from '$app/paths';
import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export const load = createKitDocsLoader({
	sidebar: {
		[`${base}/`]: null,
		[`${base}/docs`]: '/docs',
		[`${base}/examples`]: null
	}
});
