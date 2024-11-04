import { createSidebarRequestHandler, kebabToTitleCase } from '@svelteness/kit-docs/node';
import { base } from '$app/paths';

/** @type {import('./$types').RequestHandler} */
export const GET = createSidebarRequestHandler({
	formatCategoryName: (dirname) => kebabToTitleCase(dirname).replace('Api', 'API'),
	resolveSlug: ({ resolve }) => base + resolve()
});
