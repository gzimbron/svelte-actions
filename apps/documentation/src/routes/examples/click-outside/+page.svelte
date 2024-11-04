<script>
	import { clickOutside } from '@gzim/svelte-actions';

	let scale = 1;

	const handleClickOutside = () => {
		scale++;
	};

	const handleClick = () => {
		scale = 1;
	};
</script>

<section>
	<button style:--scale={scale} use:clickOutside={handleClickOutside} on:click={handleClick}>
		Click me
	</button>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	button {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: none;
		background-color: #56aaff;
		cursor: pointer;
		color: white;
		transform: scale(var(--scale));
		transition: all 0.2s ease-in-out;
	}
</style>
