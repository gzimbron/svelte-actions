<script lang="ts">
	import { hotkey } from '$lib/index.js';

	let purple = false;
	let down = false;

	let isMacOs = navigator.userAgent.toLowerCase().includes('macintosh');
</script>

<section
	use:hotkey={{
		callback: () => {
			purple = !purple;
		},
		alt: true,
		code: 'KeyP'
	}}
	use:hotkey={{
		callback: () => {
			down = !down;
		},
		alt: true,
		shift: true,
		code: 'KeyP'
	}}
	class:purple
>
	<div class="element" class:down></div>

	<p>
		<span>Press</span>
		<span>
			<span class="kbd"> {isMacOs ? 'Option' : 'Alt'} </span> + <span class="kbd">P</span>
		</span>
		<span>or</span>
		<span>
			<span class="kbd"> {isMacOs ? 'Option' : 'Alt'} </span> + <span class="kbd">Shift</span> +
			<span class="kbd">P</span>
		</span>
	</p>
</section>

<style lang="postcss">
	section {
		@apply relative mx-auto h-[calc(100vh-64px)] w-1/2 bg-orange-200 transition-all duration-500;
	}

	.element {
		@apply absolute bottom-auto left-10 right-auto top-10 h-20 w-20 bg-orange-400 transition-all duration-1000;
	}

	p {
		@apply absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-pretty text-xl text-orange-700;
	}

	.element.down {
		@apply bottom-10 top-auto;
	}

	section.purple {
		@apply !bg-purple-200;

		.element {
			@apply left-auto right-10 bg-purple-400;
		}

		p {
			@apply text-purple-700;
		}
	}
</style>
