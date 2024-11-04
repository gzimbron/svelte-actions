import { redirect } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	throw redirect(307, `${url.href}/docs/welcome`);
}
