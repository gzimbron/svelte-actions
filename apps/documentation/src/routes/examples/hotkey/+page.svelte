<script>
	import { hotkey } from '@gzim/svelte-actions';
</script>

<section
	use:hotkey={{
		callback: () => {
			alert('You have pressed Alt + P');
		},
		alt: true,
		code: 'KeyP'
	}}
>
	<p>Press Alt/Option + P</p>
	<button
		use:hotkey={{
			alt: true,
			code: 'KeyB'
		}}
		on:click={() => {
			alert('Button pressed');
		}}
	>
		Click or press Alt/Option + B</button
	>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;

		font-size: 2rem;
		color: rgb(var(--kd-color-brand));
	}

	button {
		padding: 0.5rem 1rem;
		margin: 1rem;
		border: 1px solid transparent;
		border-radius: 0.25rem;
		background-color: rgb(var(--kd-color-brand));
		color: rgb(var(--kd-color-inverse));
	}
</style>
