import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	let redirectionBase = '';

	if (url.origin.includes('github.io')) {
		redirectionBase = url.origin + '/svelte-actions';
	}

	throw redirect(307, `${redirectionBase}/docs/welcome#${base}`);
}
