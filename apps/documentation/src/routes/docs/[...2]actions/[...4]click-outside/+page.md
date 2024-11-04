---
title: Click Outside
---

# {$frontmatter.title}

This action allows you to execute a callback when the user clicks outside of an element.

## Example

[Open example](/examples/click-outside)

```svelte title="Example.svelte"|copy|lineNumbers
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
```

## Props

| Prop       | Type         | Description                                                                                                                                                    | Default Value |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `callback` | _() => void_ | Function to be executed when a click occurs outside the specified element. This should handle the outside-click action, such as closing or hiding the element. | N/A           |
