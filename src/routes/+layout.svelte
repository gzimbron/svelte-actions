<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	let { children } = $props();

	const examples = new Map<string, string>([
		['/in-view', 'In View'],
		['/out-of-view', 'Out of View'],
		['/hotkey', 'Hotkey']
	]);

	let title = $derived.by(() => {
		const path = $page.url.pathname;

		if (examples.has(path)) {
			return examples.get(path)!;
		}

		return 'Svelte Actions 🪄';
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<nav>
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">Svelte Actions 🪄</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li>
				<details>
					<summary>Examples</summary>
					<ul class=" rounded-t-none bg-base-100 p-2">
						{#each examples.entries() as [link, name]}
							<li><a href={link}>{name}</a></li>
						{/each}
					</ul>
				</details>
			</li>
		</ul>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style lang="postcss">
	nav {
		@apply navbar fixed left-0 top-0 z-10 h-16 w-full bg-base-100 shadow-sm;
	}
	main {
		@apply mt-16;
	}
</style>
