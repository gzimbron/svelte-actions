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
	use:hotkey={{
		callback: () => {
			alert('You have pressed Alt/Option + Shift + M');
		},
		alt: true,
		shift: true,
		code: 'KeyM'
	}}
>
	<p>Press Alt/Option + P</p>
	<p>Press Alt/Option + Shift + M</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;

		font-size: 2rem;
		color: rgb(var(--kd-color-brand));
	}
</style>
