import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const prerender = true;

/** @type {import('@sveltejs/kit').PageLoad} */
export async function load() {
	throw redirect(307, `${base}/docs/welcome`);
}
