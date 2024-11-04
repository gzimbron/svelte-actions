<script>
	import { outOfView } from '@gzim/svelte-actions';

	const outOfViewParams = {
		callback: () => {
			alert('Element left the viewport');
		}
	};
</script>

<section>
	<p use:outOfView={outOfViewParams}>Your element</p>
</section>

<style>
	section {
		height: 200vh;
		position: relative;
	}

	p {
		position: absolute;
		left: 50%;
		top: 50vh;
		padding: 10px;
		background-color: blue;
		color: white;
		z-index: 100;
	}
</style>
