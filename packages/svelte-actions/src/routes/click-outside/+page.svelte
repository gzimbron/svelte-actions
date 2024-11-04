<script lang="ts">
	import { clickOutside } from '$lib/actions/click-outside.js';

	let message = $state('');

	let success = $state(false);

	const handleClickInside = () => {
		message = 'You clicked me!';
		success = true;
	};

	const handleClickOutside = () => {
		message = 'Oops, you clicked outside!';
		success = false;
	};
</script>

<section>
	<button class="btn btn-primary" onclick={handleClickInside} use:clickOutside={handleClickOutside}>
		Click me
	</button>

	{#if message}
		<p class="alert w-fit text-pretty" class:success>
			{message}
		</p>
	{/if}
</section>

<style lang="postcss">
	section {
		@apply relative mx-auto flex max-w-screen-sm flex-col items-center gap-4 p-8;
	}

	p.success {
		@apply alert-success;
	}

	p:not(.success) {
		@apply alert-error;
	}
</style>
