import { createMetaRequestHandler } from '@svelteness/kit-docs/node';
import { base } from '$app/paths';

export const GET = createMetaRequestHandler({
	resolve: (slug, { resolve }) => resolve(slug.substring(base.length))
});
