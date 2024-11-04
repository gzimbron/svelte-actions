import { redirect } from '@sveltejs/kit';
import { PUBLIC_BASE_PATH } from '$env/static/public';

export const prerender = true;

const base = PUBLIC_BASE_PATH || '';

/** @type {import('./$types').PageLoad} */
export function load() {
	throw redirect(307, `${base}/docs/welcome`);
}
