<script>
	import { inView } from '@gzim/svelte-actions';

	const inViewParams = {
		callback: () => {
			alert('Element entered the viewport');
		}
	};
</script>

<section>
	<span>👇🏻 Scroll down</span>

	<p use:inView={inViewParams}>Your element</p>
</section>

<style>
	section {
		height: 300vh;
		position: relative;
	}

	span {
		position: absolute;
		left: 50%;
		top: 30vh;

		font-size: 2rem;
	}

	p {
		position: absolute;
		left: 50%;
		top: 200vh;
		padding: 10px;
		background-color: blue;
		color: white;
	}
</style>
