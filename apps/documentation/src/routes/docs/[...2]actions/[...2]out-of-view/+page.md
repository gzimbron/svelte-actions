---
title: Out of View
---

# {$frontmatter.title}

This action allows you to execute a callback when an element leaves the viewport.

## Example

[Open example](/examples/out-of-view)

```svelte title="Example.svelte"|copy|lineNumbers
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
```

## Props

| Property    | Type                | Description                                                                                                                                                                                                                                                                        | Default Value |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `callback`  | _(node: T) => void_ | Function to be executed when the element exits the viewport. Receives the observed element as an argument.                                                                                                                                                                         | N/A           |
| `delay`     | _number_            | Delay in milliseconds before the callback is executed. This allows for deferring execution after the element has exited the viewport.                                                                                                                                              | **0**         |
| `repeat`    | _boolean_           | If **true**, the callback will be executed every time the element exits the viewport, allowing multiple executions as the element repeatedly goes out of view. If **false**, the callback will only be executed the first time the element exits the viewport.                     | **false**     |
| `threshold` | _number_            | Threshold for triggering the callback based on the element's visibility in the viewport. - **0**: Triggers when any part of the element starts to exit the viewport. - **1**: Triggers only when the element is completely outside. - Values between **0** and **1** are accepted. | **1**         |
