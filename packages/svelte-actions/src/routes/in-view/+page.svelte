<script lang="ts">
	import { inView, type InViewParams } from '$lib/index.js';
	import swal from 'sweetalert2';

	const inViewParams: InViewParams = {
		callback: () => {
			swal.fire({
				title: 'Hooray 🎉!',
				text: 'The element is now 100% in view'
			});
		},
		repeat: true,
		threshold: 1
	};
</script>

<section>
	<p>👇🏻 Scroll down</p>

	<p class="!top-[120vh]">You're almost there...</p>

	<div class="inview" use:inView={inViewParams}></div>
</section>

<style lang="postcss">
	section {
		@apply relative mx-auto h-[calc(100vh*2)] w-1/2 bg-gradient-to-b from-purple-100 to-pink-400;
	}

	p {
		@apply absolute left-1/2 top-10 -translate-x-1/2 text-4xl text-purple-700;
	}

	.inview {
		@apply absolute left-1/2 top-[150vh] h-20 w-20 -translate-x-1/2 bg-red-500 transition-all duration-100 ease-in-out;
	}
</style>
