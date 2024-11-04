---
title: In View
---

# {$frontmatter.title}

This action allows you to execute a callback when an element enters the viewport.

## Example

[Open example](/examples/in-view)

```svelte title="Example.svelte"|copy|lineNumbers
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
```

## Props

| Property    | Type                | Description                                                                                                                                                                                                                                                              | Default Value |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| `callback`  | _(node: T) => void_ | Function to be executed when the element enters the viewport. Receives the observed element as an argument.                                                                                                                                                              | N/A           |
| `delay`     | _number_            | Delay in milliseconds before the callback is executed. This allows for deferring execution after the element has entered the viewport.                                                                                                                                   | **0**         |
| `repeat`    | _boolean_           | If **true**, the callback will be executed every time the element enters the viewport, allowing multiple executions as the element repeatedly comes into view. If **false**, the callback will only be executed the first time the element enters the viewport.          | **false**     |
| `threshold` | _number_            | Threshold for triggering the callback based on the element's visibility in the viewport. \n - **0**: Triggers when any part of the element starts to enter the viewport. \n - **1**: Triggers only when fully visible. \n - Values between **0** and **1** are accepted. | **1**         |
