<button on:click={() => history.back()}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1rem"
		height="1rem"
		viewBox="0 0 24 24"
		{...$$props}
	>
		<path
			fill="currentColor"
			d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"
		/>
	</svg> Go Back
</button>

<slot />

<style>
	button {
		position: fixed;
		top: 80px;
		left: 1rem;
		z-index: 100;

		padding: 0.5rem;
		border: 1px solid transparent;
		border-radius: 0.25rem;
		background-color: rgb(var(--kd-color-brand));
		color: rgb(var(--kd-color-inverse));

		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
