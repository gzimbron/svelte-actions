<script>
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/theme.css';
	import '@svelteness/kit-docs/client/styles/vars.css';

	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import { Button, KitDocs, KitDocsLayout, createSidebarContext } from '@svelteness/kit-docs';
	import Icon from '@iconify/svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;

	const GITHUB_LINK = 'https://github.com/gzimbron/svelte-actions';
	const ZIMBRON_LINK = 'https://zimbron.dev';

	$: ({ meta, sidebar } = data);

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: []
	};

	const { activeCategory } = createSidebarContext(sidebar);

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `${category}${meta.title} | Svelte Actions 🪄` : null;
	$: description = meta?.description;
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="logo" slot="navbar-left">
			<Button href="{base}/">Svelte Actions 🪄</Button>
		</div>

		<div slot="navbar-right-alt">
			<div class="flex">
				<a
					href={ZIMBRON_LINK}
					target="_blank"
					title="Author's website"
					class="relative flex transform-gpu items-center rounded-md border-0 p-2 transition-transform hover:scale-[1.1] text-xl"
				>
					<Icon icon="mdi:web" />
				</a>
				<a
					href={GITHUB_LINK}
					target="_blank"
					title="GitHub repository"
					class="relative flex transform-gpu items-center rounded-md border-0 p-2 transition-transform hover:scale-[1.1] text-xl"
				>
					<Icon icon="mdi:github" />
				</a>
			</div>
		</div>

		<slot />
	</KitDocsLayout>
</KitDocs>

<style>
	:global(:root) {
		--kd-color-brand-rgb: 233, 127, 6;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 213, 149, 76;
	}

	.logo :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo :global(svg) {
		height: 36px;
		overflow: hidden;
	}
</style>
