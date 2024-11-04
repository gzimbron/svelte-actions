<script lang="ts">
	import { outOfView, type OutOfViewParams } from '$lib/index.js';
	import swal from 'sweetalert2';

	const outOfViewParams: OutOfViewParams = {
		callback: () => {
			swal.fire({
				title: '🥷🏻',
				text: 'The element is now 100% out of view'
			});
		},
		repeat: true,
		threshold: 1
	};
</script>

<section id="out-of-view">
	<p>👇🏻 Scroll down</p>

	<div class="element" use:outOfView={outOfViewParams}></div>
</section>

<style lang="postcss">
	section {
		@apply relative mx-auto h-[calc(100vh*2)] w-1/2 bg-gradient-to-b from-purple-100 to-pink-400;
	}

	p {
		@apply absolute left-1/2 top-[50vh] -translate-x-1/2 -translate-y-1/2 text-4xl text-purple-700;
	}

	.element {
		@apply absolute left-1/2 top-32 z-20 h-20 w-20 -translate-x-1/2 bg-red-500 transition-all duration-100 ease-in-out;
	}
</style>
