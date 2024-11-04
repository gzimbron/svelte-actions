---
title: HotKey
---

# {$frontmatter.title}

This action allows you to execute a callback when a key or combination of keys are pressed.

## Example

[Open example](/examples/hotkey)

```svelte title="Example.svelte"|copy|lineNumbers
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
```

## Props

| Property   | Type         | Description                                                                                                                                                                     | Default Value |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `callback` | _() => void_ | Function to be executed when the specified hotkey is pressed.                                                                                                                   | N/A           |
| `shift`    | _boolean_    | If **true**, the Shift key must be held down for the callback to be executed.                                                                                                   | **false**     |
| `ctrl`     | _boolean_    | If **true**, the Control key must be held down for the callback to be executed.                                                                                                 | **false**     |
| `alt`      | _boolean_    | If **true**, the Alt key must be held down for the callback to be executed.                                                                                                     | **false**     |
| `meta`     | _boolean_    | If **true**, the Meta key (Windows key or Command key on Mac) must be held down for the callback to be executed.                                                                | **false**     |
| `code`     | _string_     | Specifies the key that must be pressed to trigger the callback. Use 'KeyP' format for letters (e.g., 'KeyA' for 'A') or key names like 'Enter', 'Escape', etc., for other keys. | N/A           |
